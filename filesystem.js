const fs = require('fs');

// CREATE A FILE
// fs.writeFile('example.txt', 'This is an example', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File successfully created');
//     fs.readFile('example.txt', 'utf8', (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
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
// fs.unlink(__dirname + '/tutorial/example.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rmdir('tutorial', err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('successfully deleted folder');
//       }
//     });
//   }
// });

// DELETE MULTIPLE FILES IN A FOLDER
fs.readdir('example', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach(file => {
      fs.unlink(__dirname + '/example/' + file, err => {
        if (err) {
          console.log(err);
        } else {
          console.log('successfully deleted file');
        }
      });
    });
    console.log(files);
  }
});
