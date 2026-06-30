import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";
import { documentaries, getYouTubeThumb } from "../../data/media";

export const metadata = buildPageMetadata({
  title: "Documentaries",
  description:
    "Feempipo documentaries highlight authentic African stories, cultures, and lived experiences with depth and impact.",
  pathname: "/documentaries",
});

export default function DocumentariesPage() {
  return (
    <div className="cinematic-page min-h-screen font-display text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8">
        <RevealOnScroll>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Documentaries
        </h1>
        <h2 className="mt-4 max-w-5xl text-lg font-bold text-brand-gold">
          Authentic African stories that inform and inspire.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-text">
          Feempipo produces impactful documentaries that highlight real stories,
          cultures, and experiences across Africa. Our documentary productions
          focus on authenticity, depth, and meaningful storytelling that informs
          and inspires audiences.
        </p>
        </RevealOnScroll>
        <RevealOnScroll>
        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {documentaries.map((doc) => (
            <article key={doc.title} className="brand-documentary-card group p-5 sm:p-6">
              <a
                href={doc.url.replace("/embed/", "/watch?v=")}
                target="_blank"
                rel="noreferrer"
                className="relative z-[1] block"
              >
                <img
                  src={getYouTubeThumb(doc.url)}
                  alt={`${doc.title} documentary thumbnail`}
                  className="aspect-video w-full rounded-lg object-cover ring-1 ring-brand-border transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <h2 className="mt-5 text-xl font-bold text-white">
                  {doc.title}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-gold">
                  {doc.category}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {doc.description}
                </p>
              </a>
            </article>
          ))}
        </section>
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
