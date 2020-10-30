import process from "process";
import branchName from "current-git-branch";

export default function isDev() {
  console.log("ref", process.env.IS_DEV);
  console.log("brancName()", branchName());

  return (
    (process.env.IS_DEV != undefined && process.env.IS_DEV != "main") ||
    (branchName() != false && branchName() != "main")
  );
}
