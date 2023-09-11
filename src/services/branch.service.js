import axios from "axios";

const API_URL = "https://localhost:7203/api/Branch";

const getAll = () => {
    return axios.get(API_URL);
};

const getOne = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const addBranch = (data) => {
    return axios.post(API_URL, data);
};

const updateBranch = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

const deleteBranch = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

const UserService = {
    getAll,
    getOne,
    addBranch,
    updateBranch,
    deleteBranch
};

export default UserService;