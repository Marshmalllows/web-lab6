const toaster = document.getElementById("toaster");
let toastsHere = [];

function Update() {
    fetch('https://web-lab6-api.onrender.com/api/toasts')
        .then(response => response.json())
        .then(toasts => {
            console.log(toasts);
            if (JSON.stringify(toasts) !== JSON.stringify(toastsHere)) {
                toastsHere = toasts;
                toaster.innerHTML = '';

                for (let i = 0; i < toasts.length; i++) {
                    toaster.innerHTML += `<div class="toast"><div class="sender">${toasts[i].sender}</div>
                    <div class="message">${toasts[i].message}</div></div>`;
                }

                while (toaster.children.length > 5) {
                    toaster.removeChild(toaster.firstElementChild);
                }
            }
        })
        .catch(error => console.error('Error loading objects:', error));
}

setInterval(Update, 1000);