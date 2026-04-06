export const questions =[
    { id: 'q1', title: '请选择您的性别（决定大运顺逆）', options:[
        { id: 'A', text: '男', tags: { gender: 'M' } },
        { id: 'B', text: '女', tags: { gender: 'F' } }
    ]},
    { id: 'q2', title: '你的原生家庭氛围更像哪一种？', options:[
        { id: 'A', text: '书香门第，规矩严格，父母关系传统', tags: { nian_gan:['正印', '偏印'], nian_zhi: ['正官', '七杀'] } },
        { id: 'B', text: '经商家庭，忙碌自由，父母给你很大的空间', tags: { nian_gan: ['正财', '偏财'], nian_zhi:['食神', '伤官'] } },
        { id: 'C', text: '竞争激烈，从小被寄予厚望，压力较大', tags: { nian_gan: ['七杀', '正官'], nian_zhi: ['比肩', '劫财'] } },
        { id: 'D', text: '温暖包容，父母宠爱，像朋友一样相处', tags: { nian_gan:['食神', '伤官'], nian_zhi: ['正印', '偏印'] } },
        { id: 'E', text: '独立早熟，父母陪伴较少，凡事靠自己', tags: { nian_gan: ['比肩', '劫财'], nian_zhi: ['正财', '偏财'] } },
        { id: 'F', text: '艺术氛围，家庭成员个性鲜明，常有变动', tags: { nian_gan: ['伤官'], nian_zhi: ['偏财'] } },
        { id: 'G', text: '稳定踏实，按部就班，注重物质安全感', tags: { nian_gan: ['正财'], nian_zhi: ['正印'] } }
    ]},
    { id: 'q3', title: '你在成长过程中，遇到困难或冲突时，第一反应通常是？', options:[
        { id: 'A', text: '强势面对，直接解决，不怕冲突', tags: { yue_zhi:['比肩', '劫财'], yue_gan: ['正官', '七杀'] } },
        { id: 'B', text: '迂回处理，找帮手或寻求规则保护', tags: { yue_zhi: ['正印', '偏印'], yue_gan: ['正官'] } },
        { id: 'C', text: '沟通说服，用智慧或口才化解', tags: { yue_zhi: ['食神', '伤官'], yue_gan:['比肩', '劫财'] } },
        { id: 'D', text: '忍耐退让，顾全大局，避免麻烦', tags: { yue_zhi: ['正官', '七杀'], yue_gan: ['正印', '偏印'] } },
        { id: 'E', text: '灵活变通，随遇而安，不执着于结果', tags: { yue_zhi:['偏财'], yue_gan: ['食神', '伤官'] } },
        { id: 'F', text: '坚持原则，哪怕吃亏也要守规矩', tags: { yue_zhi:['正印'], yue_gan: ['正财'] } },
        { id: 'G', text: '寻求刺激，冒险一试，不按常理出牌', tags: { yue_zhi:['伤官', '七杀'], yue_gan: ['偏财'] } }
    ]},
    { id: 'q4', title: '在职场或社交中，别人对你最深刻的印象是什么？', options:[
        { id: 'A', text: '雷厉风行，目标感强，天生的领导者', tags: { yue_gan:['七杀', '正官'], yue_zhi: ['比肩', '劫财'] } },
        { id: 'B', text: '圆滑周到，善于交际，资源整合高手', tags: { yue_gan: ['偏财', '正财'], yue_zhi:['食神', '伤官'] } },
        { id: 'C', text: '认真负责，任劳任怨，值得信赖的助手', tags: { yue_gan: ['正印', '正官'], yue_zhi: ['正印', '偏印'] } },
        { id: 'D', text: '创新独特，想法天马行空，难以捉摸', tags: { yue_gan:['伤官'], yue_zhi: ['偏财'] } },
        { id: 'E', text: '温和谦逊，与世无争，团队里的润滑剂', tags: { yue_gan: ['食神'], yue_zhi: ['正印'] } },
        { id: 'F', text: '固执己见，坚持自我，技术或专业过硬', tags: { yue_gan: ['比肩'], yue_zhi: ['正官'] } },
        { id: 'G', text: '慷慨大方，讲义气，喜欢照顾别人', tags: { yue_gan:['劫财'], yue_zhi: ['食神'] } }
    ]},
    { id: 'q5', title: '你理想中的职业状态或行业更偏向于？', options:[
        { id: 'A', text: '拥有权力，管理他人，影响社会规则', tags: { yue_zhi: ['辰', '戌', '丑', '未'], yue_shishen: '官杀' } },
        { id: 'B', text: '创造财富，商业运作，追求高收益', tags: { yue_zhi:['辰', '戌', '丑', '未'], yue_shishen: '财星' } },
        { id: 'C', text: '技术专研，专业深耕，成为领域专家', tags: { yue_zhi:['辰', '戌', '丑', '未'], yue_shishen: '印星' } },
        { id: 'D', text: '自由职业，艺术创作，表达自我', tags: { yue_zhi: ['辰', '戌', '丑', '未'], yue_shishen: '食伤' } },
        { id: 'E', text: '团队协作，与人打交道，服务业或人脉', tags: { yue_zhi: ['辰', '戌', '丑', '未'], yue_shishen: '比劫' } },
        { id: 'F', text: '稳定编制，朝九晚五，追求安稳保障', tags: { yue_zhi:['正官', '正印'], yue_shishen: '官印' } },
        { id: 'G', text: '高风险高回报，投资或创业，不确定性', tags: { yue_zhi: ['七杀', '偏财'], yue_shishen: '杀财' } }
    ]},
    { id: 'q6', title: '如果用一种植物或自然现象形容你的性格核心，你觉得自己更像？', options:[
        { id: 'A', text: '大树（甲木）：正直、有担当、目标坚定', tags: { ri_gan: '甲' } },
        { id: 'B', text: '花草（乙木）：柔韧、适应力强、心思细腻', tags: { ri_gan: '乙' } },
        { id: 'C', text: '太阳（丙火）：热情、慷慨、感染力强', tags: { ri_gan: '丙' } },
        { id: 'D', text: '灯火（丁火）：内敛、智慧、神秘、执着', tags: { ri_gan: '丁' } },
        { id: 'E', text: '大地（戊土）：稳重、诚信、包容、缓慢', tags: { ri_gan: '戊' } },
        { id: 'F', text: '田园（己土）：滋养、策划、谨慎、内秀', tags: { ri_gan: '己' } },
        { id: 'G', text: '刀剑（庚金）：刚毅、果断、义气、尖锐', tags: { ri_gan: '庚' } },
        { id: 'H', text: '珠宝（辛金）：精致、自尊心强、挑剔、优雅', tags: { ri_gan: '辛' } },
        { id: 'I', text: '江河（壬水）：豪迈、智慧、奔放、不拘小节', tags: { ri_gan: '壬' } },
        { id: 'J', text: '雨露（癸水）：细腻、敏感、直觉强、沉静', tags: { ri_gan: '癸' } }
    ]},
    { id: 'q7', title: '在亲密关系（伴侣）中，你最看重对方的什么特质？', options:[
        { id: 'A', text: '能力出众，让我崇拜，能带领我成长', tags: { ri_zhi: ['正官', '七杀'] } },
        { id: 'B', text: '经济稳定，会赚钱，给我物质安全感', tags: { ri_zhi: ['正财', '偏财'] } },
        { id: 'C', text: '温柔体贴，照顾我，像家人一样温暖', tags: { ri_zhi:['正印', '偏印'] } },
        { id: 'D', text: '风趣幽默，懂浪漫，生活充满惊喜', tags: { ri_zhi: ['食神', '伤官'] } },
        { id: 'E', text: '志同道合，像朋友一样，可以一起奋斗', tags: { ri_zhi: ['比肩', '劫财'] } },
        { id: 'F', text: '成熟稳重，有责任心，能处理复杂事务', tags: { ri_zhi:['正官', '正印'] } },
        { id: 'G', text: '独立自由，互不干涉，保持个人空间', tags: { ri_zhi: ['偏财', '七杀'] } }
    ]},
    { id: 'q8', title: '如果你在婚姻或合作中遇到矛盾，你通常会怎么做？', options:[
        { id: 'A', text: '直接摊牌，必须争出对错，解决为止', tags: { ri_zhi: ['比肩', '劫财', '正官', '七杀'] } },
        { id: 'B', text: '冷战，等对方先低头，或者不了了之', tags: { ri_zhi: ['正印', '偏印', '食神'] } },
        { id: 'C', text: '用幽默或甜言蜜语化解，给台阶下', tags: { ri_zhi: ['食神', '伤官'] } },
        { id: 'D', text: '理性分析，拿出证据或数据说服对方', tags: { ri_zhi: ['正官', '正印'] } },
        { id: 'E', text: '看利益，如果损失不大，可以妥协', tags: { ri_zhi: ['偏财', '正财'] } },
        { id: 'F', text: '找第三方（长辈、朋友）来评理调解', tags: { ri_zhi: ['正印', '偏印', '比肩', '劫财'] } },
        { id: 'G', text: '直接转身离开，无法忍受被束缚', tags: { ri_zhi:['伤官', '七杀'] } }
    ]},
    { id: 'q9', title: '你对于晚年生活或子女教育的态度更倾向于？', options:[
        { id: 'A', text: '望子成龙，严格要求，希望后代超越自己', tags: { shi_gan: ['正官', '七杀'] } },
        { id: 'B', text: '给予最好的物质条件，不留余力支持', tags: { shi_gan: ['正财', '偏财'] } },
        { id: 'C', text: '注重精神传承，培养品德和学识', tags: { shi_gan: ['正印', '偏印'] } },
        { id: 'D', text: '放任自由，尊重孩子天性，开心就好', tags: { shi_gan: ['食神', '伤官'] } },
        { id: 'E', text: '老了依然要奋斗，不想麻烦子女', tags: { shi_gan:['比肩', '劫财'] } },
        { id: 'F', text: '享受生活，环游世界，为自己而活', tags: { shi_zhi: ['食神', '偏财'] } }
    ]},
    { id: 'q10', title: '在你的人生规划中，你觉得自己最好的运气（爆发期）通常出现在哪个阶段？', options:[
        { id: 'A', text: '青年时期（20-35岁），年少得志', tags: { timing: 'early' } },
        { id: 'B', text: '中年时期（35-50岁），厚积薄发', tags: { timing: 'mid' } },
        { id: 'C', text: '中晚年（50岁以后），大器晚成', tags: { timing: 'late' } },
        { id: 'D', text: '一直很平稳，没有大起大落', tags: { timing: 'stable' } },
        { id: 'E', text: '起伏很大，抓住机会就翻身', tags: { timing: 'volatile' } },
        { id: 'F', text: '靠自己白手起家，中年后逐步积累', tags: { timing: 'self_made' } }
    ]}
];

export const tian_gan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const di_zhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];