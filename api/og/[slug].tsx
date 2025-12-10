import { ImageResponse } from "@vercel/og";
import { fetchBlogPost } from "../../components/src/blog/blog-data";

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const slug = pathname.split("/").pop()?.replace(".png", "");

    if (!slug) {
      return new Response("Missing slug", { status: 400 });
    }

    const post = await fetchBlogPost(slug);

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
            padding: "60px",
            background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
            color: "white",
            justifyContent: "center",
            fontFamily: "Inter",
          }}
        >
          {/* CATEGORY LABEL */}
          <div
            style={{
              fontSize: 24,
              opacity: 0.7,
              marginBottom: 20,
            }}
          >
            {category}
          </div>

          {/* TITLE */}
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

          {/* AUTHOR MARK */}
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
  } catch (e) {
    return new Response("Something went wrong: " + e, {
      status: 500,
    });
  }
}
