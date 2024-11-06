// Открытие модального окна
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Переход к выбранной главе
function goToChapter(chapter) {
    window.location.href = chapter;
}
