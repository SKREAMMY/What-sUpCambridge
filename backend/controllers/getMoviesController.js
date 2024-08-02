
const nodecron = require("node-cron")
const VueModel = require("../models/getVueMovies")
const { spawn } = require("child_process")

nodecron.schedule("0 0 0 * * *", () => {

    async function getVueMovies() {
        await VueModel.collection.drop();

        const python = await spawn('python', ['./scripts/veu-cinemas.py']);

        // sys.stdout.flush()
        python.stdout.on('data', async (data) => {



            let data_received = await JSON.parse(`${data}`)
            console.log(typeof (data_received));
            console.log(data_received["data"].length);
            data_received["data"].map(async (d, index) => {

                await VueModel.create(d).then((response) => {
                    console.log("created movies");
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

    getVueMovies();

})

getMovies = async (req, res) => {


    let resultdata = await VueModel.find({});
    console.log({ resultdata });
    res.status(200).json({ success: true, data: resultdata });

}

module.exports = { getMovies }