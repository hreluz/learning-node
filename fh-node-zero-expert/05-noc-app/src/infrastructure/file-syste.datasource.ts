import { existsSync, mkdirSync, writeFileSync } from "fs";
import { LogDataSource } from "../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../domain/entities/log.entity";

export class FileSystemDataSource implements LogDataSource{

    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-low.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles = () => {
        if (!existsSync(this.logPath)) {
            mkdirSync(this.logPath);
        }

        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(path => {
            if (existsSync(path)) return;

            writeFileSync(path, '');
        })
    }

    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}