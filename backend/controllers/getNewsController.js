const { spawn, spawnSync } = require("child_process");
const fs = require("fs");


getGlobalNews = async (req, res, next) => {




    // console.log("Inside local");
    let datatosend;
    const python = await spawn('python', ['./scripts/bbci.py']);
    python.stdout.on('data', (data) => {
        console.log('Pipe data from python script ...');
        console.log(`data for stdout + ${data}`);
    })

    python.stderr.on('data', (data) => {
        console.log(` data for stderr + ${data}`);
    })


    fs.readFile('./newsJSON/bcci.json', 'utf-8', (err, data) => {
        datatosend = JSON.parse(data);
        res.status(200).json({ success: true, data: datatosend });
    })


}

getLocalNews = async (req, res, next) => {
    let cambridgeshiredata, bccidata;

    console.log("getting local news");

    const python = await spawn('python', ['./scripts/cambridge-news.py']);
    // setInterval(() => {

    // }, 3000)
    // console.log(python);
    python.stdout.on('data', (data) => {
        console.log('Piping cambridge news ...');
        console.log(`data for stdout cbn ${data}`);
    })

    python.stderr.on('data', (data) => {
        console.log(` data for stderr + ${data}`);
    })

    fs.readFile('./newsJSON/cambridge-news.json', 'utf-8', (err, data) => {
        cambridgeshiredata = JSON.parse(data);
        res.status(200).json({ success: true, data: cambridgeshiredata });
    })

    // const python1 = await spawn('python', ['./scripts/bbci.py']);
    // python1.stdout.on('data', (data) => {
    //     console.log('Piping bbci ');
    //     console.log(`data for stdout bbc ${data}`);
    // })

    // python1.stderr.on('data', (data) => {
    //     console.log(` data for stderr + ${data}`);
    // })


    // fs.readFile('./newsJSON/bcci.json', 'utf-8', (err, data) => {
    //     bccidata = JSON.parse(data);
    // })


    // res.status(200).json({ success: false, cambridgeshiredata: cambridgeshiredata });


}





module.exports = { getGlobalNews, getLocalNews }