import { ObjectID } from 'bson';
import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017';
const dbName = 'test'

const client = new MongoClient(uri)

client.connect((error, client) => {
    if(error){
        return console.log('Failed to connect!')
    }

    // Choosing Database
    const db = client.db(dbName);

    // Create 1 Collection to data
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Ichsan Ilyasa',
    //         email: 'isanilyasa8@gmail.com'
    //     }, (error, result) => {
    //         if (error) {
    //             console.log('Failed to insert data!')
    //         }

    //         console.log(result);
    //     }
    // )

    // Create many Collection to data
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: "Didi",
    //         email: "didi@gmail.com"
    //     },
    //     {
    //         nama: "deden",
    //         email: "deden@gmail.com"
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Failed to insert data')
    //     }

    //     console.log(result);
    // })

    // Menampilkan semua data yang ada di collection
    // const data = db.collection('mahasiswa').find().toArray((error, result) => {
    //     console.log(result);
    // });

    // data;

    // Menampilkan data berdasarkan Kriteria
    //  const data = db.collection('mahasiswa').find({ _id: ObjectID('625c8d68890883b6b72f5689')}).toArray((error, result) => {
    //     console.log(result);
    // });
    // data;

    // Mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne({
    //     _id: ObjectID('625c8d68890883b6b72f5689'),
    // },
    // {
    //     $set: {
    //         email: 'shaquileee@yahoo.com'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // Mengubah banyak data
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Didi'
    //     },
    //     {
    //         $set: {
    //             nama: 'Didi & Deden'
    //         }
    //     }
    // )


    // menghapus 1 data
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID('625c8d68890883b6b72f5689')
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // })

    // Menghapus banyak data
    db.collection('mahasiswa').deleteMany(
        {
            nama: "Didi & Deden"
        }
    ).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })

});

