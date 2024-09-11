import express from 'express';
import EmailController from '../controller/emailController.js';

const email = express.Router();

email
    .get('/email/teste', EmailController.testando)
    .post('/email/enviar', EmailController.enviarEmail)



    

export default email;