import './style.css'
const playBtn = document.getElementById('playBtn') as HTMLButtonElement | null;

playBtn?.addEventListener('click', () => {
    if (playBtn.innerHTML.includes('fa-play')) {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});