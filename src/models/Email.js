import nodemailer from 'nodemailer';

class Email{
    constructor(){
        this.smtp = this._configureEmail();
    }

    _configureEmail(){
        return nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD
            }
        })
    }

    _prepareEmail(to, subject, content){
        return {
            to: to,
            subject: subject,
            // text: content
            html: content
        }
    }

    async send(to, subject, content){
        try{
            await this.smtp.sendMail(this._prepareEmail(to, subject, content));
            console.log('email enviado');
        }
        catch(error){
            throw error;
        }
    }
}

export default Email;

