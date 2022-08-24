const fs = require('fs'),
fibJS = require('./fib')

// Instantiate the module
var mod = new WebAssembly.Module(fs.readFileSync(`${__dirname}/build/fib.wasm`))
var as = new WebAssembly.Instance(mod, {env: {abort: () => {}}}).exports

console.time('fibJS')
console.log(fibJS(25))
console.timeEnd('fibJS')
console.time('fibAS')
console.log(as.fibAS(25))
console.timeEnd('fibAS')