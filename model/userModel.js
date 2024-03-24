const db = require('../config/userDb.js')
const bcrypt = require('bcrypt')
const validator = require('validator')

class UserIn {
    constructor(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    }

    async SignUp() {
        if (!this.email || !this.password) { throw Error('Email and password are required') }
        const query = `SELECT email FROM user WHERE email = "${this.email}"`
        const filtData = await db.execute(query)
        const resEmail = filtData[0]
        console.log(resEmail)
        if (resEmail.length === 1) { throw Error('Email is already in used') }
        if (!validator.isEmail(this.email)) { throw Error('Email is not valid') }
        if (!validator.isStrongPassword(this.password)) { throw Error('Strong Password is required') }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, salt)


        const query2 = `INSERT INTO user (userName,email,password) VALUES ("${this.userName}","${this.email}","${hash}")`
        const EntData = await db.execute(query2)


        return this.email
    }

    async signIn() {
        if (!this.email || !this.password) { throw Error('Email and Passwords are required') }
        if (!validator.isEmail(this.email)) { throw Error('Email is not valid') }
        const query = `SELECT * FROM user WHERE email = "${this.email}"`
        const filtData = await db.execute(query)
        console.log(filtData)
        if (filtData[0].length === 0) { throw Error('Email is not registered') }
        console.log(this.password)
        console.log(filtData[0][0].password)

        const match = await bcrypt.compare(this.password, filtData[0][0].password)

        return match

    }
}

module.exports = { UserIn }