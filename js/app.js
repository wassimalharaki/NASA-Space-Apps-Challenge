var App = {
    numberOfDroplets: 40
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
    "NASA’s Physical Oceanography (PO) program enables research that advances our understanding of the ocean’s role in climate.",
    "Changes in precipitation patterns can lead to increased instances of both droughts and heavy rainfall events.",
    "More frequent and severe weather events like hurricanes, cyclones, and heavy storms have increased steadily in the past century due to climate change.",
    "Rising temperatures cause glaciers and snowpacks to shrink and melt earlier, affecting the timing and availability of freshwater downstream.",
    "Rising sea levels are a direct consequence of melting ice, and perhaps the most destructive one. They threaten low-lying islands, coastal areas, they influence weather patterns, and exacerbate flooding.",
    "There is unequivocal evidence that Earth is warming at an unprecedented rate. Human activity is the principal cause.",
    "The effects of human-caused global warming are happening now, are irreversible on the timescale of people alive today, and will worsen in the decades to come.",
    "NASA provides the robust scientific data needed to understand climate change.",
    "Weather is the changes we see and feel outside from day to day. Climate is the usual weather of a place.",
    "Earth’s temperature has gone up about one degree Fahrenheit in the last 100 years. This may not seem like much. But small changes in Earth’s temperature can have big effects.",
    "Many things can cause climate to change all on its own. Earth’s distance from the sun can change. The sun can send out more or less energy. Oceans can change. When a volcano erupts, it can change our climate.",
    "Most scientists say that humans can change climate. People drive cars. People heat and cool their houses. People cook food. All those things take energy.",
    "Scientists think we can do things to stop the climate from changing as much. You can help by using less energy and water. Turn off lights and TVs when you leave a room. Turn off the water when brushing your teeth."
];

function didyouknow() {
    Swal.fire({
        iconHtml: '<img src="./img/NASA_logo.png" style="border: none;"/>',
        title: 'Did you know?',
        text: questions[qIndex++ % questions.length],
        customClass: {
            icon: 'no-border',
            confirmButton: 'swal-button'
        }
    })
}