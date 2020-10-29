const currentGitBranchName = require("current-git-branch");

module.exports = {
  env: {
    GIT_BRANCH: currentGitBranchName(),
  },
};
