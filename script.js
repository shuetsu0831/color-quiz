let currentQuestion = 1;
let correctCount = 0;
let timer;
let correctTileIndex;
let gameData = [];
let selectedDifficulty = 'hard'; // デフォルトで上級レベル
let currentStage = 1;
let stageQuestions = [];

const TOTAL_QUESTIONS = 7;
const TILE_COUNT = 4; // 4択
const TIME_PER_QUESTION = 0; // 時間制限なし

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', () => {
    initializeStageSelect();
});

function initializeStageSelect() {
    const stageGrid = document.getElementById('stageGrid');
    if (!stageGrid) return;
    
    stageGrid.innerHTML = '';
    const clearedStages = getClearedStages();
    
    for (let i = 1; i <= 20; i++) {
        const btn = document.createElement('button');
        btn.className = 'stage-btn';
        if (clearedStages.includes(i)) {
            btn.classList.add('cleared');
        }
        btn.textContent = i;
        btn.onclick = () => selectStage(i);
        stageGrid.appendChild(btn);
    }
}

function getClearedStages() {
    const cleared = localStorage.getItem('clearedStages');
    return cleared ? JSON.parse(cleared) : [];
}

function saveStageCleared(stage) {
    const clearedStages = getClearedStages();
    if (!clearedStages.includes(stage)) {
        clearedStages.push(stage);
        localStorage.setItem('clearedStages', JSON.stringify(clearedStages));
    }
}

function selectStage(stage) {
    currentStage = stage;
    stageQuestions = STAGE_DATA[stage] || [];
    
    if (stageQuestions.length === 0) {
        alert('このステージのデータがありません');
        return;
    }
    
    document.getElementById('stageSelectScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    
    currentQuestion = 1;
    correctCount = 0;
    gameData = [];
    
    // ステージ番号を表示
    document.getElementById('currentStage').textContent = currentStage;
    
    // 進捗ドットを生成
    createProgressDots();
    
    updateUI();
    generateStageQuestion();
}

function backToStageSelect() {
    document.getElementById('resultScreen').classList.remove('active');
    document.getElementById('stageSelectScreen').classList.add('active');
    initializeStageSelect(); // ステージ選択画面を更新
}

function quitGame() {
    // タイマーをクリア
    clearInterval(timer);
    
    // ゲーム画面を非表示にしてステージ選択画面に戻る
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('stageSelectScreen').classList.add('active');
    initializeStageSelect();
}

function retryStage() {
    document.getElementById('resultScreen').classList.remove('active');
    selectStage(currentStage); // 同じステージを再プレイ
}

// 難易度選択機能を削除

function startGame() {
    // この関数は使用されなくなりました
}

function createProgressDots() {
    const container = document.getElementById('progressDots');
    container.innerHTML = '';
    
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === 0) dot.classList.add('current');
        container.appendChild(dot);
    }
}

function updateUI() {
    document.getElementById('currentQuestion').textContent = currentQuestion;
    
    // 進捗ドットの更新
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('current');
        if (index === currentQuestion - 1) {
            dot.classList.add('current');
        }
    });
}

function generateStageQuestion() {
    const questionData = stageQuestions[currentQuestion - 1];
    if (!questionData) return;
    
    const baseColor = questionData.baseColor;
    const differentColor = questionData.diffColor;
    
    // 固定されたcorrectIndexを使用（もしなければデフォルトでランダム）
    correctTileIndex = questionData.correctIndex !== undefined ? questionData.correctIndex : Math.floor(Math.random() * TILE_COUNT);
    
    const tilesContainer = document.getElementById('tilesContainer');
    tilesContainer.innerHTML = '';
    
    for (let i = 0; i < TILE_COUNT; i++) {
        const tile = document.createElement('button');
        tile.className = 'tile';
        tile.style.backgroundColor = i === correctTileIndex ? differentColor : baseColor;
        tile.onclick = () => checkAnswer(i);
        
        // タイル出現アニメーション
        setTimeout(() => {
            tile.classList.add('appear');
        }, i * 50);
        
        tilesContainer.appendChild(tile);
    }
    
    startTimer();
}

function generateQuestion() {
    // この関数は使用されなくなりました
    generateStageQuestion();
}

function getColorPattern() {
    // ステージの問題パターンを返す
    const questionData = stageQuestions[currentQuestion - 1];
    return questionData ? questionData.pattern : 'hue';
}

function generateColors(pattern) {
    // ステージの色データを返す
    const questionData = stageQuestions[currentQuestion - 1];
    if (!questionData) {
        return { baseColor: 'hsl(0, 0%, 50%)', differentColor: 'hsl(0, 0%, 55%)' };
    }
    return { baseColor: questionData.baseColor, differentColor: questionData.diffColor };
}

