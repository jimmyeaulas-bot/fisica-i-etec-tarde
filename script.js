let totalSteps = 0;
let currentStepGlobal = 1;

function toggleTheme() {
    const htmlElement = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle');
    if (htmlElement.getAttribute('data-theme') === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeBtn.innerText = '☀️ Modo Claro';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeBtn.innerText = '🌙 Modo Escuro';
    }
}

function updateProgress() {
    totalSteps = document.querySelectorAll('.step').length; 
    let percentage = (currentStepGlobal / totalSteps) * 100;
    if(percentage > 100) percentage = 100;
    document.getElementById('progress-bar').style.width = percentage + '%';
    document.getElementById('progress-text').innerText = `Progresso: ${Math.round(percentage)}%`;
}

// Inicializa a barra ao abrir
window.onload = () => {
    updateProgress();
};

function nextStep(current, next) {
    document.getElementById(`step-${current}`).classList.remove('active');
    document.getElementById(`step-${next}`).classList.add('active');
    currentStepGlobal++;
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function vistoConcluido(moduloAtual, currentStepNum, nextStepNum) {
    alert("Parabéns! Visto registrado com sucesso! \nVamos continuar o aprendizado.");
    document.getElementById(`modulo-${moduloAtual}`).classList.remove('active');
    document.getElementById(`modulo-${moduloAtual + 1}`).classList.add('active');
    document.getElementById(`step-${currentStepNum}`).classList.remove('active');
    document.getElementById(`step-${nextStepNum}`).classList.add('active');
    currentStepGlobal++;
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkAnswer(button, isCorrect) {
    let feedback = button.parentElement.querySelector('.feedback');
    if (isCorrect) {
        feedback.innerText = "✅ Resposta Correta! Muito bem.";
        feedback.className = "feedback correct";
        button.style.backgroundColor = "#2ecc71";
        button.style.color = "#fff";
    } else {
        feedback.innerText = "❌ Ops, tente novamente! Revise a teoria.";
        feedback.className = "feedback wrong";
        button.style.backgroundColor = "#e74c3c";
        button.style.color = "#fff";
    }
}

function mostrarGabarito(idGabarito, btn) {
    let gabarito = document.getElementById(idGabarito);
    if (gabarito.style.display === 'block') {
        gabarito.style.display = 'none';
        btn.innerText = '👀 Ver Gabarito';
    } else {
        gabarito.style.display = 'block';
        btn.innerText = '🙈 Esconder Gabarito';
    }
}