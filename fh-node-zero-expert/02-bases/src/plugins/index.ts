import {getAge} from './get-age.plugin'
import {getUUID} from './get-id.plugin'
import {httpClientPlugin as http}  from './http-client.plugin'
import {buildLogger}  from './logger.plugin'

module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger
}