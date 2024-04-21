import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/file-syste.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-imp.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
) 


export class Server {

    public static start() {
        
        console.log('Server started');


        CronService.createJob(
            '*/10 * * * * *',
            () => {
                // const url = 'http://localhost:3000'
                const url = 'http://google.com';

                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok `),
                    (error) => console.log(error)
                ).execute(url);
        })

    }

}