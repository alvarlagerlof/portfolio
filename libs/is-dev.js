import process from "process";
import branchName from "current-git-branch";

export default function isDev() {
  console.log("ref", process.env.VERCEL_GITHUB_COMMIT_REF);
  console.log("brancName()", branchName());

  return (
    (process.env.VERCEL_GITHUB_COMMIT_REF != undefined &&
      process.env.VERCEL_GITHUB_COMMIT_REF != "main") ||
    (branchName() != false && branchName() != "main")
  );
}
