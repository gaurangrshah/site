const querystring = require("querystring");
// @link: https://gist.github.com/markmichon/a4abeae93009232bc5a6cbe463fdbbd7

class DevTo {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://dev.to/api";
  }
  request(endpoint = "", options = {}) {
    let url = this.basePath + endpoint;

    let headers = {
      api_key: this.api_key,
      "Content-type": "application/json",
    };

    let config = {
      ...options,
      ...headers,
    };

    return fetch(url, config).then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r);
    });
  }
  getArticles(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/articles" + qs;
    let config = {
      method: "GET",
    };
    return this.request(url, config);
  }

  // getArticleById(id) {
  //   let url = "/articles/" + id;
  //   return this.request(url, {});
  // }

  getArticleBySlug(slug) {
    let url = "/articles" + "/gsdev/" + slug;
    return this.request(url, {});
  }

  createArticle(body) {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };
    return this.request("/articles", options);
    // Optional: add your own .catch to process/deliver errors or fallbacks specific to this resource
  }
}
export let devApi = new DevTo({
  api_key: process.env.DEVTO_API_KEY,
});

// api.getArticles({ username: "ben", page: 1 }).then((data) => console.log(data));
// api.getArticleById({ id: "691264" }).then((data) => console.log(data));
