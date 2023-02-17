import axios from "axios";
    const instance = axios.create({
        baseURL: 'https://api.coincap.io/v2/',
        timeout: 1000,
        // headers: {'Authorization':'Bearer 8a0536c5-f79f-409f-8e78-8afb3f9d93f6'}
      });
      export default instance 