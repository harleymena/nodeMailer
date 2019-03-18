//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'user@gmail.com',
        pass: 'pass'
    }
});

var mensaje = "Hola desde nodejs...";

var mailOptions = {
    from: 'user@gmail.com',
    to: 'correo@hotmail.com',
    subject: 'Mensaje desde node',
    text: mensaje
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});