import 'dotenv/config';

import { Server } from "./presentation/server";
import { MongoDatabase } from './data/mongo';
import { envs } from './config/envs.plugin';
// import { envs } from './config/envs.plugin';

(async() => {
    await main();
})();

async function main() {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })

    Server.start();
    // console.log(envs);
}