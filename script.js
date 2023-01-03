const icon = document.querySelector("#icon");
const iconDois = document.querySelector("#iconDois");
const iconTres = document.querySelector("#iconTres");
const iconQuatro = document.querySelector("#iconQuatro");

icon.onclick = () => {
    icon.classList.toggle("filled");
};

iconDois.onclick = () => {
    iconDois.classList.toggle("filled");
};

iconTres.onclick = () => {
    iconTres.classList.toggle("filled");
};

iconQuatro.onclick = () => {
    iconQuatro.classList.toggle("filled");
};