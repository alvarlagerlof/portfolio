import { Code } from "bright";

export function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    // @ts-ignore
    <Code lang={language} theme="dracula-soft">
      {code.trim()}
    </Code>
  );
}
