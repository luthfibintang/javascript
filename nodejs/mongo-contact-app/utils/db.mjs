import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/contact-app'), {
    useNewUrlParser: true,
    useUnifieldTopology: true,
    useCreateIndex: true
};

// contoh membuat data
// const kontak1 = new Contact({
//     name: "Ichsan Ilyasa",
//     noHP: "08664223222",
//     email: "ichsanilyas@gmail.com"
// });

// kontak1.save().then((contact) => console.log(contact));