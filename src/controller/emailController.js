import Email from '../models/Email.js';

class EmailController{
    
    static async enviarEmail(req, res){
        const { body:{name, email, content } } = req;

        //formatando os dados antes de enviar
        const subject = `${process.env.EMAIL_SUBJECT} ${name}` 
        const mensagemFormatada = `
        <h1>Mensagem enviada ${new Date().toLocaleString()}<h1/>
        <p>
            - nome do cliente: ${name}<br>
            - email: ${email}<br>
            - mensagem do cliente: ${content.trim()}<br>
        </p>
        `;

        try {
            const email = new Email();
            await email.send(
                process.env.EMAIL_SEND,
                subject, 
                mensagemFormatada
            );

            res.status(201).send({
                status: 201,
                ok: true,
                mensagem: "email enviado com sucesso"
            });

        } catch (error) {
            res.status(500).send({
                status: 201,
                ok: false,
                mensagem: "erro ao enviar email",
                 ...error
            });
        }
    } 


    static testando(req, res){
        res.status(200).send({teste: "testando"});
    } 
}

export default EmailController;