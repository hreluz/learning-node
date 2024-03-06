import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";


// console.log(yarg)

(async() => {
    await main()
    console.log('End of program')
})();


async function main() {
    const {b:base, l: limit, s: showTable} = yarg
    console.log(ServerApp.run({base, limit, showTable}))
}