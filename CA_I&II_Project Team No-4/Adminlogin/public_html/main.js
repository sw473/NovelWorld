var text = document.querySelectorAll('.lbl-text');
var bar = document.querySelectorAll('.bar')

function anim_start(e, key) {
    if (!e.value) {
        text[key - 1].classList.add('animate');
        bar[key - 1].classList.add('an')
    }
}

function anim_end(e, key) {
    if (!e.value) {
        text[key - 1].classList.remove('animate');
        bar[key - 1].classList.remove('an')
    }
}

function toggle() {
    var id = document.getElementById('user-pass')
    if (id.type == 'password') {
        id.type = 'text'
    } else {
        id.type = 'password'
    }
}