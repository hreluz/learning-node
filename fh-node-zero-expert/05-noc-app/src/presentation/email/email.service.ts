import nodemailer from 'nodemailer';
import { envs } from '../../config/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

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

    constructor(
        private readonly logRepository: LogRepository
    ){}

    async sendEmail(options:SendMailOptions):Promise<boolean> {
        const {to, subject, htmlBody, attachments = []} = options;
    
        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            });

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email sent',
                origin: 'email.service.ts'
            })

            this.logRepository.saveLog(log)

            return true;

        } catch(error) {

            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email not sent',
                origin: 'email.service.ts'
            })
            
            this.logRepository.saveLog(log)
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