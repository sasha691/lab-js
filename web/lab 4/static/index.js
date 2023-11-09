const form = document.getElementById('myForm');
const sections = form.querySelectorAll('section');

sections.forEach(section => {
    const input = section.querySelector('input, textarea');

    input.addEventListener('focus', () => {
        sections.forEach(sec => {
            sec.classList.remove('active');
        });
        section.classList.add('active');
    });
});
