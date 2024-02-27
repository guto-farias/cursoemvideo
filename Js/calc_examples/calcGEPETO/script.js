const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = ''; // Variável para armazenar a entrada do usuário
let operator = ''; // Variável para armazenar o operador selecionado

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent; // Obtém o texto do botão clicado
    
    // Lógica para cada tipo de botão
    if (!isNaN(parseFloat(buttonText)) || buttonText === '.') {
      currentInput += buttonText; // Se for número ou ponto decimal, adicione à entrada atual
      display.value = currentInput; // Atualize o valor exibido no visor
    } else if (buttonText === 'C') {
      currentInput = ''; // Limpa a entrada
      operator = ''; // Limpa o operador
      display.value = ''; // Limpa o visor
    } else if (buttonText === '=') {
      if (operator && currentInput) {
        const result = eval(currentInput); // Avalia a expressão atual
        display.value = result; // Exibe o resultado no visor
        currentInput = result.toString(); // Atualiza a entrada com o resultado
        operator = ''; // Limpa o operador
      }
    } else {
      operator = buttonText; // Se for um operador, atualize o operador
      currentInput += operator; // Adicione o operador à entrada atual
      display.value = currentInput; // Atualize o valor exibido no visor
    }
  });
});
