const isDirectory = require("@fs-access/handlers/is-directory");

const readSubDirectories = (relativePath, itemsInADir) => {
  const onlyDir = itemsInADir.filter(item => isDirectory(relativePath, item));
  return onlyDir;
};

module.exports = readSubDirectories;
