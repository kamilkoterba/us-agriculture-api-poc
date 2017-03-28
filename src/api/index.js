import axios from "axios";
import { encode } from "querystring";

const URL = "https://api.nal.usda.gov/ndb/search";
const defaultParams = {
    api_key: "DEMO_KEY",
    format: "json",
};

export default {
    get: (q) => axios.get(prepareUrl(q))
};

function prepareUrl(q) {
    const params = q ? { ...defaultParams, q } : defaultParams;

    return `${URL}/?${encode(params)}`;
}
