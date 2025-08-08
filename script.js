function togglePassword() {
  const senha = document.querySelector('#senha');
  const eyes = document.querySelectorAll('.eye');

  // Alternar tipo do input
  const isPassword = senha.getAttribute('type') === 'password';
  senha.setAttribute('type', isPassword ? 'text' : 'password');

  // Alternar visibilidade dos ícones
  eyes.forEach((eye) => {
    eye.classList.toggle('hide');
  });
}
