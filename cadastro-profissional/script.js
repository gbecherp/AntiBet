document.addEventListener('DOMContentLoaded', () => {
  // Efeito de deslizamento da Tiger Image
  const tigerImage = document.querySelector('.tiger-image');
  const animationSteps = [{ x: '0%', y: '0%' }, { x: '75%', y: '0%' }, { x: '75%', y: '75%' }, { x: '0%', y: '75%' }];
  let currentStep = 0;

  function animateImage() {
    const { x, y } = animationSteps[currentStep];
    tigerImage.style.objectPosition = `${x} ${y}`;
    currentStep = (currentStep + 1) % animationSteps.length;
    setTimeout(animateImage, 6000);
  }
  animateImage();

  // Lógica do formulário multi-step
  const steps = document.querySelectorAll('.step');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const progressBar = document.querySelector('.progress');
  let currentStepIndex = 0;

  function updateForm() {
    steps.forEach((step, index) => step.classList.toggle('active', index === currentStepIndex));
    progressBar.style.width = `${((currentStepIndex + 1) / steps.length) * 100}%`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentStepIndex < steps.length - 1) {
      currentStepIndex++;
      updateForm();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      updateForm();
    }
  });

  document.getElementById('create-account-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Conta criada com sucesso!');
    window.location.href = './../login/index.html';
  });

  updateForm();
});
