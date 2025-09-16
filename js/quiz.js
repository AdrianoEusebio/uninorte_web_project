document.getElementById('quiz-form').addEventListener('submit', function(e){
  e.preventDefault();
  const answers = {
    q1: 'b', // onça-pintada
    q2: 'b', // vitória-régia
    q3: 'c'  // rios
  };
  let score = 0;
  Object.keys(answers).forEach(key => {
    const chosen = (new FormData(this)).get(key);
    if(chosen === answers[key]) score++;
  });
  const msg =
    score === 3 ? 'Excelente!' :
    score === 2 ? 'Muito bom!' :
    'Continue estudando!';
  document.getElementById('result').textContent =
    `Você acertou ${score} de 3 perguntas. ${msg}`;
});