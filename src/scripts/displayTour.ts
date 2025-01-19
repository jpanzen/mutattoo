const button = document.querySelector('.JS-display-tour');
const modal = document.getElementById('saloon-tour');
const iframe = document.getElementById('youtube-video');

button?.addEventListener('click', () => {
    modal?.classList.remove('hidden');
});

modal?.addEventListener('click', (e) => {
    if (!e.target?.closest('iframe')) {
        modal.classList.add('hidden');
        iframe?.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
});