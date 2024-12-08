document.addEventListener('DOMContentLoaded', () => {
    const tigerImage = document.querySelector('.tiger-image');
  
    // Define the animation steps
    const animationSteps = [
      { scale: 1.2, x: '75%', y: '0%' },  // Top-right
      { scale: 1.2, x: '75%', y: '75%' }, // Bottom-right
      { scale: 1.2, x: '0%', y: '75%' },  // Bottom-left
      { scale: 1.2, x: '50%', y: '50%' }  // Center
    ];
  
    let currentStep = 0; // Start at the first step
    const stepDuration = 6000; // Duration per step (in ms)
  
    function animate() {
      const { scale, x, y } = animationSteps[currentStep];
  
      // Apply styles for the current step
tigerImage.style.transform = `scale(${scale})`;
tigerImage.style.objectPosition = `${x} ${y}`;  // Supondo que 'x' e 'y' sejam valores em porcentagem

  
      // Move to the next step, looping back to the start
      currentStep = (currentStep + 1) % animationSteps.length;
  
      // Schedule the next animation step
      setTimeout(animate, stepDuration);
    }
  
    // Start the animation loop
    animate();
  });