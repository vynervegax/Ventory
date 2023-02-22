const mongoose = require('mongoose')

try {
    mongoose.connect('mongodb+srv://', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    });
} catch (e) {
    console.log(e)
}