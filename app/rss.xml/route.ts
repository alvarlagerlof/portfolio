import { toHTML } from "@portabletext/to-html";
import htm from "htm";
import vhtml from "vhtml";

import { Feed } from "feed";

import { Post } from "types";
import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";

const html = htm.bind(vhtml);

const query = groq`
*[_type == "post"] | order(date.published desc) {
  _id,
  slug,
  title,
  description,
  date,
  body
}
`;

export async function GET() {
  try {
    const posts: Post[] = await getClient().fetch(query);

    const feed = new Feed({
      title: "Alvar Lagerlöf's Blog",
      id: "https://alvar.dev",
      link: "https://alvar.dev",
      copyright: "",
      language: "en-us",
      favicon: "http://alvar.dev/favicon.ico",
      description: "Developer and designer living in Stockholm",
      author: {
        name: "Alvar Lagerlöf",
        email: "hello@alvar.dev",
        link: "https://alvar.dev",
      },
    });

    posts.forEach(post => {
      const link = `<br/>(This is an article posted to my blog at alvar.dev. You can read it online by <a href="https://alvar.dev/blog/${post.slug.current}">clicking here</a>.)`;
      const content =
        toHTML(post.body, {
          components: {
            types: {
              image: ({ value }) => String(html`<img src="${value.imageUrl}" />`),
              code: ({ value }) => String(html`<pre>${value.code}</pre>`),
            },
          },
        }) + link;

      feed.addItem({
        title: post.title,
        id: `https://alvar.dev/blog/${post.slug.current}`,
        link: `https://alvar.dev/blog/${post.slug.current}`,
        description: post.description,
        author: [
          {
            name: "Alvar Lagerlöf",
            email: "hello@alvar.dev",
            link: "https://alvar.dev",
          },
        ],
        content: content,
        date: new Date(post.date.published),
      });
    });

    const rss = feed.rss2();

    return new Response(rss);
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(JSON.stringify({ error: "failed generate feed" }), { status: 500 });
  }
}
