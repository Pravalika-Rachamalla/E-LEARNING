const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.style.backgroundColor = '#3399ff'; 
    section.style.color = '#000000'  
  });

  section.addEventListener('mouseout', () => {
  section.style.backgroundColor = '#fff';
  section.style.color = '#000'  
  });
});
