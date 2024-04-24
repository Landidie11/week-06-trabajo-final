const User = require("../models/User")

const userCreate = async () => {
    const user = {
        firstNmae: 'Landie',
        lastName: 'Thimot',
        email: 'landiefriend@gmail.com',
        password: 'landie1234',
        phone: '1157620532'
    }
    await User.create(user)
}

module.exports = userCreate