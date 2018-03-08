require('dotenv'). config ()
const mongoose = require ('mongoose')
const {Creature} =require ('../models/Creature')



mongoose.connect (process.env.MONGODB_URI)
const db = mongoose.connection

const saved = async () => {
    await Creature.remove()
    const luke = new Creature ({ name: 'Luke'})
}
