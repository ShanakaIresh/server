const userModel = require('../model/userModel.js')
const jwt = require('jsonwebtoken')



const signUp = async (req, res) => {

    const createToken = (email) => {
        return jwt.sign({ email }, "webDevSecret", {
            expiresIn: '1d'
        })
    }

    const body = req.body
    const signClz = new userModel.UserIn(body.userName, body.email, body.password)
    signClz.SignUp().then((data) => {
        const token = createToken(data)
        res.json(token)
    }).catch((err) => {
        res.json(err.message)
    })
}

const signIn = async (req, res) => {
    const { email, password } = req.body
    const signClz = new userModel.UserIn('', email, password)

    signClz.signIn().then((match) => {
        const createToken = (email) => {
            return jwt.sign({ email }, "webDevSecret", {
                expiresIn: '1d'
            })
        }
        if (!match) {
            res.status(400).json({ Error: "UserName or password is incorrect" })
        } else {
            const token = createToken(email)
            res.json({
                email: email,
                token: token
            })
        }
    })

}






module.exports = { signUp, signIn }