let startTime, endTime, interval;

function start() {
    startTime = Date.now();
    interval = setInterval(function() {
        let elapsedTime = Date.now() - startTime;
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        document.getElementById('time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    }, 10);
};

function stop() {
    clearInterval(interval);
    endTime = Date.now();
    let totalTime = endTime - startTime;
    let milliseconds = Math.floor((totalTime % 1000) / 10);
    let seconds = Math.floor((totalTime / 1000) % 60);
    let minutes = Math.floor((totalTime / (1000 * 60)) % 60);
    document.getElementById('time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
};

function reset() {
    clearInterval(interval);
    startTime = null;
    endTime = null;
    document.getElementById('time').textContent = '00:00:00';
};