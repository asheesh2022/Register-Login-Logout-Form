const express = require("express");
const User = require("../models/user")

const bcrypt = require('bcryptjs');
const router = express.Router();


router.post("/register", async (req, res) => {
    const { email, password, name } = req.body
    // const { email, password} = req.body

    let user = await User.findOne({ email })
    if (user) {
        return res.status(400).send("user with this email already exist")
    }
    try {
        user = new User(req.body)
        user.password = await bcrypt.hash(password, 8)

        await user.save()
        res.status(201).send()
    }
    catch (e) {

        res.status(500).send("something went wrong")
    }
})


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('User with provided email does not exist.');
        }

        const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).send('Invalid credentials.');
        }
        // const { password, ...rest } = user.toObject();

        // return res.send(rest);
        return res.status(200).send({ message : "logined successfully", user : user})
    } catch (error) {
        return res.status(500).send('Something went wrong. Try again later.');
    }
});
module.exports = router


