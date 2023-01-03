const expoImg = document.querySelector(".expo-image");
const expoTxt = document.querySelector(".expo-txt");

const gallaryItem = document.querySelectorAll(".gallary-item-anchor");



function setDetails(anchor) {
    expoImg.src = anchor.getAttribute("data-details-image");
     expoTxt.innerHTML=anchor.getAttribute("data-details-txt")

}


for (let i = 0 ; i<gallaryItem.length ; i++ ){
gallaryItem[i].addEventListener("click", function(){
 setDetails(gallaryItem[i]);
} )
}