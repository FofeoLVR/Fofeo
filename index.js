
const container = document.getElementById('Container');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;

    const maxRotation = 15;

    const rotateX = offsetY * maxRotation * -1;
    const rotateY = offsetX * maxRotation;

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    container.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

