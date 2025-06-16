import chalk from 'chalk'

const isProduction = process.env.BUILD_MODE === 'production'
const message = isProduction ? "Production build" : "Development build"
const color = isProduction ? "blue" :"red"

console.log(`${chalk[color](message)}: COMPLETE!`)
