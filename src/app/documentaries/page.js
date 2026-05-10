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
    <div className="min-h-screen font-display text-slate-100">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8">
        <RevealOnScroll>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Documentaries
        </h1>
        <h2 className="mt-4 max-w-5xl text-lg font-bold text-[#f5cd05]">
          Authentic African stories that inform and inspire.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
          Feempipo produces impactful documentaries that highlight real stories,
          cultures, and experiences across Africa. Our documentary productions
          focus on authenticity, depth, and meaningful storytelling that informs
          and inspires audiences.
        </p>
        </RevealOnScroll>
        <RevealOnScroll>
        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {documentaries.map((doc) => (
            <article key={doc.title} className="rounded-xl bg-white/5 p-4">
              <a
                href={doc.url.replace("/embed/", "/watch?v=")}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={getYouTubeThumb(doc.url)}
                  alt={`${doc.title} documentary thumbnail`}
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <h2 className="mt-4 text-xl font-bold text-white">
                  {doc.title}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#f5cd05]">
                  {doc.category}
                </p>
                <p className="mt-2 text-sm text-slate-400">{doc.description}</p>
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
