function EmployeeInfo(e_name,e_salary)
{
    console.log("Welcome "+ e_name + ", Your monthly Salary is :: "+ e_salary)
}

console.log("----My First Programe----")

var u_name = "John"
var u_salary = 45050

EmployeeInfo(u_name,u_salary)

//second exercise
console.log("------------------------------")

const emp_skills = (skills) =>  {
    console.log("Expertise in :: " + skills)
}

emp_skills("java")

//third exercise
console.log("------------------------------")

const student = require('./student_info')
const person = require('./person')

console.log("Name :: " + student.getName())
console.log("Location :: " + student.getLocation())
console.log("DOB :: " + student.getDOB)


console.log("Grade :: " + student.Studentgrade(55))

person1 = new person("Jim", "USA", "anemail@gmail.com")
console.log("using Person Module :: ", person1.getPersonInfo())


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