function generateRandomColor() {
    // より多様な色を生成
    const colorTypes = [
        // 鮮やかな色
        () => {
            const hue = Math.floor(Math.random() * 360);
            const saturation = 70 + Math.floor(Math.random() * 30);
            const lightness = 45 + Math.floor(Math.random() * 20);
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        },
        // パステルカラー
        () => {
            const hue = Math.floor(Math.random() * 360);
            const saturation = 30 + Math.floor(Math.random() * 40);
            const lightness = 70 + Math.floor(Math.random() * 20);
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        },
        // ダークカラー
        () => {
            const hue = Math.floor(Math.random() * 360);
            const saturation = 40 + Math.floor(Math.random() * 40);
            const lightness = 25 + Math.floor(Math.random() * 25);
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }
    ];
    
    return colorTypes[Math.floor(Math.random() * colorTypes.length)]();
}

function adjustHue(baseColor, difficulty) {
    const matches = baseColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (!matches) return baseColor;
    
    let [_, hue, saturation, lightness] = matches.map(Number);
    const settings = DIFFICULTY_SETTINGS[difficulty].colorDiff;
    
    // 問題番号に応じて難易度調整
    const progressMultiplier = currentQuestion === 1 ? 1.5 : (1 - (currentQuestion - 2) * 0.15);
    const adjustment = (settings.min + Math.random() * (settings.max - settings.min)) * progressMultiplier;
    
    const direction = Math.random() > 0.5 ? 1 : -1;
    hue = (hue + adjustment * direction + 360) % 360;
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function adjustSaturation(baseColor, difficulty) {
    const matches = baseColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (!matches) return baseColor;
    
    let [_, hue, saturation, lightness] = matches.map(Number);
    const settings = DIFFICULTY_SETTINGS[difficulty].satDiff;
    
    // 問題番号に応じて難易度調整
    const progressMultiplier = 1 - (currentQuestion - 2) * 0.12;
    const adjustment = (settings.min + Math.random() * (settings.max - settings.min)) * progressMultiplier;
    
    saturation = Math.max(10, Math.min(90, saturation + (Math.random() > 0.5 ? adjustment : -adjustment)));
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function adjustLightness(baseColor, difficulty) {
    const matches = baseColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (!matches) return baseColor;
    
    let [_, hue, saturation, lightness] = matches.map(Number);
    const settings = DIFFICULTY_SETTINGS[difficulty].lightDiff;
    
    // 問題番号に応じて難易度調整
    const progressMultiplier = 1 - (currentQuestion - 2) * 0.12;
    const adjustment = (settings.min + Math.random() * (settings.max - settings.min)) * progressMultiplier;
    
    lightness = Math.max(20, Math.min(80, lightness + (Math.random() > 0.5 ? adjustment : -adjustment)));
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function adjustMixed(baseColor, difficulty) {
    // 複数のパラメータを同時に微調整（極めて小さな差で超難関）
    const matches = baseColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (!matches) return baseColor;
    
    let [_, hue, saturation, lightness] = matches.map(Number);
    const settings = DIFFICULTY_SETTINGS[difficulty];
    
    // 問題番号に応じてさらに難しく
    const progressMultiplier = 0.8 - (currentQuestion - 4) * 0.1; // 後の問題ほどさらに小さく
    
    // 複数の調整を適用（極小の差）
    const hueAdjust = (settings.colorDiff.min + Math.random() * (settings.colorDiff.max - settings.colorDiff.min)) * 0.3 * progressMultiplier;
    const satAdjust = (settings.satDiff.min + Math.random() * (settings.satDiff.max - settings.satDiff.min)) * 0.3 * progressMultiplier;
    const lightAdjust = (settings.lightDiff.min + Math.random() * (settings.lightDiff.max - settings.lightDiff.min)) * 0.25 * progressMultiplier;
    
    // 必ず2つ以上のパラメータを調整
    const adjustCount = Math.random() < 0.3 ? 2 : 3; // 30%の確率で2つ、70%で3つ全部
    
    // 少なくとも2つは必ず調整
    const params = ['hue', 'saturation', 'lightness'];
    const shuffled = params.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < adjustCount; i++) {
        switch(shuffled[i]) {
            case 'hue':
                hue = (hue + (Math.random() > 0.5 ? hueAdjust : -hueAdjust) + 360) % 360;
                break;
            case 'saturation':
                saturation = Math.max(10, Math.min(90, saturation + (Math.random() > 0.5 ? satAdjust : -satAdjust)));
                break;
            case 'lightness':
                lightness = Math.max(20, Math.min(80, lightness + (Math.random() > 0.5 ? lightAdjust : -lightAdjust)));
                break;
        }
    }
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function startTimer() {
    // タイマー機能を無効化
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    
    // タイルを無効化
    document.querySelectorAll('.tile').forEach(tile => {
        tile.onclick = null;
    });
    
    const isCorrect = selectedIndex === correctTileIndex;
    if (isCorrect) {
        correctCount++;
    }
    
    // ○×表示
    showAnswerResult(isCorrect);
    
    // 進捗ドットの更新
    const dots = document.querySelectorAll('.progress-dot');
    dots[currentQuestion - 1].classList.add(isCorrect ? 'correct' : 'wrong');
    
    // 正解タイルをハイライト
    const tiles = document.querySelectorAll('.tile');
    tiles[correctTileIndex].classList.add('correct');
    if (!isCorrect && selectedIndex >= 0) {
        tiles[selectedIndex].classList.add('wrong');
    }
    
    gameData.push({
        question: currentQuestion,
        correct: isCorrect
    });
    
    updateUI();
    
    setTimeout(() => {
        document.getElementById('answerResult').style.display = 'none';
        
        if (currentQuestion < TOTAL_QUESTIONS) {
            currentQuestion++;
            generateStageQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showAnswerResult(isCorrect) {
    const resultDiv = document.getElementById('answerResult');
    const symbolDiv = document.getElementById('resultSymbol');
    
    symbolDiv.textContent = isCorrect ? '○' : '×';
    symbolDiv.className = 'result-symbol ' + (isCorrect ? 'correct' : 'wrong');
    resultDiv.style.display = 'block';
}

function showResults() {
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');
    
    document.getElementById('correctCount').textContent = correctCount;
    
    const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
    let rank, topPercentage, message, level, analysis;
    
    // 7段階の詳細な評価
    if (percentage === 100) {
        rank = "色彩の神";
        topPercentage = 1;
        message = "完璧！あなたの色彩感覚は神の領域です。";
        level = "SSS";
        analysis = "全問正解は非常に稀です。プロのデザイナーでも達成が困難なレベルです。";
        // ステージクリア記録
        saveStageCleared(currentStage);
    } else if (percentage >= 86) {
        rank = "色彩の魔術師";
        topPercentage = 3;
        message = "驚異的！あなたはトップクラスの色彩感覚を持っています。";
        level = "SS";
        analysis = "非常に繊細な色の違いを見分ける能力があります。デザイン関係の仕事に大いに活かせるでしょう。";
        saveStageCleared(currentStage);
    } else if (percentage >= 71) {
        rank = "色彩マイスター";
        topPercentage = 8;
        message = "素晴らしい！プロレベルの色彩感覚です。";
        level = "S";
        analysis = "多くの人が気づかない微妙な色の違いを識別できます。色彩に関わる分野で優位性があります。";
        saveStageCleared(currentStage);
    } else if (percentage >= 57) {
        rank = "色彩エキスパート";
        topPercentage = 20;
        message = "優秀です！平均を大きく上回る色彩感覚です。";
        level = "A";
        analysis = "色彩感覚が良く、日常的な色の選択やデザインにおいて優れたセンスを発揮できます。";
    } else if (percentage >= 43) {
        rank = "色彩上級者";
        topPercentage = 40;
        message = "良い感覚です！基本的な色彩感覚が身に付いています。";
        level = "B";
        analysis = "一般的な色彩感覚を持ち、色の基本的な違いを理解できます。練習によりさらに向上の余地があります。";
    } else if (percentage >= 29) {
        rank = "色彩中級者";
        topPercentage = 60;
        message = "まずまずです。色彩感覚を鍛える余地があります。";
        level = "C";
        analysis = "明確な色の違いは識別できますが、微妙な差には気づきにくいようです。日常的な練習が効果的です。";
    } else {
        rank = "色彩初心者";
        topPercentage = 80;
        message = "頑張りましょう！色彩感覚は鍛えることができます。";
        level = "D";
        analysis = "色の識別に苦戦しているようです。まずは大きな色の違いから慣れていくことをおすすめします。";
    }
    
    // 上級レベル固定
    topPercentage = Math.max(1, topPercentage - 15);
    
    document.getElementById('resultRank').textContent = rank;
    document.getElementById('topPercentage').textContent = topPercentage;
    document.getElementById('resultMessage').textContent = message;
    
    // 分布グラフを生成
    createDistributionChart(percentage, topPercentage);
    
    // 詳細結果を表示
    const levelClass = level.toLowerCase().replace('+', 'plus');
    const detailsHTML = `
        <div class="result-level">レベル: <span class="level-badge level-${levelClass}">${level}</span></div>
        <div class="result-analysis">${analysis}</div>
        <div class="result-stats">
            <div class="stat-item">
                <div class="stat-label">正答率</div>
                <div class="stat-value">${percentage}%</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">ステージ</div>
                <div class="stat-value">${currentStage}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">正解数</div>
                <div class="stat-value">${correctCount}/${TOTAL_QUESTIONS}</div>
            </div>
        </div>
        <div class="performance-graph">
            <div class="graph-title">各問題の成績</div>
            <div class="graph-bars">
                ${gameData.map((data, index) => `
                    <div class="graph-bar ${data.correct ? 'correct' : 'wrong'}" 
                         style="height: ${data.correct ? '100%' : '30%'}; animation-delay: ${index * 0.1}s">
                        <div class="graph-label">Q${index + 1}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('resultDetails').innerHTML = detailsHTML;
    
    // グラフアニメーションを遅延実行
    setTimeout(() => {
        document.querySelectorAll('.graph-bar').forEach((bar, index) => {
            setTimeout(() => {
                bar.style.animation = 'slideIn 0.5s ease-out forwards';
            }, index * 100);
        });
    }, 100);
}

function shareResult() {
    const correctCount = document.getElementById('correctCount').textContent.split('/')[0];
    const rank = document.getElementById('resultRank').textContent;
    const percentage = document.getElementById('topPercentage').textContent;
    
    const text = `【色彩感覚ゲーム】\nステージ${currentStage}で「${rank}」でした！\n${correctCount}/7問正解（上位${percentage}%）\n\nあなたは何問正解できる？\n`;
    // 公開時に実際のURLに変更してください
    const url = window.location.href; // または 'https://username.github.io/color-quiz/'
    
    if (navigator.share) {
        navigator.share({
            title: '色彩感覚ゲーム',
            text: text,
            url: url
        });
    } else {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    }
}

function downloadGuide() {
    window.location.href = 'https://liff.line.me/1657292180-JgXbO5A7/landing?follow=%40109dsllv&lp=mGNIDo&liff_id=1657292180-JgXbO5A7';
}

function createDistributionChart(userScore, topPercentage) {
    // 正解率分布データ（仮想データ）
    const distributionData = [
        { range: '0-14%', percentage: 15, count: 150 },
        { range: '15-28%', percentage: 20, count: 200 },
        { range: '29-42%', percentage: 25, count: 250 },
        { range: '43-57%', percentage: 20, count: 200 },
        { range: '58-71%', percentage: 12, count: 120 },
        { range: '72-85%', percentage: 6, count: 60 },
        { range: '86-100%', percentage: 2, count: 20 }
    ];
    
    // ユーザーのスコアがどの範囲に含まれるか特定
    let userRangeIndex = 0;
    if (userScore >= 86) userRangeIndex = 6;
    else if (userScore >= 72) userRangeIndex = 5;
    else if (userScore >= 58) userRangeIndex = 4;
    else if (userScore >= 43) userRangeIndex = 3;
    else if (userScore >= 29) userRangeIndex = 2;
    else if (userScore >= 15) userRangeIndex = 1;
    
    const maxPercentage = Math.max(...distributionData.map(d => d.percentage));
    
    const chartHTML = `
        <div class="distribution-title">全体の正解率分布</div>
        <div class="distribution-chart">
            <div class="distribution-bars">
                ${distributionData.map((data, index) => {
                    const height = (data.percentage / maxPercentage) * 100;
                    const isUserRange = index === userRangeIndex;
                    return `
                        <div class="distribution-bar ${isUserRange ? 'highlight' : ''}" 
                             style="height: ${height}%;">
                            ${isUserRange ? '<div class="distribution-arrow">↓</div>' : ''}
                            <div class="distribution-percentage">${data.percentage}%</div>
                            <div class="distribution-label">${data.range}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        <div class="distribution-legend">
            <div class="legend-item">
                <div class="legend-color normal"></div>
                <span>他のプレイヤー</span>
            </div>
            <div class="legend-item">
                <div class="legend-color you"></div>
                <span>あなたのスコア</span>
            </div>
        </div>
    `;
    
    document.getElementById('resultDistribution').innerHTML = chartHTML;
}

// DIFFICULTY_SETTINGS定義（使わないが互換性のため残す）
const DIFFICULTY_SETTINGS = {
    easy: { name: '初級', colorDiff: { min: 18, max: 25 }, satDiff: { min: 15, max: 20 }, lightDiff: { min: 12, max: 18 } },
    normal: { name: '中級', colorDiff: { min: 10, max: 15 }, satDiff: { min: 10, max: 15 }, lightDiff: { min: 8, max: 12 } },
    hard: { name: '上級', colorDiff: { min: 1, max: 2.5 }, satDiff: { min: 1.5, max: 3 }, lightDiff: { min: 1, max: 2.5 } }
};