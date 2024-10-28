document.querySelectorAll('.rotator').forEach(rotator => {
    let index = 0;
    const cases = rotator.querySelectorAll('.rotator__case');
  
    function rotate() {
      cases[index].classList.remove('rotator__case_active');
      index = (index + 1) % cases.length;
      const nextCase = cases[index];
      nextCase.classList.add('rotator__case_active');
      nextCase.style.color = nextCase.dataset.color;
      setTimeout(rotate, nextCase.dataset.speed || 1000);
    }
  
    rotate();
  });  