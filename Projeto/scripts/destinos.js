function toggleDescription(element) {
    document.querySelectorAll('.destino').forEach(destino => {
        if (destino !== element) {
            closeDescription(destino);
        }
    });

    if (element.classList.contains('active')) {
        closeDescription(element);
    } else {
        element.classList.add('active');
    }
}

function closeDescription(element) {
    if (element.classList.contains('active')) {
        element.classList.add('closing');
        element.classList.remove('active');

        element.addEventListener('transitionend', () => {
            element.classList.remove('closing');
        }, { once: true });
    }
}

document.addEventListener('click', (event) => {
    const destinoElements = document.querySelectorAll('.destino');
    let clickedInside = false;

    destinoElements.forEach(destino => {
        if (destino.contains(event.target)) {
            clickedInside = true;
        }
    });

    if (!clickedInside) {
        destinoElements.forEach(destino => {
            closeDescription(destino);
        });
    }
});