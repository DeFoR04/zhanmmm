document.getElementById('portalBtn').addEventListener('click', function() {
    // Появление портала
    let portalMessage = document.createElement('div');
    portalMessage.classList.add('portal-message');
    portalMessage.innerHTML = '<h2>Ты перешла через портал! 🎉</h2><p>Теперь ты в моём сердце навсегда.</p>';
    document.body.appendChild(portalMessage);
    
    // Показать сообщение через 3 секунды
    setTimeout(function() {
        document.getElementById('message').classList.add('show');
    }, 3000);
});

document.getElementById('animationArea').addEventListener('click', function(event) {
    let heart = document.createElement('div');
    heart.classList.add('pixel-heart');
    heart.style.left = event.pageX - this.offsetLeft + 'px';
    heart.style.top = event.pageY - this.offsetTop + 'px';
    this.appendChild(heart);
    setTimeout(function() {
        heart.remove();
    }, 2000);
});

function submitWish() {
    const input = document.getElementById('wishInput').value;
    if (input) {
        document.getElementById('wishResponse').style.display = 'block';
        document.getElementById('wishResponse').textContent = "Спасибо за твои слова, ты всегда в моём сердце ❤️";
    }
}