const toaster = document.getElementById("toaster");

function Update() {
    fetch('https://web-lab6-api.onrender.com/api/toasts')
        .then(response => response.json())
        .then(toasts => {
            console.log(toasts);
            for (let i = 0; i < toasts.length; i++) {
                toaster.innerHTML += `<div class="toast"><div class="sender">${toasts[i].sender}</div>
            <div class="message">${toasts[i].message}</div></div>`
            }
            while (toaster.children.length > 5) {
                toaster.removeChild(toaster.firstElementChild);
            }
        })
        .catch(error => console.error('Error loading objects:', error));
}

setInterval(Update, 1000);