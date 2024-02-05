const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        playExpandAnimation(panel);
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function playExpandAnimation(panel) {
    // Tambahkan class 'expand' untuk memicu animasi di CSS
    panel.classList.add('expand');

    // Hapus class 'expand' setelah animasi selesai
    setTimeout(() => {
        panel.classList.remove('expand');
    }, 700); // Sesuaikan dengan durasi animasi di CSS (0.7s)
}
