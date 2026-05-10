import { SITE_URL } from "../lib/seo";

const routes = [
  "",
  "/movies",
  "/documentaries",
  "/series",
  "/yawaskits",
  "/contact-us",
  "/about-us",
  "/meet-the-team",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
