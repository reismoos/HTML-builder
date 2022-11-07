const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'secret-folder');

fs.promises.readdir(folder, {withFileTypes: true}).then(data => data.forEach(file => {
    if(file.isFile()){
        fs.stat(path.join(folder, file.name), (err, stats) => {
            console.log(`${file.name.split('.')[0]} - ${file.name.split('.')[1]} - ${stats.size} bytes`)
        })
    }
}))