import axios from "axios";

const base_url = process.env.REACT_APP_BASE;

axios.defaults.headers.post['Content-Type'] = 'application/json';

const alert = (messages) => {
  // alertPop("error", messages ? messages : "Something went wrong");
};

/* query ---> api url to query with
   no_token ---> acts as a flag for no need to use token */
export const getData = async (query, no_token) => {
  try {
    let data = await axios.get(`${base_url}${query}`);
    return data;
  } catch (error) {
    // checkRes(error?.response?.status);
    // error.response?.data?.messages &&
    // typeof error.response?.data?.messages === "object"
    // ? error.response.data.messages.map((err) => {
    //     alertPop(error_status, err);
    //     })
    // : errorHandle(error);
    // return false;
  }
};

