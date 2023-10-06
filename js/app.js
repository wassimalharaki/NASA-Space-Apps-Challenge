var App = {
    numberOfDroplets: 0  
}

App.spawnDroplet = function(input) {

    $('body').append('<div class="droplet"><div class="flying"></div></div>')

    var $droplet = $('body .droplet').last()
    var $flying = $droplet.find('.flying')
    $droplet.css({
        left: input.left + '%',
        top: input.top + '%',
        transform: 'scale(' + input.scale + ')',
        opacity: input.opacity
    })
    $flying.css({
        animation: input.duration + 's flying infinite linear',
        'animation-delay': input.delay + 's',
    })
}
    
var i = 0
while( i < App.numberOfDroplets ) {
    
    var opacity = Math.random().toFixed(1)
    var scale = opacity * 3
    var y = 65 + ( opacity * 35 )
    var duration = 1 + parseFloat(Math.random().toFixed(2))
    
    App.spawnDroplet({
        left: parseInt( Math.random() * 100 ),
        top: y,
        opacity: opacity,
        scale: scale,
        duration: duration,
        delay: duration
    })
    i++
}
window.onload = () => {
    let button = document.getElementById("submit");
    button.style.backgroundColor = "#03a9f4";
    button.style.animation = "loadingWave 20s linear";

    button.addEventListener('animationend', () => {
        button.removeAttribute('disabled');
    });

    button.onclick = () => {
        // Remove the animation
        button.style.animation = "none";
        
        // After a short delay, re-add the animation
        setTimeout(() => {
            button.style.animation = "loadingWave 20s linear";
            button.setAttribute('disabled', 'true'); // Optionally disable the button again until animation ends
        }, 50); // 50ms delay, which can be adjusted
    };
};
