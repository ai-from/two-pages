const accordion = document.querySelector('.accordion');
const items = document.querySelectorAll('.accordion .item');

function clickOnOpen(target) {
    target.classList.remove('open');
}

function clickOnEmpty(target) {
    items.forEach(i => i.classList.remove('open'));
    target.classList.add('open');
}

accordion.addEventListener('click', e => {
    const target = e.target.classList.contains('item') ? e.target : e.target.closest('.item');
    target.classList.contains('open') ? clickOnOpen(target) : clickOnEmpty(target);
});