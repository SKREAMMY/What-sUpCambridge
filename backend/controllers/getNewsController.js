const { spawn } = require("child_process");
const fs = require("fs");
const cronjob = require('node-cron')

// const sys = require('sys')

const LocalBBC = require("../models/localNewsBBCModel");
const GlobalBBC = require("../models/globalNewsBBCModel");
const GlobalWorldBBC = require("../models/globalWorld");

var response = []

cronjob.schedule(" */30 * * * *", () => {



    async function getLocalBBCNewsFunction() {


        console.log("getting bcci news ");
        const pythonscript = await spawn('python', ['./scripts/bbci.py']);

        pythonscript.stdout.on("data", (data) => {
            console.log('Piping bcci news ...');
            console.log(`data for stdout bcc ${data}`);

            async function readfile() {
                global.bccidata = await fs.promises.readFile('./newsJSON/bcci.json', { encoding: 'utf-8' })
                console.log("filecontent ", global.bccidata);
                //  = filecontent;
            }
            // console.log("file read for bcci ", global.bccidata);


            readfile();





        })

        pythonscript.stderr.on('data', (data) => {
            console.log(` data for stderr + ${data}`);
        })

        pythonscript.on('close', () => {
            console.log("closed bcci");
        })

        // console.log({ bccidata });

    }

    async function getLocalNewsfunction() {

        await LocalBBC.collection.drop();

        const python = await spawn('python', ['./scripts/cambridge-news.py']);

        // sys.stdout.flush()
        python.stdout.on('data', (data) => {
            let data_received = JSON.parse(`${data}`)
            console.log(typeof (data_received));
            console.log(data_received["data"].length);
            data_received["data"].map(async (d, index) => {

                await LocalBBC.create(d).then((response) => {
                    console.log("created");
                    console.log("added ", index, " ", d);

                }).catch((err) => {
                    console.log("unable to add the data");
                });

            })



        })



        python.stderr.on('data', (data) => {
            console.log(` data for stderr + ${data}`);
        })

        python.on('close', () => {
            console.log("closed cbn");
        })


    }


    getLocalNewsfunction();
    // getLocalBBCNewsFunction();


})

cronjob.schedule(" */5 * * * *", () => {

    async function getTopStoriesBBC() {

        await GlobalBBC.collection.drop();
        const python = await spawn('python', ['./scripts/convertBBCXmltoJson.py', "https://feeds.bbci.co.uk/news/rss.xml"]);
        python.stdout.on('data', (data) => {
            console.log('Pipe data from python script ...');
            // console.log(`data for stdout + ${data}`);
            data_received = JSON.parse(`${data}`);
            data_received["data"].map(async (d, index) => {

                await GlobalBBC.create(d).then((response) => {
                    console.log("created top stories");
                    // console.log("added ", index, " ", d);

                }).catch((err) => {
                    console.log("unable to add the data");
                });

            })

        })

        python.stderr.on('data', (data) => {
            console.log(` data for stderr + ${data}`);
        })
    }

    getTopStoriesBBC();

})

cronjob.schedule(" */5 * * * *", () => {

    async function getGlobalWorldBBC() {

        await GlobalWorldBBC.collection.drop();
        const python = await spawn('python', ['./scripts/convertBBCXmltoJson.py', "https://feeds.bbci.co.uk/news/world/rss.xml"]);
        python.stdout.on('data', (data) => {
            console.log('Pipe data from python script ...');
            // console.log(`data for stdout + ${data}`);
            data_received = JSON.parse(`${data}`);
            data_received["data"].map(async (d, index) => {

                await GlobalBBC.create(d).then((response) => {
                    console.log("created top stories");
                    // console.log("added ", index, " ", d);

                }).catch((err) => {
                    console.log("unable to add the data");
                });

            })

        })

        python.stderr.on('data', (data) => {
            console.log(` data for stderr + ${data}`);
        })
    }

    getGlobalWorldBBC();

})


getGlobalNews = async (req, res, next) => {




    // console.log("Inside global news");
    let urlForRssXml, data_received;
    let resultdata;
    console.log(req.params["newsType"]);
    switch (req.params["newsType"]) {
        case "topStories":
            urlForRssXml = "https://feeds.bbci.co.uk/news/rss.xml";
            resultdata = await GlobalBBC.find({});
            console.log(urlForRssXml);

            break;

        default:
            console.log("no such route");
            break;


    }

    res.status(200).json({ success: true, data: resultdata })






    // fs.readFile('./newsJSON/bcci.json', 'utf-8', (err, data) => {
    //     datatosend = JSON.parse(data);
    //     res.status(200).json({ success: true, data: datatosend });
    // })



}

getLocalNews = async (req, res, next) => {

    // let result
    // try {
    //     result = LocalBBC.find({});

    // } catch (err) {
    //     console.log(err);
    // }

    const resultdata = await LocalBBC.find({});
    // console.log({ resultdata });


    res.status(200).json({ success: true, data: resultdata });


}





module.exports = { getGlobalNews, getLocalNews }