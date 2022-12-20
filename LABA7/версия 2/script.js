
ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
    glLeft = event.pageX;
    glTop = event.pageY;
  
    moveAt(event.pageX, event.pageY);
  
    // переносит мяч на координаты (pageX, pageY),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      if(ball.getBoundingClientRect().height-70<event.clientY){
        moveAt(event.pageX, event.pageY);
      }
      }
    
      // передвигаем мяч при событии mousemove
      document.addEventListener('mousemove', onMouseMove);
    
      // отпустить мяч, удалить ненужные обработчики
      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        let tempx = ball.style.left.split("px")[0];
        let temoy = ball.style.top.split("px")[0];
        moveAt((glLeft - (tempx - glLeft)), (glTop - (temoy - glTop)))
        myMove(tempx,temoy,(glLeft - (tempx - glLeft)),(glTop - (temoy - glTop)),ball)
        setTimeout(() => {

        moveAt(glLeft, glTop)
      },4000);

      ball.onmouseup = null;
};

    
    };
    
    ball.ondragstart = function() {
      return false;
    };

    function myMove(posLSTART, posTSTART,posLEND, posTEND,ball) {
      let id = setInterval(frame, 5);
      console.log(posLSTART)
      console.log(posLEND)
      function frame() {
      console.log(posTSTART)
      console.log(posTEND)
      if (posTSTART<=posTEND) {
        clearInterval(id);
} else {
if(posTSTART!=posTEND){

if((posTSTART-200)>posTEND){
posTSTART-=2;
}else{
posTSTART-=4;
}

}
//!! continue increment
if(posLSTART>posLEND) {
posLSTART--;
}else {
posLSTART++;
}

ball.style.top = posTSTART + 'px';
ball.style.left = posLSTART + 'px';
}
}
}