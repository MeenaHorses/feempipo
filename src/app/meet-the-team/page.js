import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Meet the Team",
  description:
    "Meet the creative force behind Feempipo: the directors, writers, and producers shaping our stories.",
  alternates: { canonical: "/meet-the-team" },
};

const TEAM_MEMBERS = [
  {
    name: "Kassim Braimah",
    role: "Founder & CEO",
    bio: "Visionary behind Feempipo, guiding every project from idea to release.",
    image: "/images/team/Kassim.png",
    instagram: "https://www.instagram.com/kassimbraimah/",
    x: "https://x.com/KassimBraimah",
  },
  {
    name: "Sifon Okoi",
    role: "Creative Director",
    bio: "Shapes the artistic vision and ensures our stories captivate audiences.",
    image: "/images/team/Sifon.png",
    instagram: "https://www.instagram.com/sifonokoi/",
    x: "https://x.com/SifonOkoi",
  },
  {
    name: "Focus Idris",
    role: "Head of Content",
    bio: "Oversees all content production, ensuring quality and consistency.",
    image: "/images/team/Focus.png",
    instagram: "https://www.instagram.com/focus_idris/",
    x: "https://x.com/Focusidris",
  },
  {
    name: "Simpa Samson",
    role: "Head of Documentary",
    bio: "Leads documentary projects, delivering compelling real-world stories.",
    image: "/images/team/Simpa.png",
    instagram: "https://www.instagram.com/saintonios/",
    x: "https://x.com/saintonios",
  },
  {
    name: "Chino Marchie",
    role: "Head Writer",
    bio: "Crafts engaging scripts and narratives that resonate with viewers.",
    image: "/images/team/Chino.png",
    instagram: "https://www.instagram.com/iamchino_marchie/",
    x: "https://x.com/mizmirabel",
  },
];

export default function MeetTheTeamPage() {
  return (
    <div className="min-h-screen text-[#eae2d0]">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <section className="mb-24">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="mb-8 text-6xl leading-[0.9] font-black tracking-tighter text-[#f5cd05] uppercase md:text-7xl">
                THE CREATIVE <br />
                FORCE BEHIND <br />
                FEEMPIPO.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed font-medium text-[#d0c6ab] md:text-xl">
                At Feempipo, filmmaking is a collaborative art. From concept to
                screen, our talented team combines creativity, technical
                expertise, and passion for storytelling.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-6 h-64 w-64">
                <div className="absolute inset-0 rounded-full bg-[#f5cd05]/20 blur-2xl transition-all group-hover:bg-[#f5cd05]/30" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative h-full w-full rounded-full border-4 border-[#393528] object-cover object-[center_20%] shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mb-2 text-xs font-bold tracking-widest text-[#f5cd05] uppercase">
                {member.role}
              </span>
              <h2 className="mb-2 text-3xl font-black tracking-tighter text-white uppercase">
                {member.name}
              </h2>
              <div className="flex space-x-4">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f5cd05] transition-colors hover:text-white"
                  aria-label={`${member.name} Instagram`}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm9.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                  </svg>
                </a>
                {member.x ? (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#f5cd05] transition-colors hover:text-white"
                    aria-label={`${member.name} X`}
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M18.9 2H22l-6.9 7.9L23 22h-6.2l-4.9-6.6L6 22H2.9l7.4-8.5L1 2h6.3l4.4 6L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-32 flex flex-col items-center rounded-2xl bg-[#f5cd05] p-12 text-center">
          <h3 className="mb-4 text-4xl font-black tracking-tighter text-[#23200f] uppercase md:text-5xl">
            Be Part of the Story
          </h3>
          <p className="mb-8 max-w-lg text-lg text-[#23200f]">
            We&apos;re always looking for visionary creators and technical
            wizards to join our growing studio.
          </p>
          <a
            href="mailto:Feempipo@gmail.com"
            className="rounded-xl bg-[#23200f] px-10 py-4 font-black tracking-tighter text-[#f5cd05] uppercase shadow-lg shadow-[#f5cd05]/20 transition-transform hover:scale-105"
          >
            Contact Us
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
