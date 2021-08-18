const mongoose = require('mongoose');
const Test = require('./models/test');


mongoose.connect('mongodb://localhost:27017/testScore', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    });

// const test = new Test({
//     name: 'santraj yadav',
//     email: 'santrajyadav196@gmail.com',
//     testScore: {
//         round_first: 5,
//         round_second: 6,
//         round_third: 7
//     }
// })
// test.save()
//     .then(test => {
//         console.log(test)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedDetails = [
    {
        name: 'santraaj yadav',
        email: 'santraajyadav196@gmail.com',
        testScore: {
            round_first: 7,
            round_second: 6,
            round_third: 7
        }
    },
    {
        name: 'santraaz yadav',
        email: 'santraazyadav196@gmail.com',
        testScore: {
            round_first: 8,
            round_second: 7,
            round_third: 9
        }
    },
    {
        name: 'santraj',
        email: 'santraj196@gmail.com',
        testScore: {
            round_first: 8,
            round_second: 6,
            round_third: 7
        }
    },
    {
        name: 'santu yadav',
        email: 'santuyadav196@gmail.com',
        testScore: {
            round_first: 9,
            round_second: 6,
            round_third: 7
        }
    },
    {
        name: 'sant yadav',
        email: 'santyadav196@gmail.com',
        testScore: {
            round_first: 7,
            round_second: 8,
            round_third: 7
        }
    },
]

Test.insertMany(seedDetails)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

