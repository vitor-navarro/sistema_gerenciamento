
function setWhiteTheme(rootElement : HTMLElement){
    rootElement.style.setProperty('--primary-color', 'rgb(194, 194, 194)');

}

function setDarkTheme(rootElement : HTMLElement){
    rootElement.style.setProperty('--primary-color', '#000');

}

function setCustomTheme(rootElement : HTMLElement){
    rootElement.style.setProperty('--primary-color', 'blue');

}


export { setWhiteTheme, setDarkTheme, setCustomTheme };