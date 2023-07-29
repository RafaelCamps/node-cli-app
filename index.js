const mongoose = require('mongoose')

//Map global promise - get rid of warning
//mongoose.Promise = global.Promise;
//Connect to DB - After port put the name of your DB will be created automatically

const db = mongoose.connect('mongodb://127.0.0.1:27017/customercli');
//const db = mongoose;
// db.connect('mongodb://127.0.0.1:27017/customercli');


// Import model
const Customer = require('./models/customer')

//Add Customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        //db.disconnect() if we use lines 8 & 9
        mongoose.disconnect(); //IMPORTANT - always close the connection
    })
}

//Find Customer
const findCustomer = (name) => {
    //Make cse insensitive
    const search = new RegExp(name, 'i') 
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then(customer => {
            //Preparamos los datos para poder mostrarlos en una tabla
            const customers = customer.map(customer => ({    
                ...customer._doc,
                _id: customer._id.toString(), // Convertir el ObjectId a string
            }));
            console.table(customers);
            console.info(`${customer.length} matches`)
            mongoose.disconnect();
        })
}

//Update customer 
const updateCustomer = (_id, customer) => {
    Customer.findByIdAndUpdate( _id , customer)
        .then(customer => {
            console.info('Customer updated')
            mongoose.disconnect();
        })
}

//Remove customer
const removeCustomer = (_id) => {
    Customer.deleteOne({ _id })
        .then(customer => {
            console.info('Customer removed')
            mongoose.disconnect();
        })
}

//List all customers
const listCustomers = () => {
    Customer.find()
        .then(customers => {
            //Preparamos los datos para poder mostrarlos en una tabla
            const customerList = customers.map(customer => ({    
                ...customer._doc,
                _id: customer._id.toString(), // Convertir el ObjectId a string
            }));
            console.table(customerList);
            console.info(`${customers.length} in total`)
            mongoose.disconnect();
            //db.close()
        })
}

// Export all methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer, 
    listCustomers
} 
