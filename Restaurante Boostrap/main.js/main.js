const app = document.getElementById('typewriter');

const typewriter = new Typerwriter(app, {
    loop: true,
    delay:75
});

typewriter
.typeString('El pueblo la alegría')
.pauseFor(200)
.start();