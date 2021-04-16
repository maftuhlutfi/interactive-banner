var name = prompt("What is your name?")

const txt1 = `<div>Hi <span id="nama">${name}</span>, do you need some cash money?<div>
                <div>Withdrawing your fund will make you <span class="highlight-red">loose $1280.</span> Isn't a shame?</div>`

const txt2 = `<div>Get a personal loan of up to $50.000.<div>
                <div>With an attractive %3.1 interest rate and <span class="highlight-green">Save up to $3000</span> a year!</div>`

var typed = new Typed('#text', {
    strings: [txt1],
    typeSpeed: 20,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    onComplete: function (self) {
        document.getElementById('cta1').style.opacity = '100%';
        document.getElementById('cta1').addEventListener('click', () => {
            self.destroy();
            document.getElementById('cta1').style.display = 'none';
            new Typed('#text', {
                strings: [txt2],
                typeSpeed: 20,
                backSpeed: 0,
                fadeOut: true,
                loop: false,
                onComplete: function (self) {
                    document.getElementById('cta2').style.opacity = '100%';
                    document.getElementById('cta2').addEventListener('click', () => {window.open('http://google.com')})
                }
            });
        })
    }
});

document.addEventListener('DOMContentLoaded', function() {
    typed.start();
})

const direction = document.getElementById('direction');
const cta = document.querySelectorAll('.cta');
const text = document.getElementById('text');

direction.addEventListener('change', e => {
    const value = e.target.value;
    if (value == 'hebrew') {
        text.style.direction = 'rtl';

        cta.forEach(item => {
            item.style.cssFloat = 'right';
        })
    }
    if (value == 'latin') {
        text.style.direction = 'ltr';
        cta.forEach(item => {
            item.style.cssFloat = 'none';
        })
    }
})