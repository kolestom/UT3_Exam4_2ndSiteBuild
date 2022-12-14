let text = document.getElementById('hello')
// let button = getElementById('button')

const changeText = () => {
    text.innerText = 'World'
}

text.addEventListener('click', changeText)