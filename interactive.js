


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
