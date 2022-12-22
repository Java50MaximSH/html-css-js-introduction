const exImg=document.querySelector(".expo-image");
const exTxt = document.querySelector(".expo-txt");

const galArray=document.querySelectorAll(".gallary-item-anchor");

const button=document.querySelector("#buttonHide");
// const button=document.getElementById("buttonHide"); Присвоение по getElementById

const mainElement = document.querySelector(".main-class") // Селектор можно искать по ".main-class" и через просто "main" //
const HIDDEN="hidden";
const IS_POINT="is-point";

const expoContainer = document.querySelector(".expo-container");

const audio = document.querySelector("audio");

function showExpo() {
    mainElement.classList.remove(HIDDEN);
    expoContainer.classList.add(IS_POINT);
    setTimeout(function(){
        expoContainer.classList.remove(IS_POINT);

    },1)
}

function hideExpo(){
mainElement.classList.add(HIDDEN);

}

button.addEventListener("click", hideExpo); 

function audioPlay () {
    audio.play()

}

function setTDetais(anchor){
    exImg.src=anchor.getAttribute("data-details-image-from-gallryItem");
    exTxt.innerHTML=anchor.getAttribute("data-details-txt-from-gallryItem");

    showExpo();

    audio.src=anchor.getAttribute("data-details-audio-from-gallryItem");
    audioPlay ();

    // setTimeout(function(){                       Это определяет когда нажметься пауза 
    //   audio.pause();}, 300);

}

for (let i=0 ; galArray.length ; i++ ){
    if(galArray){ //не обязательное условие 
    galArray[i].addEventListener("click", function(){
        setTDetais(galArray[i]);
        
                               });
                }
                            }


                     

// onclick="hideExpo()"

// 1) 
// a. - Требутеся переменная (или массив переменных) со ссылкой на элемент (определяется через ".Классом" / "Элементом" / "#id" ). Например (expoImage/expotxt)
// б. - Сбор в массив селекторов, элементов в которых есть инфа для expo

// 2) 
// а. - Цикл for распределяет события addEventListner на каждый конкретный элемент (из DOM) при нажатии на него (на конкретный элемент)

// 3) 
// a. После распределения, при нажатии на элемент (у нас элемент из массива galArray[i]), запускается Функция ( "function(){}" ) которая вызывает Функцию ("setTDetais(){}") 
// с аргументом ("galArray[i]") т.е номер элемента в массиве (ссылка на конкретный элемент) для исползования его (в "anchor.getAttribute") чтобы вытащить из него (data-) 
// для аддреса на фото, описание и мелодию в экспозиции  
// б. В функции ("setTDetais(anchor)") помимо присвоения (через getAttribute),  Затем запускаются еще другие функции -  showExpo(); , audioPlay ();