// app.js - navegação e pequenos comportamentos
document.addEventListener('DOMContentLoaded', function () {
  // inserir ano automático
  const y = new Date().getFullYear();
  const yEls = document.querySelectorAll('#year, #year2');
  yEls.forEach(el => { if (el) el.textContent = y; });

  // menu mobile toggle (existem múltiplos menu toggles nas páginas)
  document.querySelectorAll('.menu-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      // procura por lista de links adjacente (id sequencial criado nas páginas)
      const parent = btn.closest('.nav-content');
      if (!parent) return;
      const ul = parent.querySelector('.nav-links');
      if (!ul) return;
      ul.classList.toggle('show');
    });
  });

  // previne submit real dos formulários no protótipo e mostra alerta
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Formulário (simulação): dados foram capturados localmente no protótipo.');
    });
  });
});
