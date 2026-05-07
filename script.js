// =============================================
//   CALCULADORA POP ART — script.js
//   Scaffolding: Story 1.1
//   State machine completa: Story 1.3
//   Interações e teclado: Story 1.4
// =============================================

// --- State ---
const state = {
  currentValue: '0',
  previousValue: '',
  operator: null,
  shouldResetDisplay: false,
  lastOperator: null,   // para repetição de = consecutivo
  lastOperand: null     // para repetição de = consecutivo
};

// --- Cached DOM References ---
let els;

// --- Display Update ---
// CRITICAL: usar textContent exclusivamente — nunca innerHTML
function updateDisplay() {
  els.result.textContent = state.currentValue;
  if (state.operator && state.previousValue !== '') {
    els.expression.textContent = state.previousValue + ' ' + state.operator;
  } else {
    els.expression.textContent = '';
  }
}

// --- Handlers ---

function handleNumber(digit) {
  if (state.shouldResetDisplay) {
    state.currentValue = digit === '.' ? '0.' : digit;
    state.shouldResetDisplay = false;
  } else {
    // Limite de 12 caracteres (excluindo sinal negativo e ponto decimal)
    const digits = state.currentValue.replace('-', '').replace('.', '');
    if (digits.length >= 12) return;

    state.currentValue = state.currentValue === '0' ? digit : state.currentValue + digit;
  }
  updateDisplay();
}

function handleDecimal() {
  if (state.shouldResetDisplay) {
    state.currentValue = '0.';
    state.shouldResetDisplay = false;
    updateDisplay();
    return;
  }
  if (!state.currentValue.includes('.')) {
    state.currentValue += '.';
    updateDisplay();
  }
}

function handleOperator(op) {
  // Se há operador pendente e o usuário já digitou o segundo número, calcular primeiro
  if (state.operator !== null && !state.shouldResetDisplay) {
    calculate();
  }

  state.previousValue = state.currentValue;
  state.operator = op;
  state.shouldResetDisplay = true;

  // Mostrar a expressão no display de expressão
  els.expression.textContent = state.previousValue + ' ' + op;
}

function calculate() {
  // Repetição de = consecutivo: reaplica lastOperator com lastOperand
  if (state.operator === null) {
    if (state.lastOperator !== null && state.lastOperand !== null) {
      state.previousValue = state.currentValue;
      state.operator = state.lastOperator;
      state.currentValue = state.lastOperand;
    } else {
      return; // nada a calcular
    }
  }

  if (state.previousValue === '') return;

  const prev = parseFloat(state.previousValue);
  const curr = parseFloat(state.currentValue);

  // Guard: divisão por zero
  if (state.operator === '÷' && curr === 0) {
    state.currentValue = 'ERROR! 💥';
    state.operator = null;
    state.previousValue = '';
    state.lastOperator = null;
    state.lastOperand = null;
    state.shouldResetDisplay = true;
    updateDisplay();
    return;
  }

  let result;
  switch (state.operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '×': result = prev * curr; break;
    case '÷': result = prev / curr; break;
    default: return;
  }

  // Salvar para repetição do = ANTES de resetar o estado
  state.lastOperator = state.operator;
  state.lastOperand = state.currentValue;

  // CRITICAL: normalizar ponto flutuante — corrige 0.1+0.2=0.30000000004
  state.currentValue = parseFloat(result.toPrecision(12)).toString();
  state.operator = null;
  state.previousValue = '';
  state.shouldResetDisplay = true;

  updateDisplay();

  // Trigger animação POW!
  triggerPowAnimation();
}

function handleClear() {
  state.currentValue = '0';
  state.previousValue = '';
  state.operator = null;
  state.shouldResetDisplay = false;
  state.lastOperator = null;
  state.lastOperand = null;
  updateDisplay();
}

function handlePlusMinus() {
  if (state.currentValue === '0' || state.currentValue === 'ERROR! 💥') return;
  state.currentValue = (parseFloat(state.currentValue) * -1).toString();
  updateDisplay();
}

function handlePercent() {
  if (state.currentValue === 'ERROR! 💥') return;
  state.currentValue = (parseFloat(state.currentValue) / 100).toString();
  updateDisplay();
}

function handleBackspace() {
  if (state.currentValue === 'ERROR! 💥') {
    handleClear();
    return;
  }
  if (state.shouldResetDisplay) return;
  if (state.currentValue.length > 1) {
    state.currentValue = state.currentValue.slice(0, -1);
    // Evitar string vazia ou apenas sinal negativo
    if (state.currentValue === '-') state.currentValue = '0';
  } else {
    state.currentValue = '0';
  }
  updateDisplay();
}

// --- POW! Animation (implementada na Story 1.4) ---
function triggerPowAnimation() {
  const pow = els.pow;
  if (!pow) return;
  pow.classList.remove('show-pow'); // reset se ainda em andamento
  // Forçar reflow para reiniciar a animação CSS
  void pow.offsetWidth;
  pow.classList.add('show-pow');
  pow.addEventListener('animationend', () => {
    pow.classList.remove('show-pow');
  }, { once: true });
}

// --- Keyboard Support (Story 1.4) ---
function handleKeyboard(e) {
  // Prevenir comportamentos padrão problemáticos
  if (e.key === '/') e.preventDefault(); // evita "quick find" no Firefox

  const keyMap = {
    '0': () => handleNumber('0'),
    '1': () => handleNumber('1'),
    '2': () => handleNumber('2'),
    '3': () => handleNumber('3'),
    '4': () => handleNumber('4'),
    '5': () => handleNumber('5'),
    '6': () => handleNumber('6'),
    '7': () => handleNumber('7'),
    '8': () => handleNumber('8'),
    '9': () => handleNumber('9'),
    '.': () => handleDecimal(),
    ',': () => handleDecimal(), // vírgula também funciona (bonus)
    '+': () => handleOperator('+'),
    '-': () => handleOperator('-'),
    '*': () => handleOperator('×'), // conversão obrigatória: * → ×
    '/': () => handleOperator('÷'), // conversão obrigatória: / → ÷
    'Enter': () => calculate(),
    '=': () => calculate(),
    'Escape': () => handleClear(),
    'Backspace': () => handleBackspace(),
  };

  const action = keyMap[e.key];
  if (action) {
    action();

    // Feedback visual: encontrar botão correspondente e piscar
    const dataValue = {
      '*': '×',
      '/': '÷',
      'Enter': '=',
      'Escape': 'AC',
      'Backspace': null
    }[e.key] ?? e.key;

    if (dataValue) {
      const btn = document.querySelector(`[data-value="${dataValue}"]`);
      if (btn) {
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 100);
      }
    }
  }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements
  els = {
    expression: document.getElementById('expression'),
    result: document.getElementById('result'),
    pow: document.querySelector('.pow-animation')
  };

  // Event delegation: único listener no container de botões
  const buttonsContainer = document.querySelector('.buttons');
  buttonsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    const val = button.dataset.value;
    if (!val) return;

    // Roteamento por valor do botão
    if (!isNaN(val) && val !== '') {
      handleNumber(val);          // dígitos 0-9
    } else if (val === '.') {
      handleDecimal();
    } else if (['+', '-', '×', '÷'].includes(val)) {
      handleOperator(val);
    } else if (val === '=') {
      calculate();
    } else if (val === 'AC') {
      handleClear();
    } else if (val === '+/-') {
      handlePlusMinus();
    } else if (val === '%') {
      handlePercent();
    }
  });

  // Suporte a teclado
  document.addEventListener('keydown', handleKeyboard);

  // Estado inicial do display
  updateDisplay();
});
