const mongoose = require("mongoose")

const getVueSchema = mongoose.Schema(

    {
        filmTitle: String,
        synopsisShort: String,
        director: String,
        filmUrl: String,
        duration: String,
        posterImageSrc: String,
        sessions: Object,

        // {
        //     "_id": "66b24219229b48f8af145843",
        //     "filmTitle": "It Ends with Us",
        //     "synopsisShort": "Adapted from the Colleen Hoover novel, Lily overcomes a traumatic childhood to embark on a new life. A chance meeting with a neurosurgeon sparks a connection but Lily begins to see sides of him that remind her of her parents' relationship.",
        //     "director": "Justin Baldoni",
        //     "filmUrl": "https://www.myvue.com/film/it-ends-with-us",
        //     "duration": "130",
        //     "posterImageSrc": "https://www.myvue.com/-/media/vuecinemas/film-and-events/june-2024/it-ends-with-us---official-poster---6072x9000---in-cinemas-august-9.jpg?rev=c1a705bb88da4a04960abea2be18ced4",
        //     "sessions": {
        //       "09 Aug": [
        //         {
        //           "startTime": "1:10 PM",
        //           "endTime": "3:42 PM",
        //           "Tickets available": false,
        //           "bookingUrl": "www.vue.com/book-tickets/summary/10016/HO00019089/283753",
        //           "screenName": "Screen 1",
        //           "dateofShow": "2024-08-09T13:10:00+01:00"
        //         },
        //         {

    }
)

const VueModel = mongoose.model("VueModel", getVueSchema);

module.exports = VueModel;