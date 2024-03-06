import { yarg } from "./config/plugins/yargs.plugin";


// console.log(yarg)

(async() => {
    await main()
    console.log('End of program')
})();


async function main() {
    console.log(yarg)
}