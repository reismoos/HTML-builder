const { stdout, stdin} = process;
const fs = require('fs');
const path = require('path');

process.on('SIGINT', () => process.exit());

fs.open(path.join(__dirname, 'file.txt'), 'w', (err) => {
    if(err) throw err;
    console.log('write somthing');
});

stdin.on('data', data => {
    const data2 = data.toString().trim();
    if(data2 == 'exit') {
        process.exit();
    }else {
        fs.appendFile(
            path.join(__dirname, 'file.txt'),
            data,
            err => {
                if (err) throw err;
                console.log('write somthing');
            }
        )
    }
    
})


process.on('exit', () => stdout.write('Have a nice day!'));
