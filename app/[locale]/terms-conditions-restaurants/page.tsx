import { readFileSync } from "fs";
import Markdown from "markdown-to-jsx";
export default function Home() {
  const tos = readFileSync(
    process.cwd() + "/app/[locale]/terms-conditions-restaurants/ToS.md",
    "utf-8"
  );
  return (
    <div>
      <article className="text-white prose-headings:text-white prose-strong:text-white prose-li:text-white content-container overflow-x-hidden prose lg:prose-xl mx-auto px-8">
        <Markdown>{tos}</Markdown>
      </article>
    </div>
  );
}
