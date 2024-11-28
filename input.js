document.getElementById("toastForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const sender = document.getElementById("senderTextInput").value;
    const message = document.getElementById("messageTextInput").value;

    const data = {
        sender: sender,
        message: message
    };

    fetch('https://web-lab6-api.onrender.com/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
        alert(result.message);
    })
        .catch(error => {
            console.error('Error:', error);
        });
});

function FlushToasts(){
    fetch('https://web-lab6-api.onrender.com/api/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(result => {
            alert(result.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}