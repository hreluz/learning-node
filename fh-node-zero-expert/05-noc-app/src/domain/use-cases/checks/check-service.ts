interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>
}

export class CheckService implements CheckServiceUseCase {

    public async execute(url: string) {
        try {
            const req = await fetch(url);

            if (!req.ok) {
                throw new Error(`Error on check service ${url}`)
            }

            console.log(`${url} is ok`);
        } catch(error) {
            console.log(`${error}`);
            return false
        }

        return true;
    }
}