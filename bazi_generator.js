import { tian_gan, di_zhi } from './data.js';

export async function generateBaziResults(answers) {
    let tags = {};
    answers.forEach(ans => {
        Object.assign(tags, ans.tags);
    });
    const riGan = tags.ri_gan || tian_gan[Math.floor(Math.random() * 10)];
    const results =[
        createMockResult(riGan, tags, 1),
        createMockResult(riGan, tags, 2),
        createMockResult(riGan, tags, 3)
    ];
    try {
        const interpretation = await getAIInterpretation(results[0], tags);
        results[0].desc = interpretation;
    } catch (e) {
        console.error("AI Error:", e);
    }
    return results;
}

function createMockResult(riGan, tags, variant) {
    const yearGan = getRandomElement(tian_gan);
    const yearZhi = getRandomElement(di_zhi);
    const monthGan = getRandomElement(tian_gan);
    const monthZhi = getRandomElement(di_zhi);
    const riZhi = getRandomElement(di_zhi);
    const hourGan = getRandomElement(tian_gan);
    const hourZhi = getRandomElement(di_zhi);
    const year = 1990 + Math.floor(Math.random() * 20);
    const month = 1 + Math.floor(Math.random() * 11);
    const day = 1 + Math.floor(Math.random() * 27);
    const hour = Math.floor(Math.random() * 24);
    return {
        title: `推演命局 ${variant}`,
        pillars:[
            { label: '年柱', gan: yearGan, zhi: yearZhi },
            { label: '月柱', gan: monthGan, zhi: monthZhi },
            { label: '日柱', gan: riGan, zhi: riZhi },
            { label: '时柱', gan: hourGan, zhi: hourZhi }
        ],
        solar_date: `公历：${year}年${month}月${day}日 ${hour}时`,
        lunar_date: `农历：${year}年某月某日 ${hour}时`,
        desc: generateFallbackDesc(riGan, tags)
    };
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateFallbackDesc(riGan, tags) {
    const riganDesc = {
        '甲': '参天大树，生机勃勃。为人正直有担当，目标感极强，适合作为团队核心。',
        '乙': '藤蔓花草，柔韧度极高。环境适应力强，心思细腻，善于在夹缝中求生存。',
        '丙': '太阳之火，热情洋溢。慷慨大方，极具感染力，常能照亮周围的人。',
        '丁': '灯烛之光，内敛神秘。洞察力强，执着且有智慧，外柔内刚。',
        '戊': '高山厚土，稳重包容。重信守诺，踏实可靠，是他人坚实的后盾。',
        '己': '田园之土，滋养万物。心思绵密，善于策划，内秀且包容。',
        '庚': '刀斧之金，刚毅果决。讲义气，执行力强，做事干脆利落。',
        '辛': '珠玉之金，精致优雅。自尊心强，追求完美，有着独特的品味。',
        '壬': '江河之水，奔流不息。心胸开阔，智慧超群，不拘小节。',
        '癸': '雨露之水，润物无声。敏感细腻，直觉极准，沉静而深邃。'
    };
    let desc = `日主为${riGan}。${riganDesc[riGan] || ''} `;
    desc += `结合您的选择，此命局显示家庭背景对您的性格塑造有深远影响。面对困难时，您展现出特有的应对哲学。`;
    desc += `在人际与感情中，您更倾向于寻找能与自身互补的灵魂契合者。`;
    return desc;
}

async function getAIInterpretation(bazi, tags) {
    const prompt = `作为一个精通中国传统八字命理的大师，请根据以下信息为一个小红书风格的OC（原创角色）八字测试生成一段生动、玄学感强且符合年轻人语境的解析文案（约200字）。
    八字天干日主：${bazi.pillars[2].gan}
    要求：结合性格特征、事业倾向和感情观进行综合描述，排版美观。`;
    const encodedUrl = encodeURIComponent("https://openrouter.ai/api/v1/chat/completions");
    const response = await fetch("https://dev-edge.flowith.net/api-proxy/" + encodedUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "deepseek/deepseek-chat-v3-0324:free",
            messages:[{ role: "user", content: prompt }]
        })
    });
    if (!response.ok) throw new Error("API failed");
    const data = await response.json();
    return data.choices[0].message.content;
}