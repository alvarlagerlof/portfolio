import process from "process";
import branchName from "current-git-branch";

export default function isDev() {
  return (
    process.env.IS_DEV == "true" ||
    (process.env.NODE_ENV == "development" && branchName() != "main")
  );
}
