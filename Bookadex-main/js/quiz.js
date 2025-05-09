document.querySelectorAll('.quiz').forEach(quiz => {
    const alternativas = quiz.querySelectorAll('.altborder');
    const botaoResponder = quiz.querySelector('.conf h2');
    let selecionada = null;

    alternativas.forEach(alt => {
        alt.addEventListener('click', () => {
            if (alt.classList.contains('selected')) {
                alt.classList.remove('selected');
                selecionada = null;
            } else {
                alternativas.forEach(a => a.classList.remove('selected'));
                alt.classList.add('selected');
                selecionada = alt;
            }
        });
    });

    botaoResponder.addEventListener('click', () => {
        let feedbackAntigo = quiz.querySelector('.feedback');
        if (feedbackAntigo) feedbackAntigo.remove();

        if (!selecionada) return;

        alternativas.forEach(a => a.classList.remove('correct', 'incorrect'));

        const feedback = document.createElement('span');
        feedback.classList.add('feedback');

        if (selecionada.dataset.correct === "true") {
            selecionada.classList.add('correct');
            feedback.textContent = 'Resposta correta!';
            feedback.style.color = '#4CAF50';
        } else {
            selecionada.classList.add('incorrect');
            feedback.textContent = 'Resposta incorreta!';
            feedback.style.color = '#f44336';

            // ➕ Mostrar a alternativa correta
            const correta = quiz.querySelector('.altborder[data-correct="true"]');
            if (correta) {
                correta.classList.add('correct');
            }
        }

        botaoResponder.parentElement.insertBefore(feedback, botaoResponder);
    });
});
