import express from "express";
import { getRepos } from "./helper.js";

const app = express();
app.get("/", async (req, res) => {
  try {
    // get the data from the URL.
    const data = await getRepos();
    // store the result as object
    let result = {};
    for (const item of data["items"]) {
      if (!result[item.language]) {
        result[item.language] = {
          "Number of repos using this language": 0,
          "The list of repos using the language": [],
        };
      } else {
        result[item.language]["Number of repos using this language"] += 1;
        result[item.language]["The list of repos using the language"].push(
          item
        );
      }
    }
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
