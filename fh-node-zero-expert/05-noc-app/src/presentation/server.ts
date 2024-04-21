import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {

    public static start() {
        
        console.log('Server started');


        CronService.createJob(
            '*/10 * * * * *',
            () => {
                // const url = 'http://localhost:3000'
                const url = 'http://google.com'
                new CheckService(
                    () => console.log(`${url} is ok `),
                    (error) => console.log(error)
                ).execute(url);
        })

    }

}