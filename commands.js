#!/bin/usr/env 'node'
const program = require('commander')
const { prompt }  = require('inquirer')
const { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers } = require('./index')

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Introduce el nombre del cliente'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Introduce el apellido del cliente'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Introduce el teléfono del cliente'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Introduce el email del cliente'
    }
]


program
    .version('1.0.0')
    .description('Client Management System')

// == Comando add sin usar inquirer
// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({firstname, lastname, phone, email})
//     })

//ADD Command
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers))
    })

//FIND command    
program
    .command('find <name>') 
    .alias('f')
    .description('Find a customer')
    .action((name) => {
        findCustomer(name)
    })    

//Update command    
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action( _id => {
        prompt(questions).then(answers => updateCustomer(_id, answers))
    })    

//Delete command    
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => {
        removeCustomer(_id)
    })   

//List command    
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action( () => {
        listCustomers()
    })     

program.parse(process.argv)    
