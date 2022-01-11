const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    const min = String(new Date().getMinutes()).padStart(2, "0");
    const sec = String(new Date().getSeconds()).padStart(2, "0");
    const hr = String(new Date().getHours()).padStart(2, "0");

    clock.innerText = `${hr} : ${min} : ${sec}`;
}




getClock();
setInterval(getClock, 1);

