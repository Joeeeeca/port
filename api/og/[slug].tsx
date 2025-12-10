import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const PB_URL = "https://portfolio-cms-production-ea4c.up.railway.app";

// Fetch a post by its `slugs` field
async function getPost(slug: string) {
  const res = await fetch(
    `${PB_URL}/api/collections/posts/records?filter=slugs='${slug}'`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  if (!data?.items || data.items.length === 0) {
    return null;
  }

  return data.items[0];
}

export default async function handler(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const slug = pathname.split("/").pop()?.replace(".png", "");

    if (!slug) {
      return new Response("Missing slug", { status: 400 });
    }

    const post = await getPost(slug);

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    const title = post.title || "Blog Post";
    const category = post.category || "Business";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px",
            background:
              "linear-gradient(to bottom right, #0f172a, #1e293b)",
            color: "white",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              fontSize: 32,
              opacity: 0.7,
              marginBottom: 20,
            }}
          >
            {category}
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "90%",
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 28,
              opacity: 0.6,
            }}
          >
            Joe Capon Designs
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (err) {
    return new Response("Error: " + String(err), { status: 500 });
  }
}
