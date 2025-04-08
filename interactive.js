


const menuIcon = document.getElementById("menuIcon");
const navSection = document.getElementById("navSection");


menuIcon.onclick = () => {
    navSection.classList.toggle('active');
}


//switching to dark and light mode

const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light';
    } else {
        toggleButton.textContent = 'Dark';
    }
});


var settingmenu = document.querySelector('.my-mode-change');

function settingsMenuToggle(){
    settingmenu.classList.toggle("settings-menu-height-mode");
}


//  THIS IS THE FUNCTION CALLED WHEN I CLICK THE BUTTON TO HIDE THE TEXT ON MY ABOUT SECTION.

function clickToHide(button) {
    const toHiddenText = button.previousElementSibling;

    if (toHiddenText.style.maxHeight === "0px" || toHiddenText.style.maxHeight === "") {
        toHiddenText.style.maxHeight = toHiddenText.scrollHeight + "px"; // Expand
        button.textContent = "Read Less"; // Change button text
    } else {
        toHiddenText.style.maxHeight = "0px"; // Collapse
        button.textContent = "Read More"; // Reset button text
    }
}





// I USED THIS FUNCTION TO HIDE MY SKILLS AND DISPLAY THEM AGAIN

function toHideSkills(button) {
    const hiddenText = button.previousElementSibling;

    if (hiddenText.style.maxHeight === "0px" || hiddenText.style.maxHeight === "") {
        hiddenText.style.maxHeight = hiddenText.scrollHeight + "px"; // Expand
        button.textContent = "-"; // Change button text
    } else {
        hiddenText.style.maxHeight = "0px"; // Collapse
        button.textContent = "+"; // Reset button text
    }
}



//IN THIS SECTION I WILL BE ADDING CODES FOR MY PROJECTS SECTION

const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slider.children.length;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});

function updateSlider() {
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
}


function colorDesign(){
 document.querySelector('body').classList.toggle('popup-setting');
    
}

//============Color design Yellow
document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.design-yellow');
    const target = document.querySelector('.home-data-info');
    const socials = document.querySelector('.my-social-connect');
    const socialButton1 = document.querySelector('.instagram');
    const socialButton2 = document.querySelector('.linkedin');
    const socialButton3 = document.querySelector('.gitHub');
    const myLoggoSpan = document.querySelector('.myLoggo-span');
    const myNameHome = document.querySelector('.my-name-on-home');
    const myOccupation = document.querySelector('.my-occupation');
    const aboutMeH1Span = document.querySelector('.aboutme-heading-span');
    const myAboutMeDiv1 = document.querySelector('.my-about-me-info');
    const aboutFirstLine = document.querySelector('.first-line-span');
    const hideDownloadBtn = document.querySelector('.download-cv-btn');
    const hideDownloadBtn2 = document.querySelector('.download-cv-btn2');
    const aboutFirstLine2 = document.querySelector('.first-line-span2');
    const hideSkillsBtn = document.querySelector('.hide-skill-btn');
    const contactFormBox = document.querySelector('.contact-form');
    const inputUrName = document.querySelector('.your-name');
    const inputUrEmail = document.querySelector('.your-email');
    const myTextArea = document.querySelector('.the-textarea');
    const mySubmitBtn = document.querySelector('.send-masg-btn');
    





    button.addEventListener('click', () => {
        target.classList.toggle('yellow-shadow');
        socials.classList.toggle('yellow-border');
        socialButton1.classList.toggle('social-button-yellow-border');
        socialButton2.classList.toggle('social-button-yellow-border');
        socialButton3.classList.toggle('social-button-yellow-border');
        myLoggoSpan.classList.toggle('my-loggo-span-yellow');
        myNameHome.classList.toggle('my-name-on-home-yellow');
        myOccupation.classList.toggle('my-occupation-yellow');
        aboutMeH1Span.classList.toggle('aboutme-heading-span-yellow');
        myAboutMeDiv1.classList.toggle('my-about-me-info-yellow');
        aboutFirstLine.classList.toggle('first-line-span-yellow');
        hideDownloadBtn.classList.toggle('download-cv-btn-yellow');
        hideDownloadBtn2.classList.toggle('download-cv-btn-yellow');
        aboutFirstLine2.classList.toggle('first-line-span-yellow');
        hideSkillsBtn.classList.toggle('hide-skill-btn-yellow');
        contactFormBox.classList.toggle('contact-form-yellow');
        inputUrName.classList.toggle('your-name-yellow');
        inputUrEmail.classList.toggle('your-email-yellow');
        myTextArea.classList.toggle('the-textarea-yellow');
        mySubmitBtn.classList.toggle('send-masg-btn-yellow');
        

    });
  });


