// загрузка страницы
const arrays = ["media/photo1.png", "media/photo2.png", "media/photo3.png", "media/photo4.jpg", "media/photo5.jpg"];
const imageNode = document.querySelector('.image');
const leftButtonNode = document.getElementById('left-btn');
const rightButtonNode = document.getElementById('right-btn');
imageNode.src = arrays[0];
let i = 0;

leftButtonNode.addEventListener ("click", ()=> {
    if (i===0){
        i=arrays.length-1;
    }else{
       i--; 
    }
    imageNode.src = arrays[i];
 })

 rightButtonNode.addEventListener("click", () => {
    if (i === arrays.length-1) {
        i = 0;
    } else {
        i++;
    }
    imageNode.src = arrays[i];
})