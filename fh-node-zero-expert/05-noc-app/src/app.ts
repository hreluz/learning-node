import 'dotenv/config';

import { Server } from "./presentation/server";
// import { envs } from './config/envs.plugin';

(async() => {
    await main();
})();

function main() {
    Server.start();
    // console.log(envs);
}