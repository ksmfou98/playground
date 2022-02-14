import axios from "axios";

// export const getTestList = async () => {
//   const res = await axios.get("https://api2.ncnc.app/con-items/soon");
//   return res.data;
// };

const accessToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMSIsImlhdCI6MTY0NDgxNzkxMywiZXhwIjoxNjQ0OTA0MzEzfQ.IP-rMaM8b093HyVD7zzOrZT1BmctySx2DYVvgl5G1vr105Q5iZOduHtnN1vYsEX8jT0FuCGW4rPkOBv5kj8VCg";

const refreshToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMSIsImlhdCI6MTY0NDgxNzkxMywiZXhwIjoxNjQ3NDA5OTEzfQ.-0HXBMjfB4fJh_2vdlPL8-idgfw7bh-hkslykEi0i_9a-i-ngk6n2ue4hFGN6ig5WUVZ7B5N53NcU44mxcyR1A";

export const getTestList = async () => {
  const res = await axios.get(
    "https://dotoriham.duckdns.org/api/v1/page/main?page=0&size=9&sort=saveTime,desc&remind=false",
    {
      headers: {
        accessToken: `Bearer ${accessToken}`,
        refreshToken: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};
