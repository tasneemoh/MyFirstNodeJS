const {readFile, writeFile} = require('fs').promises;

const start = async() => {
    try
    {
        const first = await readFile('./content/firstFile.txt')
        const second = await readFile('./content/secondFile.txt')

        await writeFile('./content/result-mind-Tasneem.txt',
            `THIS IS THE RESULT ${first} ${second}`,
            {flag : 'a'}
        )
        console.log(first, second);
    }
    catch(ex)
    {
        console.log(ex);
    }
}

start()