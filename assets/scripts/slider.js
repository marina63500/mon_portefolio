//slider skills

const skillsList = document.querySelector('.skills-list');


if(skillsList){
  // Dupliquer le contenu de la liste des compétences pour créer un effet de défilement infini
  skillsList.innerHTML += skillsList.innerHTML;
  skillsList.innerHTML += skillsList.innerHTML;
  

}



// mettre le box shadow autour des skills au hover en fonction de sa couleur

const skills = document.querySelectorAll('.skill');


skills.forEach((skill) => {

  skill.addEventListener('mouseenter', () => {
    // Récupérer la couleur depuis l'attribut data-color grace a getAttribute qui recupere tous les data-xxx
    const color = skill.getAttribute('data-color');

    
    skill.style.boxShadow = `0 5px 25px ${color}`;
    skill.style.border = `1px solid ${color}`; 
    skill.style.transform = 'scale(1.2)'; 
    
  });

   skill.addEventListener('mouseleave', () => {
    skill.style.boxShadow = 'none';
    skill.style.border = 'none'; 
    skill.style.transform = 'scale(1)'; 
  });
 
});


