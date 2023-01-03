/*//const expoImage = document.querySelector(".expo-image"); 
//const expoTxt = document.querySelector(".expo-txt");
const anchorElements = document.querySelectorAll(".gallary-item-anchor"); //Собирает в Массив все значения аттрибутов "gallary-item-anchor" тегов (У нас из <a> </a> )   



function setDetails(anchor) {
    expoImage.src = anchor.getAttribute("data-details-image-from-galryItem"); //src - эот атрибут .expo-image / присваивает expoImage новую ссылку на новое фото (ссылка находиться в Аттрибуте тэга data-details-image)
    expoTxt.innerHTML = anchor.getAttribute("data-details-txt-from-galryItem"); //innerHTML - это контент Тэга "span" class="expo-txt
    
};
//anchorElements[2].addEventListener("click",setDetails);

for (let i=0;i<anchorElements.length; i++) {
    anchorElements[i].addEventListener("click",function(){
    setDetails(anchorElements[i]);
})
};

*/