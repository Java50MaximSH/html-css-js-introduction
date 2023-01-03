const expoImage = document.querySelector(".expo-image"); //просто ссылка на элемент expo-image
const expoTxt = document.querySelector(".expo-txt");

const allGallaryItemAnchorsElements = document.querySelectorAll(".gallary-item-anchor"); 
//Массив с сылками всех элементов с селектороами gallary-item-anchor

// function setDetails() {

//     expoImage.src ="images/dog1.jpg"
//   expoTxt.innerHTML = "Who let the dogs out"}


//Элемент на котор. нажимают;    Обработчик событий; Событие; Реакция которая должна быть на событие  
 //            |                           |           |           | 
//allGallaryItemAnchorsElements[2].addEventListener("click",setDetails);



//Просто сообщается номер Тега из  собранного массива allGallaryItemAnchorsElements
 //ancor переменная которая будет содержать элемент массива по индексу allGallaryItemAnchorsElements[i] //
  // из которого будет браться инфа для (содержимого ) Этой Функциии ancor ; Функия setDetails параметр  которой (anchor) будет присваиваться нужная инфа из нужного Тэга по аргументу этого Тэга //
 // getAttribute поддтягивает инфу по аттрибуту data-details-image-from-galryItem//                                                                          
function setDetails(anchor) {                                              
     expoImage.src =anchor.getAttribute("data-details-image-from-gallryItem");  
    expoTxt.innerHTML = anchor.getAttribute("data-details-txt-from-gallryItem");
}

 //function запускает другую ф-цию setDetails с элементами allGallaryItemAnchorsElements[i] //
for(let i=0; i<allGallaryItemAnchorsElements.length ; i++)
{
    allGallaryItemAnchorsElements[i].addEventListener("click" , function(){               
        setDetails(allGallaryItemAnchorsElements[i]);
    })



}

//  allGallaryItemAnchorsElements[i].addEventListener("click"... - указывает на какой элемент массива было нажато
//  ..function{setDetails(allGallaryItemAnchorsElements[i]);     - Функция запускает другую функцию с присвоением информации в expo.  


// 
// 1) Требутеся переменная с ссылкой на элемент где все будет меняться (expoImage/expotxt)
// 2) Сбор в массив селекторов, элементов в которых есть инфа для expo
// 3) Функция для передачи в (переменную.с аттрибутом), Инфу из селекторов массива 
// 4) Цикл в звисимости на какой элемент было нажато из него и береться инфа для передачи в функцию (ждя передачи в переменную expoImage/expotxt)




