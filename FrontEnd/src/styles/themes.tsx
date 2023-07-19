//https://www.figma.com/file/F7QBDySb98gj7dkX9uX8YP/Material-Dark-Theme-Design-Kit?type=design&node-id=0-370&mode=design&t=LPDg3DfZKJoG7FtL-0
const white={
    "--primary-color": "rgb(194, 194, 194)",
    "--secundary-color": "none",

    "--font-color": "#494D4B",
    "--title-color": "#494D4B",
    "--input-button-color": "#808080",

    "--table-font-color": "#000",

    "--border-color": "rgb(194, 194, 194)",

    "--background-color":"#F7F8FA",

    "--gray-50": "#F7F8FA",
    "--gray-100": "#E6E8EB",
    "--gray-200": "#AFB2B1",
    "--gray-500": "#808080",
    "--gray-600": "#696969",
    "--gray-800": "#494D4B",
    "--gray-900": "#222",

    "--grenn-500": "#04D361",

    "--purple-300": "#9F75FF",
    "--purple-400": "#9164FA",
    "--purple-500": "#8257E5",
    "--purple-800": "#6F48C9",

    "--dark-slate-blue": "#4953B8",


    "--destak-color": "var(--font-color)",

    //nav
    "--nav-background-color": "var(--background-color)",
}

const dark={
    "--primary-color": "#121212",
    "--secundary-color": "#e0e0e0",

    "--background-color" : "#212121",

    "--font-color": "#D1D1D1",
    "--title-color": "#D1D1D1",
    "--input-buttons-color": "#121212",

    "--table-font-color": "#ece9e9",

    "--border-color": "rgb(194, 194, 194)",

    "--gray-50": "#FAFAFA",
    "--gray-100": "F5F5F5",
    "--gray-200": "#EEEEEE",
    "--gray-500": "#9E9E9E",
    "--gray-600": "#757575",
    "--gray-800": "#424242",
    "--gray-900": "#212121",
    
    "--destak-color": "#121212",

    //nav
    "--nav-background-color": "#121212",
}

function setWhiteTheme(rootElement : HTMLElement){
    for (const [key, value] of Object.entries(white)) {
        rootElement.style.setProperty(key, value);
      }
}

function setDarkTheme(rootElement : HTMLElement){
    for (const [key, value] of Object.entries(dark)) {
        rootElement.style.setProperty(key, value);
      }
}

function setCustomTheme(rootElement : HTMLElement){

}


export { setWhiteTheme, setDarkTheme, setCustomTheme };
