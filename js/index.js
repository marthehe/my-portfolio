const collapseElement = document.querySelector('.nav__collapse');
const togglerElement = document.querySelector('.nav__toggler');

togglerElement.addEventListener('click', () => {
    collapseElement.classList.toggle('collapse');
});
