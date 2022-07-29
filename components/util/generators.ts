import { readdirSync, writeFileSync } from "fs";
import RSS from "rss";
import { PostDetails, PostList } from "./types";
const baseUrl = process.env.RENDER_EXTERNAL_URL;
const siteMapUrl = "public/sitemap.xml";
const robotsText = `Sitemap: ${baseUrl}/${siteMapUrl} \nUser-agent: * \nAllow: /* \nDisallow: /api/*`;

export const generateSiteMap = async (articles: PostList[]) => {
  const staticPages = readdirSync("./pages").filter((staticPage) => {
    return ![
      "_app.tsx",
      "_document.tsx",
      "_error.tsx",
      "sitemap.xml.js",
      "api",
      "articles",
    ].includes(staticPage);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPages
              .map((page) => {
                const url = getUrl(page);
                return returnXmlUrl(url, new Date(), "monthly", 1.0);
              })
              .join("")}
              ${articles
                .map(({ folder, posts }) => {
                  return posts.map((post: PostDetails) => {
                    const url = folder + "/" + post.slug;
                    return returnXmlUrl(
                      url,
                      new Date(post.meta.updatedAt),
                      "monthly",
                      0.9
                    );
                  });
                })
                .join("")}
        </urlset>`;
  writeFileSync(siteMapUrl, sitemap);
  writeFileSync("public/robots.txt", robotsText);
};

export const generateRssFeed = (articles: PostList[]) => {
  const feed = new RSS({
    title: "Pi journey articles",
    feed_url: "localhost:3000/rss.xml",
    site_url: "localhost:3000",
  });
  articles.map(({ folder, posts }) => {
    return posts.forEach((post: PostDetails) => {
      const url = folder + "/" + post.slug;
      const meta = post.meta;
      feed.item({
        title: meta.title,
        description: meta.metaDesc,
        url: url,
        date: meta.date,
      });
    });
  });
  writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
};
const getRobotText = (siteMapUrl: string) => {
  const text = `Sitemap: ${baseUrl}/${siteMapUrl} \nUser-agent: * \nAllow: /* \nDisallow: /api/*`;
  return text;
};
const getUrl = (page: string) => {
  const path = page
    .replace("pages/", "/")
    .replace(".tsx", "")
    .replace("index", "/");
  const route = path === "/index" ? "/" : path;
  return `${baseUrl}${route}`;
};

const returnXmlUrl = (
  url: string,
  date: Date,
  change: string,
  priority: number
) => {
  return `<url>
            <loc>${url}</loc>
            <lastmod>${date.toISOString()}</lastmod>
            <changefreq>${change}</changefreq>
            <priority>${priority}</priority>
        </url>
    `;
};
