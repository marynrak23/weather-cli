import chalk from 'chalk'

const printError = (message) => {
    console.log(chalk.bgRed(' ERROR ') + '\n' + '-> ' + message)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + '\n' + '-> ' + message)
} 

const printHelp = () => {
    console.log(
        `${chalk.bgCyan('HELP')}
        -c [CITY]    --- Setup city
        -h           --- For help print
        -t [TOKEN_API_KEY] --- Save token 
        `
    )
}

export { printError, printSuccess, printHelp }