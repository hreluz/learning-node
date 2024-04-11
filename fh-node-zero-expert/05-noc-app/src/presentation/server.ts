import { CronService } from "./cron/cron-service";

export class Server {

    public static start() {
        
        console.log('Server started');

        CronService.createJob(
            '*/2 * * * * *',
            () => {
                console.log('You will see this message every 2 seconds ', new Date());
        })

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                console.log('You will see this message every 5 seconds ', new Date());
        })

        CronService.createJob(
            '*/3 * * * * *',
            () => {
                console.log('You will see this message every 3  seconds ', new Date());
        })

    }

}