import { questions } from './data.js';
import { generateBaziResults } from './bazi_generator.js';
import { initFlowerModule, refreshHome as refreshFlowerHome } from './flower.js';

// 全局变量
let currentQuestionIndex = 0;
let userAnswers = [];

// DOM 元素：主菜单 & 模块
const mainMenu = document.getElementById('main-menu');
const baziModule = document.getElementById('bazi-module');
const flowerModule = document.getElementById('flower-module');
const menuBazi = document.getElementById('menu-bazi');
const menuFlower = document.getElementById('menu-flower');
const baziBackHome = document.getElementById('bazi-back-home');
const flowerBackHome = document.getElementById('flower-back-home');

// 八字测试内部元素
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const resultsContainer = document.getElementById('results-container');

// 百花谱内部元素
const flowerSubBaipu = document.getElementById('flower-sub-baipu');
const flowerSubQuiz = document.getElementById('flower-sub-quiz');
const baipuContent = document.getElementById('baipu-content');
const detailView = document.getElementById('detailView');
const quizPlaceholder = document.getElementById('quiz-placeholder');

let flowerInitialized = false;

// 显示主菜单，隐藏其他模块，重置八字状态
function showMainMenu() {
    mainMenu.classList.remove('hidden');
    baziModule.classList.add('hidden');
    flowerModule.classList.add('hidden');
    resetBaziState();
}

// 重置八字测试状态（回到欢迎屏）
function resetBaziState() {
    welcomeScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    loadingScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    currentQuestionIndex = 0;
    userAnswers = [];
}

// 显示八字模块
function showBaziModule() {
    mainMenu.classList.add('hidden');
    baziModule.classList.remove('hidden');
    flowerModule.classList.add('hidden');
    resetBaziState();
}

// 显示百花谱模块
function showFlowerModule() {
    mainMenu.classList.add('hidden');
    baziModule.classList.add('hidden');
    flowerModule.classList.remove('hidden');
    if (!flowerInitialized) {
        initFlowerModule();
        flowerInitialized = true;
    } else {
        // 刷新网格（如果当前显示百花谱检索）
        if (!baipuContent.classList.contains('hidden') && refreshFlowerHome) {
            refreshFlowerHome();
        }
    }
    // 默认显示百花谱检索，隐藏占位
    showBaipu();
}

// 百花谱内部：显示检索
function showBaipu() {
    baipuContent.classList.remove('hidden');
    detailView.classList.add('hidden');
    quizPlaceholder.classList.add('hidden');
    flowerSubBaipu.classList.add('bg-green-700', 'text-white');
    flowerSubBaipu.classList.remove('bg-white', 'text-green-700', 'border');
    flowerSubQuiz.classList.remove('bg-green-700', 'text-white');
    flowerSubQuiz.classList.add('bg-white', 'text-green-700', 'border', 'border-green-300');
    if (flowerInitialized && refreshFlowerHome) refreshFlowerHome();
}

// 百花谱内部：显示花语测试占位
function showQuizPlaceholderFn() {
    baipuContent.classList.add('hidden');
    detailView.classList.add('hidden');
    quizPlaceholder.classList.remove('hidden');
    flowerSubQuiz.classList.add('bg-green-700', 'text-white');
    flowerSubQuiz.classList.remove('bg-white', 'text-green-700', 'border');
    flowerSubBaipu.classList.remove('bg-green-700', 'text-white');
    flowerSubBaipu.classList.add('bg-white', 'text-green-700', 'border', 'border-green-300');
}

// ========= 八字测试原有逻辑 =========
function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.title;
    questionCounter.textContent = `${String(currentQuestionIndex + 1).padStart(2, '0')}/10`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn fade-in';
        btn.style.animationDelay = `${idx * 0.1}s`;
        btn.innerHTML = `<span class="font-bold mr-4 text-red-900">${opt.id}.</span>${opt.text}`;
        btn.addEventListener('click', () => handleOptionSelect(opt));
        optionsContainer.appendChild(btn);
    });
}

function handleOptionSelect(option) {
    userAnswers.push(option);
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => renderQuestion(), 300);
    } else {
        finishQuiz();
    }
}

async function finishQuiz() {
    quizScreen.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    try {
        const results = await generateBaziResults(userAnswers);
        renderResults(results);
        loadingScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
    } catch (error) {
        console.error("Failed to generate results", error);
        alert("推演过程中出现波动，请重试。");
        resetBaziState();
    }
}

function renderResults(results) {
    resultsContainer.innerHTML = '';
    results.forEach((res, index) => {
        const card = document.createElement('div');
        card.className = 'result-card p-8 rounded-lg space-y-8 fade-in';
        card.style.animationDelay = `${index * 0.2}s`;
        let pillarsHtml = res.pillars.map(p => `
            <div class="bazi-pillar">
                <div class="bazi-label">${p.label}</div>
                <div class="bazi-char text-red-900">${p.gan}</div>
                <div class="bazi-char">${p.zhi}</div>
            </div>
        `).join('');
        let descHtml = res.desc.replace(/\\n/g, '<br>');
        card.innerHTML = `
            <div class="flex items-center justify-between border-b border-[#e8dfce] pb-4">
                <h3 class="text-2xl font-bold tracking-widest text-red-900">${res.title}</h3>
                <div class="text-right text-sm text-ink-light space-y-1 font-mono">
                    <p>${res.solar_date}</p>
                    <p>${res.lunar_date}</p>
                </div>
            </div>
            <div class="bazi-grid my-8">${pillarsHtml}</div>
            <div class="bg-white/50 p-6 rounded border border-[#e8dfce] text-ink leading-loose text-justify">
                <p class="font-bold text-red-900 mb-2">【命局简析】</p>
                ${descHtml}
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

// 重新推演（结果页的按钮）
function restartQuiz() {
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    userAnswers = [];
}

// 事件绑定
menuBazi.addEventListener('click', showBaziModule);
menuFlower.addEventListener('click', showFlowerModule);
baziBackHome.addEventListener('click', showMainMenu);
flowerBackHome.addEventListener('click', showMainMenu);
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
flowerSubBaipu.addEventListener('click', showBaipu);
flowerSubQuiz.addEventListener('click', showQuizPlaceholderFn);

// 初始化显示主菜单
showMainMenu();