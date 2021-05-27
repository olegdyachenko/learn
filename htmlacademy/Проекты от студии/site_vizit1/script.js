let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

console.log(themeButton);

//page.classList.add('dark-theme');
themeButton.onclick = function() {
    page.classList.toggle('dark-theme');
    console.log(1);
}

// page.onclick = function() {
//     console.log('Клик!');
//   };


