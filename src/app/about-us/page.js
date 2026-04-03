import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Feempipo LTD, a leading media production company in Abuja focused on films, series, documentaries, and digital media.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen font-display text-slate-100 antialiased">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-[1200px] px-6 py-8 md:px-10">
          <div
            className="relative flex h-80 w-full flex-col justify-end overflow-hidden rounded-xl bg-slate-800 md:h-[450px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(35,32,15,0) 0%, rgba(35,32,15,0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqlELExLsTqwSbJfzt5IZ8Y25htx90eC2LT6qLCsxkGkt5BTXe0xIvP5nKt5rkMGbAk0-b22BtEAfgy3wH5fjecKtdqWz0Xr2_WjL2Q1cWLc6t5LrYg9YQ5qMmDtyrkZ3cw0vKPMFeXCyXnJyS2MPYIb7Jgc64BA0W8U-phil8RsLpMDwLlfCA1PnT0e29nblHVgYA16IZOKfB1g_SmypbBjK7g9wFNkFXZmchOCFjQExYP04pc6djNmXz2J5Fg-H-hSILRiJgK78')",
            }}
          >
            <div className="p-8">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-100 md:text-6xl">
                About Us
              </h1>
              <div className="mt-4 h-1 w-24 bg-[#f5cd05]" />
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[1200px] flex-col gap-12 px-6 py-12 md:flex-row md:px-10">
          <div className="flex-1">
            <h2 className="mb-4 text-sm font-bold tracking-widest text-[#f5cd05] uppercase">
              The Studio
            </h2>
            <h3 className="mb-6 text-3xl font-black text-white md:text-5xl">
              Feempipo LTD
            </h3>
            <p className="mb-8 text-xl font-semibold text-[#f5cd05]">
              Creatives in Motion
            </p>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                Feempipo LTD is a leading media production company based in
                Abuja, Nigeria, specializing in movie production, series,
                documentaries, and digital content creation.
              </p>
              <p>
                With over a decade of experience, we have built a reputation for
                delivering high-quality productions that resonate with audiences
                across Africa and around the world. We pride ourselves on our
                storytelling prowess and technical excellence.
              </p>
              <p>
                Our mission is to push the boundaries of African cinema,
                bringing authentic stories to life through state-of-the-art
                technology and a passion for visual storytelling.
              </p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4">
            <div
              className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-800"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHpRzkznHhSYZEUniDJ-9DkJbQCtv4bZPfRK6UvHO2r-41-ORmSvcK1UsX6_INHJQ3zyEe70WIvFZc8PLetUnA6D0Y1744YH0UIohVNg0pewh3yOtsGKFSoKCQ5ozX7qudvfvDk3YGlNnBTXnKtRUK3DK1BhG8mHz03TDsSNl40Su2utCvI2YvnkAjtZHpJjMBx6ZVDluYGVNNlv2_FUDiqu5JpgVwnEjqfU7WPeQ-2yp04vFShrd7SEYXllEGGRchouXeFuY15dk')",
                backgroundSize: "cover",
              }}
            />
            <div
              className="mt-12 aspect-[4/5] overflow-hidden rounded-xl bg-slate-800"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBvoURi89IsV346xbsopxws8p3S_Dt9Ozqn3nkCL519girvvEf0z9puK2a657sDogQXtFOOEZxX7XYRPz_i9d9gVWKXy4AIwUg0CYMiR8iIrD6ERoXCQpL8ckMMCICOMBsQO0o08sBrAPyi8KleajZ7lZCyH6Ba6iI5QNM5Wq_acnljVTOHgbH3kADCDzOsJTqOW1o0eMAfm94AkXHY-LrZGfiCP0pzh9Qt-6KKpV20kFVE41z3C5XeNB9AMY-EfzPls2wsyTzY08')",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>

        <div className="w-full bg-[#f5cd05]/5 py-20 px-6 md:px-10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined mb-4 text-5xl text-[#f5cd05]">
                video_library
              </span>
              <h4 className="mb-2 text-2xl font-bold">100+ Productions</h4>
              <p className="text-slate-400">
                From indie shorts to international feature films and series.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined mb-4 text-5xl text-[#f5cd05]">
                emoji_events
              </span>
              <h4 className="mb-2 text-2xl font-bold">Award Winning</h4>
              <p className="text-slate-400">
                Recognized globally for storytelling and technical innovation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined mb-4 text-5xl text-[#f5cd05]">
                public
              </span>
              <h4 className="mb-2 text-2xl font-bold">Global Reach</h4>
              <p className="text-slate-400">
                Content distributed across major platforms worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] px-6 py-24 md:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#f5cd05]/20 bg-white/5 p-6">
              <h5 className="mb-3 text-xl font-bold text-[#f5cd05]">
                Feature Films
              </h5>
              <p className="text-sm text-slate-400">
                Compelling narratives designed for the big screen.
              </p>
            </div>
            <div className="rounded-xl border border-[#f5cd05]/20 bg-white/5 p-6">
              <h5 className="mb-3 text-xl font-bold text-[#f5cd05]">
                TV Series
              </h5>
              <p className="text-sm text-slate-400">
                Engaging episodic content for terrestrial and streaming.
              </p>
            </div>
            <div className="rounded-xl border border-[#f5cd05]/20 bg-white/5 p-6">
              <h5 className="mb-3 text-xl font-bold text-[#f5cd05]">
                Documentaries
              </h5>
              <p className="text-sm text-slate-400">
                Impactful real-life stories told with sensitivity.
              </p>
            </div>
            <div className="rounded-xl border border-[#f5cd05]/20 bg-white/5 p-6">
              <h5 className="mb-3 text-xl font-bold text-[#f5cd05]">
                Digital Media
              </h5>
              <p className="text-sm text-slate-400">
                Modern content optimized for the digital age.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
