import { envs } from "../config/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-imp.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
    // new FileSystemDataSource()
    // new MongoLogDataSource()
    new PostgresLogDataSource()
) 
const emailService = new EmailService();

export class Server {

    public static async start() {
        
        console.log('Server started');

        CronService.createJob(
            '*/10 * * * * *',
            () => {
                const url = 'http://google.com';

                new CheckServiceMultiple(
                        [new FileSystemDataSource(), new MongoLogDataSource(), new PostgresLogDataSource()],
                    () => console.log(`${url} is ok `),
                    (error) => console.log(error)
                ).execute(url);
        })
    }

}