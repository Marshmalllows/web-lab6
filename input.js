document.getElementById("toastForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const sender = document.getElementById("senderTextInput").value;
    const message = document.getElementById("messageTextInput").value;

    const data = {
        sender: sender,
        message: message
    };

    fetch('http://localhost:5167/api/save', {
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