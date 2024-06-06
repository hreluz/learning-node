import 'dotenv/config';

import { Server } from "./presentation/server";
import { LogModel, MongoDatabase } from './data/mongo';
import { envs } from './config/envs.plugin';
import { PrismaClient } from '@prisma/client';
// import { envs } from './config/envs.plugin';

(async() => {
    await main();
})();

async function main() {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })

    // const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Test message !',
    //         origin: 'App.ts'
    //     }
    // })

    // console.log({newLog});

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'HIGH'
    //     }
    // })

    // console.log(logs);
    


    // Create collection = tables, document - register
    // const newLog = await LogModel.create({
    //     message: 'Test message from Mongo',
    //     origin: 'App.ts',
    //     level: 'low'
    // })

    // await newLog.save();

    // console.log(newLog)

    // const logs = await LogModel.find();
    // console.log(logs)
    // console.log(logs[1].message)


    Server.start();
    // console.log(envs);
}