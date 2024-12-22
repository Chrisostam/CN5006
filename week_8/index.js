mongoose = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/w8';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true}); const db = mongoose.connection;

db.on('error', function(err)

{console.log("**ERROR OCCURED DURING CONNECTION" + err)} 
);

db.once('connected', function() {console.log(`Connected to ${MONGO_URI}`);});

const personScheme = new mongoose.Schema({ name : {type : String, required: true}, age : Number, gender: String, salary: Number});

const person_Doc = mongoose.model('modelname', personScheme, 'personCollection');

const doc1 = new person_Doc({ name: 'Yousuf', age: 44 , gender: "Male", salary:3456});


doc1 
    .save()
    .then((doc1) => {
        console.log("*New Article has been added into the database", doc1);
    })
    .catch((err) => {
        console.error(err);
    });

manyperson = [{ name: 'Simon', age:42, gender : "Male", salary:3456}
    , { name: 'Neesha', age:23, gender : "Female", salary:1000}
    , { name: 'Mary', age:27, gender : "Female", salary:5402}
    ,{ name: 'Mike', age:40, gender : "Male", salary:4519}
]

person_Doc.insertMany(manyperson)
    .then(function(){console.log("DATA INSERTED")})
    .catch(function(error){console.log(error)});


person_Doc.find({})
    .sort({salary: 1})
    .select('name salary age')
    .limit(10)
    .exec()
    .then(docs => {
        console.log("showing multiple documents")
        docs.forEach(function(Doc){ console.log(Doc.age, Doc.name);})
    })
    .catch(err => { console.error(err)})

var givenage = 15
person_Doc
    .find({gender: "Female", age: {$gte:givenage}})
    .sort({salary: 1})
    .select('name salary age' )
    .limit(10)
    .exec()
    .then(docs => {
        console.log("Showing age greater than ", givenage)
        docs.forEach(function(Doc){
            console.log(Doc.age, Doc.name);})
    })
    .catch(err => {console.error(err)})


person_Doc
    .countDocuments()
    .exec()
    .then(count => {
        console.log("Total documents ::", count)})
    .catch(err => {
        console.error(err)
    })

person_Doc.deleteMany({age: {$gte:25}})
    .exec()
    .then(docs => {console.log("Deleted documents ::", docs);})
    .catch(function(error){console.log(error)})


person_Doc.updateMany({gender: "Female"}, {salary: 5555})
    .exec()
    .then(docs => {
        console.log("update")
        console.log(docs);
    }).catch(function(error){
        console.log(error);
    })

