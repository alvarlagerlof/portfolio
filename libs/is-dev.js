import process from "process";
import branchName from "current-git-branch";

export default function isDev() {
  console.log("process.env.IS_DEV", process.env.IS_DEV);
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  console.log("branchName()", branchName());

  return (
    process.env.IS_DEV == true || (process.env.NODE_ENV == "development" && branchName() != "main")
  );
}
