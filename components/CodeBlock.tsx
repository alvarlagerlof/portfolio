import { Code } from "bright";

export function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <Code lang={language} theme="github-dark" className="!rounded-2xl">
      {code.trim()}
    </Code>
  );
}
