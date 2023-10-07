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

var qIndex = 0;
var questions = [
    "In the last century, Earth's temperature rose by about one degree Fahrenheit.",
    "Human activities, especially burning fossil fuels, are impacting our climate.",
    "NASA uses satellites to study these climate changes, and we can help by conserving energy.",
    "The ocean shapes our planet's climate and weather by absorbing, storing, and transporting large quantities of heat, water, moisture, and carbon dioxide.",
    "NASA’s Physical Oceanography (PO) program enables research that advances our understanding of the ocean’s role in climate."
];