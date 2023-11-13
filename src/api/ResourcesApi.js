import axios from "axios";

const ResourcesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/resources'
})
export default ResourcesApi;