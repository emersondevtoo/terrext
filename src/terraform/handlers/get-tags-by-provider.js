const hasTags = require("@terraform/handlers/has-key")("tags");

const getTags = providerObj => {
  if (hasTags(providerObj)) {
    let listTagsByProvider = Object.keys(providerObj.tags);
    return listTagsByProvider;
  }
  return [];
};

module.exports = getTags;
