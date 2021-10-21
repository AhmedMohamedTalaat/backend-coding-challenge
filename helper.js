import moment from "moment";
import axios from "axios";

function dateFormat() {
  return moment(new Date()).format("YYYY-MM-DD");
}

async function getRepos() {
  try {
    const { data } = await axios({
      method: "get",
      url: `https://api.github.com/search/repositories?q=created:${dateFormat()}&sort=stars&order=desc`,
      headers: {
        "content-type": "application/json",
      },
      responseType: "json",
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export { dateFormat, getRepos };
