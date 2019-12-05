const fs = require('fs').promises;
const mkdirp = (path) =>
    fs.mkdir(path, { recursive: true }, (err) => {
        if (err){
            console.log(err);
        }
        console.log('sucess!');
    });
const writeJSON = (path, object) => fs.writeFile (path, JSON.stringify(object), (err) => {
    if (err) throw err;
});
module.exports = { mkdirp, writeJSON };

// writeJSON('./testFolder/testFile', { message: 'hi' });

//     await writeJSON('', {
//         name: 'spot',
//         age: 5,
//         weight: '20 lbs'
//     });

//     await Promise.all([
//         writeJSON('./', {
//             name: 'rover',
//             age: 10,
//             weight: '40 lbs'
//         })
//         writeJSON('./', {
//             name: 'bingo',
//             age: 2,
//             weight: '100lbs'
//         })
//     ])

//     let dog = await readJSON('./');

//     console.log(dog.age);

//     const allDogs = await readDirectoryJSON('./');

//     console.log(allDogs.length);
    
//     console.log(allDogs[2].name);

//     await updateJSON('./my-cool-directory/child/more/my-dog', {
//         age: 6
//       });
    
//       dog = await readJSON('./my-cool-directory/child/more/my-dog');
    
//       //prints 6
//       console.log(dog.age);
    
//       // delete the dog file
//       await deleteFile('./my-cool-directory/child/more/my-dog')


// }