module.exports = {
  '*.{js,jsx}': ['pretty-quick --staged', 'git add', 'jest --bail --passWithNoTests —-findRelatedTests'],
};
