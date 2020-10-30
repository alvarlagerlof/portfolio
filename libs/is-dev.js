import process from "process";
import branchName from "current-git-branch";

export default function isDev() {
  return process.env.VERCEL_GITHUB_COMMIT_REF != "main" || branchName != "main";
}
