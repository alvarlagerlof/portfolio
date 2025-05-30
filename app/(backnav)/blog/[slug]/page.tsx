import { CustomBlockContent } from "components/CustomBlockContent";
import { WithDividers } from "components/WithDividers";
import { formatDate } from "lib/formatDate";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost } from "./getPost";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await getPost((await params).slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug);

  if (!post) notFound();

  return (
    <WithDividers direction="vertical">
      <header className="space-y-8">
        <h1 className="font-heading text-4xl md:text-7xl">{post.title}</h1>
        <h2 className="font-subheading text-xl md:text-2xl max-w-[60ch]">{post.description}</h2>
        <p className="font-medium">
          Published {post.date ? formatDate(post.date.published) : "No date"}
          {post.date && post.date.updated && ` - Updated ${formatDate(post.date.updated)}`} - by
          Alvar Lagerlöf
        </p>
      </header>

      <article className="prose">
        <CustomBlockContent blocks={post.body} />
      </article>
    </WithDividers>
  );
}
