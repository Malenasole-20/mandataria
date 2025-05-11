
const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos

// Ruta para enviar el correo
app.post('/send', async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'oficina20sanjuan@gmail.com',
            pass: 'TU-NUEVA-CONTRASEÑA-DE-APLICACION'
        }
    });

    try {
        await transporter.sendMail({
            from: 'oficina20sanjuan@gmail.com', // correo autorizado
            replyTo: email,                     // correo del usuario
            
            subject: 'Nuevo mensaje desde la web',
            text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
        });

        res.status(200).json({ success: true, message: 'Correo enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
N});

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

