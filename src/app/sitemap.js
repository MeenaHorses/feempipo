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
    url: `https://feempipo.com${route}`,
    lastModified: now
  }));
}
