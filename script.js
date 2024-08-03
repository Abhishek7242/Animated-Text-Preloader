window.addEventListener('load', () => {
        
    let preLoader = document.getElementById('preloader')
    let body = document.querySelector('body')

    const letters = document.querySelectorAll('.text span');
    const line = document.querySelector('.line');
    let delay = 400; // Delay between each letter animation

    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1;
            letter.style.transform = 'translateY(-100px)';
        }, index * delay);
    });

    setTimeout(() => {
        line.style.width = '100%';
        setTimeout(() => {
            preLoader.style.opacity = '0'

            body.classList.remove('no-scroll')
            setTimeout(() => {

                preLoader.style.display = 'none'
            }, 500);
        }, 2000);
    }, letters.length * delay);



})

function refreshPage() {
    location.reload();
}