import express from "express";
import axios from "axios";

const app = express();

app.set('json spaces', 2);
const port = 3070;
app.get('/', (req, res) => {});

app.get('/1up', async (req, res) => {
    const url = "https://api.1up.health//user-management/v1/user"
    let response = await axios({
        method: 'get',
        url: url
    })
    console.log(response)
});

// app.get('/doodle', async (req, res) => {
//     const url = "http://api.nicknguyencodes.com/doodles/random";
//     let response = await axios({
//         method: "get",
//         url: url
//     })
//     let data = response.data;
//     data.new_field = "new field"
//     res.json(data);
// });

app.listen(port, () => {
    console.log("Server is listening to port ", port);
});