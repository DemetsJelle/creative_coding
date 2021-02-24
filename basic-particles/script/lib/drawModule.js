// (Revealing) module pattern
const draw = (function() {

   let ctx = null;

    const matchCanvasToWindow = (canvasElement) =>{
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
    };

    const setup = (canvasElement) => {
        window.addEventListener('resize',function(){
            matchCanvasToWindow(canvasElement);
        });
        matchCanvasToWindow(canvasElement);

        ctx = canvasElement.getContext('2d');
    }

    const circle = (x, y, {size, color}) => {
        //todo draw circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };  

    return {
        setup,
        circle,
    };
})();

//draw.setup(canvasElement);

