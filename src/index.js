import Axios from "axios";

const aws4 = require("aws4");
const URL = require("url");

const get = async (apiUrl) => {
    let url = URL.parse(apiUrl, {});

    let opts = {
        host: url.hostname,
        path: url.pathname,
    };

    aws4.sign(opts);

    return await Axios.get(url, { headers: opts.headers })
}

export default get;