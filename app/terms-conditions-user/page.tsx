import { readFileSync } from "fs";
import Markdown from "markdown-to-jsx";
export default function Home() {
  const tos = readFileSync(
    process.cwd() + "/app/terms-conditions-user/ToS.md",
    "utf-8"
  );
  return (
    <div className="bg-white">
      <article className="overflow-x-hidden prose lg:prose-xl max-w-[50%] mx-auto px-8">
        <Markdown>{tos}</Markdown>
      </article>
    </div>
  );
}