//============Color design Red
document.addEventListener('DOMContentLoaded', () => {
    /////////
    const button = document.querySelector('.design-red');
    const target = document.querySelector('.home-data-info');
    const socials = document.querySelector('.my-social-connect');
    const socialButton1 = document.querySelector('.instagram');
    const socialButton2 = document.querySelector('.linkedin');
    const socialButton3 = document.querySelector('.gitHub');
    const myLoggoSpan = document.querySelector('.myLoggo-span');
    const myNameHome = document.querySelector('.my-name-on-home');
    const myOccupation = document.querySelector('.my-occupation');
    const aboutMeH1Span = document.querySelector('.aboutme-heading-span');
    const myAboutMeDiv1 = document.querySelector('.my-about-me-info');
    const aboutFirstLine = document.querySelector('.first-line-span');
    const hideDownloadBtn = document.querySelector('.download-cv-btn');
    const hideDownloadBtn2 = document.querySelector('.download-cv-btn2');
    const aboutFirstLine2 = document.querySelector('.first-line-span2');
    const hideSkillsBtn = document.querySelector('.hide-skill-btn');
    const contactFormBox = document.querySelector('.contact-form');
    const inputUrName = document.querySelector('.your-name');
    const inputUrEmail = document.querySelector('.your-email');
    const myTextArea = document.querySelector('.the-textarea');
    const mySubmitBtn = document.querySelector('.send-masg-btn');
///==========
    button.addEventListener('click', () => {
        target.classList.toggle('red-shadow');
        socials.classList.toggle('red-border');
        socialButton1.classList.toggle('social-button-red-border');
        socialButton2.classList.toggle('social-button-red-border');
        socialButton3.classList.toggle('social-button-red-border');
        myLoggoSpan.classList.toggle('my-loggo-span-red');
        myNameHome.classList.toggle('my-name-on-home-red');
        myOccupation.classList.toggle('my-occupation-red');
        aboutMeH1Span.classList.toggle('aboutme-heading-span-red');
        myAboutMeDiv1.classList.toggle('my-about-me-info-red');
        aboutFirstLine.classList.toggle('first-line-span-red');
        hideDownloadBtn.classList.toggle('download-cv-btn-red');
        hideDownloadBtn2.classList.toggle('download-cv-btn-red');
        aboutFirstLine2.classList.toggle('first-line-span-red');
        hideSkillsBtn.classList.toggle('hide-skill-btn-red');
        contactFormBox.classList.toggle('contact-form-red');
        inputUrName.classList.toggle('your-name-red');
        inputUrEmail.classList.toggle('your-email-red');
        myTextArea.classList.toggle('the-textarea-red');
        mySubmitBtn.classList.toggle('send-masg-btn-red');
    });
  });

//============Color design Navy
document.addEventListener('DOMContentLoaded', () => {
    /////////
    const button = document.querySelector('.design-navy');
    const target = document.querySelector('.home-data-info');
    const socials = document.querySelector('.my-social-connect');
    const socialButton1 = document.querySelector('.instagram');
    const socialButton2 = document.querySelector('.linkedin');
    const socialButton3 = document.querySelector('.gitHub');
    const myLoggoSpan = document.querySelector('.myLoggo-span');
    const myNameHome = document.querySelector('.my-name-on-home');
    const myOccupation = document.querySelector('.my-occupation');
    const aboutMeH1Span = document.querySelector('.aboutme-heading-span');
    const myAboutMeDiv1 = document.querySelector('.my-about-me-info');
    const aboutFirstLine = document.querySelector('.first-line-span');
    const hideDownloadBtn = document.querySelector('.download-cv-btn');
    const hideDownloadBtn2 = document.querySelector('.download-cv-btn2');
    const aboutFirstLine2 = document.querySelector('.first-line-span2');
    const hideSkillsBtn = document.querySelector('.hide-skill-btn');
    const contactFormBox = document.querySelector('.contact-form');
    const inputUrName = document.querySelector('.your-name');
    const inputUrEmail = document.querySelector('.your-email');
    const myTextArea = document.querySelector('.the-textarea');
    const mySubmitBtn = document.querySelector('.send-masg-btn');
///==========
    button.addEventListener('click', () => {
        target.classList.toggle('navy-shadow');
        socials.classList.toggle('navy-border');
        socialButton1.classList.toggle('social-button-navy-border');
        socialButton2.classList.toggle('social-button-navy-border');
        socialButton3.classList.toggle('social-button-navy-border');
        myLoggoSpan.classList.toggle('my-loggo-span-navy');
        myNameHome.classList.toggle('my-name-on-home-navy');
        myOccupation.classList.toggle('my-occupation-navy');
        aboutMeH1Span.classList.toggle('aboutme-heading-span-navy');
        myAboutMeDiv1.classList.toggle('my-about-me-info-navy');
        aboutFirstLine.classList.toggle('first-line-span-navy');
        hideDownloadBtn.classList.toggle('download-cv-btn-navy');
        hideDownloadBtn2.classList.toggle('download-cv-btn-navy');
        aboutFirstLine2.classList.toggle('first-line-span-navy');
        hideSkillsBtn.classList.toggle('hide-skill-btn-navy');
        contactFormBox.classList.toggle('contact-form-navy');
        inputUrName.classList.toggle('your-name-navy');
        inputUrEmail.classList.toggle('your-email-navy');
        myTextArea.classList.toggle('the-textarea-navy');
        mySubmitBtn.classList.toggle('send-masg-btn-navy');
    });
  });
  





