function startRain() {
    const container = document.getElementById('rain-container');
    container.style.display = 'block';
    container.innerHTML = '';

    const icons = ['</>', '{ }', 'CSS', 'HTML'];
    const numDrops = 50;

    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.textContent = icons[Math.floor(Math.random() * icons.length)];
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(drop);
    }

    setTimeout(() => {
        container.style.display = 'none';
    }, 2000);
} 