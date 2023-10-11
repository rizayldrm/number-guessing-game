var text = document.getElementById('text')
var input = document.getElementById('input')
var btn = document.getElementById('btn')
var hak = 0
const guess = Math.floor(Math.random() * 101)

console.log(guess)

addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        TahminEt()
    }
})

function TahminEt() {
    if (guess < input.value) {
        text.innerHTML = 'Kucult'
        hak++
    } else if (guess > input.value) {
        text.innerHTML = 'Buyult'
        hak++
    } else {
        text.innerHTML = 'Kazandin!!! ' + hak + ' kere yanlis tahminde bulundun'
    }
}

