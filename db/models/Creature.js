const mongoose = require ('mongoose')
const CreatureSchema = require ('../schemas/CreatureSchema')

const Creature = mongoose.model ('Creature', CreatureSchema)



module.exports = Creature
