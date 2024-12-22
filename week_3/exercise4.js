//fourth exercise

console.log("------------------------------")

os=require("os")
const util=require('util')
console.log("Temporary directory :: "+ os.tmpdir() )
console.log("Hostname :: "+ os.hostname())
console.log("OS :: " + os.platform() +"release:"+ os.release())
console.log("Uptime :: "+ (os.uptime())/3600 +" hours")
console.log("UserInfo :: " + util.inspect(os.userInfo()))
console.log("Memory :: "+ os.totalmem()/1000000000 + "Giga byte")
console.log("Free Memory :: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU :: "+ util.inspect(os.cpus()))
console.log("Network :: "+ util.inspect(os.networkInterfaces()))

console.log("*****Program Terminated*****")