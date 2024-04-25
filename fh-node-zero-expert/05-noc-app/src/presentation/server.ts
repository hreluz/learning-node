import { envs } from "../config/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/file-syste.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-imp.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
) 


export class Server {

    public static start() {
        
        console.log('Server started');

        const emailService = new EmailService(fileSystemLogRepository);
        // emailService.sendEmail({
        //     to: envs.MAILER_TO && envs.MAILER_TO || "",
        //     subject: 'Logs system',
        //     htmlBody: `
        //         <h2> System logs - NOC </h2>
        //         <p>        Sint velit dolor proident voluptate esse dolor magna fugiat exercitation cillum. 
        //         Laboris amet laboris nulla tempor laborum proident veniam eiusmod enim. Mollit sit aliqua consectetur anim dolore qui aliquip nulla ut nulla. 
        //         Dolore consequat aute ad adipisicing esse.</p>
        //     `
        // })

        // emailService.sendEmailWithFileSystemLogs(
        //     [envs.MAILER_TO && envs.MAILER_TO || ""]
        // )
        
        // CronService.createJob(
        //     '*/10 * * * * *',
        //     () => {
        //         // const url = 'http://localhost:3000'
        //         const url = 'http://google.com';

        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok `),
        //             (error) => console.log(error)
        //         ).execute(url);
        // })

    }

}