import chalk from 'chalk'

const printError = () => {
    console.log(chalk.bgRed(' ERROR ') + error())
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + error())
} 

const printHelp = () => {
    console.log(
        `${chalk.bgCyan('HELP')}
        -c [CITY]    --- Setup city
        -h           --- For help print
        -t [API_KEY] --- Save token 
        `
    )
}

export { printError, printSuccess, printHelp }