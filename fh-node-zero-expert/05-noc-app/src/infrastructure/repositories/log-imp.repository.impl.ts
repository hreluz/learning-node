import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogDataSource } from '../../domain/datasources/log.datasource';

export class LogRepositoryImpl implements LogRepository {

    // private logDataSource:LogDataSource;

    constructor(
        private readonly logDataSource:LogDataSource
    ) {
    }

    async saveLog(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLog(log);
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs(severityLevel);
    }
}