class student {
    constructor (name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo() {
        return ( this.name +" "
            + this.age + " " + this.email)
    }
}

module.exports = student;