const generate = (function() {

    const drawParticles = (amount) => {
        const gutter = {
            x:window.innerWidth / (amount + 2),
            y:window.innerHeight / (amount + 2),
        };

        for(let index = 0; index < amount; index++){
            draw.circle(index * gutter.x, index * gutter.y, {size:20, color:'white'})
        }
            
    }

    const repeatingPattern = (interval,maxParticles = 200) => {
        let particlesAmount = 1;
        //Loop maken
        const timer = setInterval(() => {
            drawParticles(particlesAmount);

            if(particlesAmount >= maxParticles){
                particlesAmount = 1;
            }

            drawParticles(particlesAmount);
            particlesAmount *= 2;

        }, interval);

    };

    return {
        repeatingPattern
    };
})();

generate.repeatingPattern(200);