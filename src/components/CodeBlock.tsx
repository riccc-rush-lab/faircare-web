import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

interface CodeBlockProps {
  code: string;
  lang: string;
  title?: string;
}

export default async function CodeBlock({ code, lang, title }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  });

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-[var(--color-code-bg)] shadow-2xl shadow-black/20">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
        <div className="terminal-dot bg-[#FF5F57]" />
        <div className="terminal-dot bg-[#FFBD2E]" />
        <div className="terminal-dot bg-[#28C840]" />
        {title && (
          <span className="ml-2 text-xs font-mono text-zinc-500">
            {title}
          </span>
        )}
      </div>

      <CopyButton text={code} />
      <div
        className="overflow-x-auto text-sm [&_pre]:p-5 [&_pre]:!bg-transparent [&_code]:!bg-transparent leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
