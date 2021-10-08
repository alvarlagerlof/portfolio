import groq from "groq";
import { usePreviewSubscription } from "lib/sanity/sanity";
import { getClient } from "lib/sanity/sanity.server";
import { formatDate } from "lib/utils/date";

import { Post } from "../../types";

import CustomBlockContent from "components/CustomBlockContent";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";

type PostProps = {
  data: Post;
  preview: boolean;
};

const postQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  date,
  body[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
`;

export default function BlogPost({ data, preview }: PostProps) {
  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data?.slug.current },
    initialData: data,
    enabled: preview && data?.slug.current !== undefined,
  });

  return (
    <>
      <Meta title={post.title} description={post.description} ogImageLayout="blogpost" />

      <WithDividers direction="vertical">
        <Header post={post} />
        <Article post={post} />
      </WithDividers>
    </>
  );
}

function Header({ post }: { post: Post }) {
  return (
    <header>
      <h1 className="font-heading text-4xl md:text-7xl mb-8 ">{post.title}</h1>
      <h2 className="font-subheading text-xl md:text-2xl max-w-[60ch] mb-8">{post.description}</h2>
      <p className="font-medium">
        Published {formatDate(post.date.published)}
        {post.date.updated && ` - Updated ${formatDate(post.date.updated)}`}
      </p>
    </header>
  );
}

function Article({ post }: { post: Post }) {
  return (
    <article>
      <div className="prose">
        <CustomBlockContent blocks={post.body} />
      </div>
    </article>
  );
}

export async function getStaticPaths({ preview = false }) {
  const posts: Partial<Post[]> = await getClient(preview).fetch(
    groq`
      *[_type == "post" && defined(slug)] {
        slug
      }
    `
  );

  return {
    paths: posts.map(post => ({ params: { slug: post.slug?.current } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug }, preview = false }) {
  const post: Post = await getClient(preview).fetch(postQuery, {
    slug,
  });

  return {
    props: {
      data: post,
      preview,
    },
  };
}
