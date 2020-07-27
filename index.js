let burger = document.getElementById('burger')
let menu = document.getElementById('menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})