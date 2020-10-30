import process from "process";
import branchName from "current-git-branch";

export default function isDev() {
  return (
    process.env.IS_DEV != "main" || (process.env.NODE_ENV != "production" && branchName() != "main")
  );
}
