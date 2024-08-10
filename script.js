const animatedText = document.querySelector('.sec-home h2');

function animateText() {
    if (isInViewport(animatedText)) {
        animatedText.classList.add('active');
    } else {
        animatedText.classList.remove('active');
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

window.addEventListener('scroll', animateText);
