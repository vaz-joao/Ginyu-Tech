document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');

    // Desabilita a rolagem da página enquanto o preloader está ativo
    document.body.style.overflow = 'hidden';

    setTimeout(function () {
        // Esconde o preloader suavemente
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';

        // Espera a transição terminar antes de remover
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.style.overflow = 'auto'; // Reabilita a rolagem
        }, 500);
    }, 2500);
});
