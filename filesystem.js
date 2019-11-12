// NODE CORE MODULE
const fs = require('fs');

// ASYNC READING FILE - NON BLOCKING (OTHER CODE CAN KEEP RUNNING WHILE
// THIS BLOCK OF CODE IS RUNNING)
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   console.log(data);
// });

// console.log('test');

// CREATE A FILE
// fs.writeFile('exampleFile.txt', 'More stuff to read', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File successfully created');
//     fs.readFile('exampleFile.txt', 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

// RENAME A FILE
// fs.rename('example.txt', 'example2.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File rename was successful');
//   }
// });

// APPEND DATA TO A FILE
// fs.appendFile('example2.txt', '...some data being appended', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully appended data to file');
//   }
// });

// DELETE DATA FROM FILE
// fs.unlink('example2.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully deleted file');
//   }
// });

//MAKE A DIRECTORY OR FOLDER
// fs.mkdir('tutorial', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully created folder');
//   }
// });

// DELETE FOLDER
// fs.rmdir('tutorial', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted the folder');
//   }
// });

// CREATE DIRECTORY AND FILE
// fs.mkdir('tutorial', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully created folder');
//     fs.writeFile(__dirname + '/tutorial/example.txt', '123', err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('successfully created file');
//       }
//     });
//   }
// });

// DELETE FILE AND DIRECTORY
fs.unlink(__dirname + '/tutorial/example.txt', err => {
  if (err) {
    console.log(err);
  } else {
    fs.rmdir('tutorial', err => {
      if (err) {
        console.log(err);
      } else {
        console.log('successfully deleted folder');
      }
    });
  }
});

// DELETE MULTIPLE FILES IN A FOLDER
// fs.readdir('example', (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     files.forEach(file => {
//       fs.unlink(__dirname + '/example/' + file, err => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('successfully deleted file');
//         }
//       });
//     });
//     console.log(files);
//   }
// });
