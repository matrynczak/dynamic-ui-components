const title = document.querySelector('.title');
const optionsContainer = document.querySelector('.options');


title.addEventListener('mouseover', () => {
    //optionsContainer.setAttribute('style', 'display: flex; flex-direction: column;');
    optionsContainer.classList.add('expanded');
    optionsContainer.classList.remove('collapsed');
})

title.addEventListener('mouseout', () => {
    //optionsContainer.setAttribute('style', 'display: none;');
    optionsContainer.classList.add('collapsed');
    optionsContainer.classList.remove('expanded');
})

optionsContainer.addEventListener('mouseover', () => {
    //optionsContainer.setAttribute('style', 'display: flex; flex-direction: column;');
    optionsContainer.classList.add('expanded');
    optionsContainer.classList.remove('collapsed');
})

optionsContainer.addEventListener('mouseout', () => {
    //optionsContainer.setAttribute('style', 'display: none;');
    optionsContainer.classList.add('collapsed');
    optionsContainer.classList.remove('expanded');
})