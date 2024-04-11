interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>
}

type SuccessCallback = () => void;
type ErrorCallback = (error:String) => void;


export class CheckService implements CheckServiceUseCase {

    constructor(
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

            this.successCallback();
            // console.log(`${url} is ok`);
        } catch(error) {
            // console.log(`${error}`);
            this.errorCallback(`${error}`)
            return false
        }

        return true;
    }
}