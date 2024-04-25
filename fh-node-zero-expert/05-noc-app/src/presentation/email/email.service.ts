import nodemailer from 'nodemailer';
import { envs } from '../../config/envs.plugin';

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[]
}

interface Attachment {
    filename: string;
    path: string;
}

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    async sendEmail(options:SendMailOptions):Promise<boolean> {
        const {to, subject, htmlBody, attachments = []} = options;
    
        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            });

            console.log(sentInformation);

            return true;

        } catch(error) {
            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to: string | string[]) {

        const subject = 'Server Logs';
        const htmlBody =  `
            <h2> System logs - NOC </h2>
            <p>        Sint velit dolor proident voluptate esse dolor magna fugiat exercitation cillum. 
            Laboris amet laboris nulla tempor laborum proident veniam eiusmod enim. Mollit sit aliqua consectetur anim dolore qui aliquip nulla ut nulla. 
            Dolore consequat aute ad adipisicing esse.</p>
        `;
        
        const attachments:Attachment[] = [
            {filename: 'logs-all.log', path: './logs/logs-all.log'},
            {filename: 'logs-high.log', path: './logs/logs-high.log'},
            {filename: 'logs-medium.log', path: './logs/logs-medium.log'},
        ]

        return this.sendEmail({
            to,
            subject,
            attachments,
            htmlBody
        })

    }

}