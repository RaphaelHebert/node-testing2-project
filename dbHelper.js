const knex = require('knex')
const db = require('./data/dbConfig')

function insert(user){
    return db('users').insert(user)
}

function findById(id){
    return db('users').where({user_id: id}).first()
}

function deleteUser(id){
    return db('users').where({user_id: id}).del()
}

module.exports = {
    insert,
    findById,
    deleteUser
}