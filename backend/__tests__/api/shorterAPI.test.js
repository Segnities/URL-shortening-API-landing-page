const axios = require("axios");
require("dotenv").config();
describe("Shorter API platform ",  ()=> {
    const url = "https://www.bing.com/search?pglt=675&q=integrational+test&cvid=a71a290a407e4301907e279ecf6cee10&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIECAEQADIECAIQANIBCDIxMTlqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531";
    let response;

    beforeEach(async ()=> {
        response = await axios.post("https://url-shortener23.p.rapidapi.com/shorten", {
            url: url,
            alias: "",
        }, {
            headers: {
                "Content-Type": "application/json",
                "X-RapidAPI-Key": process.env.SHORT_URL_API_KEY,
                "X-RapidAPI-Host": process.env.SHORT_URL_HOST
            }
        })
    });

    it('should return status 200', async () => {
        const statusCode = await response.status;
        expect(statusCode).toBe(200);
    });
   it('should return a 401 Unauthorized for missing or invalid API key', async ()=> {
       try {
           response = await axios.post("https://url-shortener23.p.rapidapi.com/shorten", {
               url: url,
               alias: "",
           }, {
               headers: {
                   "Content-Type": "application/json",
               }
           });
           const statusCode = response.status;
           expect(statusCode).toBe(401);
       } catch (e) {
           expect(e.response.status).toBe(401);
       }
   });
});