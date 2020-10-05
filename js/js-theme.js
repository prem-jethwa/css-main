
// DOM elements
const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const solarBtn = document.getElementById('solar');
const body = document.body ;

// apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if(theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}


// butten events

darkBtn.onclick = () => {

     body.classList.replace('light','dark');
     localStorage.setItem('theme', 'dark')

};

lightBtn.onclick = () => {

    body.classList.replace('dark','light');
    localStorage.setItem('theme', 'light')

};

solarBtn.onclick = () => {

    if(body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarBtn.style.cssText= `--bg-solar: var(--yellow);`

        solarBtn.innerText = 'Mix Web Theme' ;

        localStorage.removeItem('isSolar');

    }else {

        solarBtn.style.cssText=`--bg-solar: white;`

        body.classList.add('solar');
        solarBtn.innerText = 'Remove Web theme';

        localStorage.setItem('isSolar',true);
    }
};