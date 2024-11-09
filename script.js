document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% dari elemen terlihat
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Tambahkan kelas 'visible' saat terlihat
                observer.unobserve(entry.target); // Hentikan pengamatan
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section); // Amati setiap section
    });
});
