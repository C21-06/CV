var phone = document.querySelector('.phone');
                                                                            // Мій телефон на нове вікно
phone.addEventListener('click', function(){
    window.open('https://ssu.gov.ua/contacts/upravlinnia', '_blank')
});

var email = document.querySelector('.Email');

email.addEventListener('click', function(){                                // Емейл на нове вікно
    window.open('https://gur.gov.ua/content/contacts.html', '_blank' )
});

phone.addEventListener('mouseout', function() {
    phone.style.backgroundColor = "#3bc1fb"                        //задали функцію для кнопки щоб змінювала колір//
    });
phone.addEventListener('mouseover', function(){
    phone.style.backgroundColor = "white";
});

email.addEventListener('mouseout', function() {
    email.style.backgroundColor = "#3bc1fb"                        //задали функцію для кнопки щоб змінювала колір//
    });
email.addEventListener('mouseover', function(){
    email.style.backgroundColor = "white";
});


 

 var contact = document.querySelector('.contact');
 var originalColor;

 contact.addEventListener('mouseenter', function() {
                                                  // Збереження оригінального коліру перед зміною
     originalColor = contact.style.color;
     
                                                  // Зміна коліру тексту при наведенні миші     //CONTACT
     contact.style.color = 'white';
 });

 contact.addEventListener('mouseleave', function() {
                                                  // Повернення до оригінального коліру при відведенні миші
     contact.style.color = originalColor;
 });

  
  var lang = document.querySelector('.lang');
  var originalColor;

  lang.addEventListener('mouseenter', function() {          //LANGUAGE
      originalColor = lang.style.color;
      lang.style.color = 'white';
  });

  lang.addEventListener('mouseleave', function() {
      lang.style.color = originalColor;
  });

  
  
  var skill = document.querySelector('.skiller');
  var originalColor;

  skill.addEventListener('mouseenter', function() {
      originalColor = skill.style.color;                        //SKILL
      skill.style.color = 'white';
  });

  skill.addEventListener('mouseleave', function() {
      skill.style.color = originalColor;
  });

  
  
  var hobb = document.querySelector('.hobb');
  var originalColor;

  hobb.addEventListener('mouseenter', function() {                    //HOBBIE
      originalColor = hobb.style.color;
      hobb.style.color = 'white';
  });

  hobb.addEventListener('mouseleave', function() {
      hobb.style.color = originalColor;
  });

  var navch = document.querySelector('.study');
  navch.addEventListener('mouseenter', function() {
    navch.style.textDecoration = 'underline';
});                                                                     //НАВЧАННЯ ПІДКРЕСЛЕНО ПРИ НАВЕДЕННІ
navch.addEventListener('mouseleave', function() {
    navch.style.textDecoration = 'none';
});

var navch2 = document.querySelector('.studiInstit');
navch2.addEventListener('mouseenter', function() {
  navch2.style.textDecoration = 'underline';
});                                                                     //  НАВЧАННЯ В ІНСТИТУТІ ПІДКРЕСЛЕНО ПРИ НАВЕДЕННІ
navch2.addEventListener('mouseleave', function() {
  navch2.style.textDecoration = 'none';
});

var butt = document.querySelector('.icon-buttonInst');
butt.addEventListener('click', function(){
    window.open('https://www.instagram.com/securityservice_ukraine/', '_blank');
})

var butt2 = document.querySelector('.icon-buttonGit');
butt2.addEventListener('click', function(){
    window.open('https://github.com/C21-06/', '_blank');
})

var butt3 = document.querySelector('.icon-buttonYoutube');
butt3.addEventListener('click', function(){
    window.open('https://www.youtube.com/channel/UCyWT0NqCNha2e1z-x6Y2N5A', '_blank');
})

















