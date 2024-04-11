import {CronJob} from 'cron';

export class Server {

    public static start() {
        
        console.log('Server started');
        
        const job = new CronJob(
            '*/2 * * * * *',
            () => {
                console.log('You will see this message every 2 seconds ', new Date());
            }
        )

        job.start()

    }

}