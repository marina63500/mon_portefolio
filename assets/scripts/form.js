  


  document.addEventListener("DOMContentLoaded", () => {  
    
    // initialisation de emailJS pour le formulaire de contact avec ma clé publique
            emailjs.init({
              // publicKey: "YOUR_PUBLIC_KEY",
              publicKey: "bGEVrxR9tBr9-7bIN",
            });
       

  const form = document.getElementById("contact-form");
  const result = document.getElementById("result-message");
  const captchaQuestion = document.getElementById("captcha-question");
  const captchaAnswer = document.getElementById("captcha-answer");

  if (!form || !result || !captchaQuestion || !captchaAnswer) {
    console.error("Un ou plusieurs éléments du formulaire sont manquants !");
    return; 
  }

  //création d'un captcha mathématique simple 

  let num1 = 0;
  let num2 = 0;

    function generateCaptcha() {
          num1 = Math.floor(Math.random() * 10) + 1;
          num2 = Math.floor(Math.random() * 10) + 1;

          if(captchaQuestion) {
             captchaQuestion.innerText = `Combien font ${num1} + ${num2} ?`;
        }
            // Réinitialisation de la réponse du captcha
          if (captchaAnswer) {            
            captchaAnswer.value = '';
          
        }
     
    }
        generateCaptcha();
      
  
// Récupération formulaire  et validation avant de soumettre le formulaire
              
       form.addEventListener("submit", (event) => {
          event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
                
                  

// Vérification du formulaire
       if(!nameInput || !emailInput || !messageInput || !captchaAnswer) {
         console.error("Un ou plusieurs champs sont manquants !");
      return;
    }
          
            const name = nameInput.value;
            const email = emailInput.value;
            const message = messageInput.value;
            const userAnswer = parseInt(captchaAnswer.value);
        
  //validation du formulaire   
  if(!name || !email || !message) {  
      
    result.innerText = 'Veuillez remplir tous les champs.';
    result.style.color = 'red';
    return;
    }    

    // Validation du captcha
    if(userAnswer !== (num1 + num2)) {
        result.innerText = 'Captcha incorrect. Veuillez réessayer.';
        result.style.color = 'red';
        generateCaptcha(); 
        return;
    }
                  

    // envoi email avec emailJS
    emailjs
      .sendForm('service_portefolio', 'template_form', form)
      .then(() => {
          result.innerText = "Message envoyé avec succès ";
          result.style.color = "green";
                   
          form.reset();
          generateCaptcha();

          setTimeout(() => {
            result.innerText = '';
            }, 3000);
            })
      .catch((error) => {
        result.innerText = "Erreur lors de l'envoi du message. Veuillez réessayer.";
        result.style.color = "red";
        console.error(error);
        });

                    
            });
  });