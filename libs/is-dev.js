import process from "process";
import branchName from "current-git-branch";

export default function isDev() {
  return (
    (process.env.IS_DEV != undefined && process.env.IS_DEV != "main") ||
    (branchName() != false && branchName() != "main")
  );
}
