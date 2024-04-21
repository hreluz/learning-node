import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>
}

type SuccessCallback = () => void;
type ErrorCallback = (error:String) => void;


export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository:LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ) {

    }

    public async execute(url: string) {
        try {
            const req = await fetch(url);

            if (!req.ok) {
                throw new Error(`Error on check service ${url}`)
            }

            const log = new LogEntity(`Service ${url} working`, LogSeverityLevel.low);
            this.logRepository.saveLog(log)

            this.successCallback();
        } catch(error) {
            const log = new LogEntity(`${url} is not okay, ${error}`, LogSeverityLevel.high);
            this.logRepository.saveLog(log)
            this.errorCallback(`${error}`)
            return false
        }

        return true;
    }
}