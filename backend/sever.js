const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
    const { nombre, email, mensaje } = req.body;

  
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'oficina20sanjuan@gmail.com', 
            pass: 'mmsl afuw nlhe eqdc '
            
        }
    });


    try {
        await transporter.sendMail({
            from: email,
            to: 'TU_CORREO@gmail.com',
            subject: 'Nuevo mensaje desde la web',
            text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
        });

        res.status(200).json({ success: true, message: 'Correo enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

