import './styles.css';
import menu from './menu.json';
import template from './template.hbs';

const refs = {
    menu: document.querySelector('.menu'),
   template : document.querySelector('template'),
   but : document.querySelector('#theme-switch-control'),
};




function makeHtml (menu) {
    const markup = menu.map(item => template(item)).join("");
   
    refs.menu.insertAdjacentHTML('beforeend', markup)
}

makeHtml(menu);


// =========change theme

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const theme = 'theme';

const changeColor = localStorage.getItem(theme);


 if (changeColor) {
    refs.but.checked = changeColor === Theme.DARK
 }

const themeInstalled = localStorage.getItem(theme);
console.log(themeInstalled);
if (themeInstalled) {
    document.body.classList.add(localStorage.getItem(theme));
}


 const changeBack = e => {
     if (!themeInstalled) {
        document.body.classList.add(Theme.DARK );   
     }

     console.log(e.target.checked)
     if (e.target.checked){
        console.log('dark');
        localStorage.setItem(theme, Theme.DARK);

        console.log('e.target.checked',e.target.checked);
       
        
        // document.body.classList.remove(Theme.LIGHT );
        document.body.classList.replace(Theme.LIGHT,Theme.DARK );
    } else {
        localStorage.setItem(theme, Theme.LIGHT);
        // document.body.classList.remove(Theme.DARK);

        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        console.log('light');
       
      }
    
};

refs.but.addEventListener("change", changeBack)
    



