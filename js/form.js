
// nom = document.getElementById('nom')
// email = document.getElementById('email')
// message = document.getElementById('message')


function sendMail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "welnyx5@gmail.com",
        Password: "9140627B7EF127DE47320A772ADE34B926F4",
        To: 'welnyx5@gmail.com',
        From: 'welnyx5@gmail.com',
        Subject: 'Test envoie mail',
        Body: 'Message de :' + document.getElementById('email').value + '<br>' + document.getElementById('message').value
    }).then(
        message => alert(message)
    );
}


