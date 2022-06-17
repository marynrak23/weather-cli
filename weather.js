#!/usr/bin/env/ node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printHelp, printError, printSuccess } from './services/log.service.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'

const saveToken = async (token) => {
    if(!token.length){
        printError('Token not taken')
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token saved !')
    } catch (err) {
        printError(err.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.c) {

        
    }
    if (args.t) {
        return saveToken(args.t)
    }

    getWeather('kyiv')
}

initCLI()