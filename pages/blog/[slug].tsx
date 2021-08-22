import { Post } from "../../types";

import { formatDate } from "libs/utils/date";
import { getPosts, getPostsPublished, getPost } from "libs/blog";
import isDev from "libs/is-dev";

import CustomReactMarkdown from "components/CustomReactMarkdown";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";

type PostProps = {
  post: Post;
};

export default function BlogPost({ post }: PostProps) {
  return (
    <>
      <Meta title={post.title} description={post.description} />

      <WithDividers direction="vertical">
        <Header post={post} />
        <Article post={post} />
      </WithDividers>
    </>
  );
}

function Header({ post }: PostProps) {
  return (
    <header>
      {post.draft && (
        <p className=" bg-primary px-2 rounded-full inline-block text-white h-6 mb-8">Draft</p>
      )}

      <h1 className="font-heading text-4xl md:text-7xl mb-8 ">{post.title}</h1>
      <h2 className="font-subheading text-xl md:text-2xl max-w-[60ch] mb-8">{post.description}</h2>
      <p className="font-medium">
        Published {formatDate(post.date.published)}
        {post.date.updated && ` - Updated ${formatDate(post.date.updated)}`}
      </p>
    </header>
  );
}

function Article({ post }: PostProps) {
  return (
    <article>
      <div className="prose">
        <CustomReactMarkdown>{post.content}</CustomReactMarkdown>
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const posts: Post[] = isDev() ? await getPosts() : await getPostsPublished();

  return {
    paths: posts.map(post => {
      return { params: { slug: post.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post: Post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
}
