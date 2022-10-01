import axios from "axios";
const base_url = process.env.REACT_APP_BASE;

axios.defaults.headers.post['Content-Type'] = 'application/json';

/* query ---> api url to query with
   no_token ---> acts as a flag for no need to use token */
export const getData = async (query, no_token) => {
  try {
    let data = await axios.get(`${base_url}${query}`);
    return data;
  } catch (error) {
    console.log("err", error);
  }
};

