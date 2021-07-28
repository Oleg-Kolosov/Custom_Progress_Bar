const progressBar = document.querySelector('.progress-bar');
const progressLabel = document.querySelector('.progress-indicator p strong');
const progressPercElement = document.querySelector('.progress-indicator p span');

const load = (perc = 0) => {
    progressBar.value = perc;
    progressPercElement.textContent = `${Math.round(perc)}%`;

    if (perc < 100) {
        requestAnimationFrame(() => load(perc + 0.3));
    } else {
        progressLabel.textContent = 'Complete';
        setTimeout(() => {
            progressLabel.textContent = 'Loading...';
            load()
        }, 2000);
    }
};

load();
