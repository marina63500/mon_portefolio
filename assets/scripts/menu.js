
// darkmode
const dark = document.getElementById('toggle');

if(dark){
dark.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
});
}

// scroll navbar
let lastScroll = 0;
const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {

    if(!navbar) return;

    if(window.scrollY < lastScroll){
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-230px';
    }   
    lastScroll = window.scrollY;
});



// menu burger
const burger= document.querySelector('.burger');
const navLinks= document.querySelector('.nav-links');

if(burger && navLinks){
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
})};


//animation presentation


const letter = document.getElementById('typing');


const words =["développeuse web et web mobile,","autonome et rigoureuse,","en quête d'apprentissage et d'amélioration,","toujours à l'écoute,","en quête de nouveaux défis,"]; 

let index = 0;
let letterIndex = 0;



function typeEffect(){
    // stoppe le script si l'élément n'existe pas
    if (!letter) return; 
    
    const currentWord = words[index];

    //ajouter une lettre
    letter.textContent += currentWord.charAt(letterIndex);
    letterIndex++;

    if(letterIndex === currentWord.length){
       setTimeout(() => {
        letter.textContent = '';
        letterIndex = 0;

        //passer au mot suivant
        index++;
        if(index === words.length){
            index = 0;
        }
       }, 1500);
    }   

}

setInterval(typeEffect, 150);       
   

