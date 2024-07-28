document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('pop');
        setTimeout(() => {
            button.classList.remove('pop');
        }, 200);
    });
});
