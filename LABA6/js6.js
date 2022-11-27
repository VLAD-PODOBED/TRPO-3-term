window.onload = function() {
    var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     // Рисуем окружность 

    context.arc(100,75,50,0,2*Math.PI);
    context.fillStyle = 'yellow';
    context.fill();
    context.stroke();

     // Рисуем квадрат
    let square = {
    A:context.moveTo(300, 25),
    A1:context.lineTo(300, 125),
    A2:context.lineTo(200, 125),
    A3:context.lineTo(200, 25),
    A4:context.closePath(), // смыкание начала и конца рисунка (левая стена)
    A5:context.stroke(),
    };
     // Рисуем треугольник
     let triangle = {
    q:context.moveTo(400,25),
    q1:context.lineTo(450, 125),
    q2:context.lineTo(350, 125),
    Q3:context.closePath(),
    Q4:context.stroke(),
    //палка
    Q5:context.moveTo(400,25),
    Q6:context.lineTo(400,125),
    Q7:context.stroke(),
     };
}};