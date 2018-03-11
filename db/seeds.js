require('dotenv'). config ()
const mongoose = require ('mongoose')
const Creature =require ('./models/Creature')



mongoose.connect (process.env.MONGODB_URI)

const luke = new Creature({
    name: 'Luke',
    description: 'Jedi'

})

Creature.remove({})
.then(()=> luke.save())
.then(()=> console.log('Succesful Save'))
.then (()=> mongoose.connection.close())

