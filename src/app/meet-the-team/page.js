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
    image: "/images/team/Kassim.webp",
    instagram: "https://www.instagram.com/kassimbraimah/",
    x: "https://x.com/KassimBraimah",
  },
  {
    name: "Sifon Okoi",
    role: "Creative Director",
    bio: "Shapes the artistic vision and ensures our stories captivate audiences.",
    image: "/images/team/Sifon.webp",
    instagram: "https://www.instagram.com/sifonokoi/",
    x: "https://x.com/SifonOkoi",
  },
  {
    name: "Focus Idris",
    role: "Head of Content",
    bio: "Oversees all content production, ensuring quality and consistency.",
    image: "/images/team/Focus.webp",
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
    image: "/images/team/Chino.webp",
    instagram: "https://www.instagram.com/iamchino_marchie/",
    x: "https://x.com/mizmirabel",
  },
];

/** Same footprint for every card (Founder matches the team). */
const CARD_BOX =
  "h-[min(28rem,70vh)] min-h-[22rem] sm:min-h-[28rem] lg:h-[31.25rem]";

/** lg: 6 cols → row1 three × span-2; row2 two × span-2 starting at col 2 and 4 (centered under the three). */
function cardGridPlacement(index) {
  if (index < 3) return "lg:col-span-2";
  if (index === 3) return "lg:col-span-2 lg:col-start-2";
  return "lg:col-span-2 lg:col-start-4";
}

/** Same cover + hover zoom for all; Simpa’s file has extra ceiling—shift focal point only (no extra scale). */
function imageClass(member) {
  const base =
    "absolute inset-0 h-full w-full object-cover origin-top transition-transform duration-700 grayscale group-hover:scale-105 group-hover:grayscale-0";
  if (member.name === "Simpa Samson") {
    return `${base} object-[50%_42%] sm:object-[50%_40%]`;
  }
  return `${base} object-top`;
}

export default function MeetTheTeamPage() {
  return (
    <div className="min-h-screen text-[#eae2d0]">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-28 md:pt-32">
        {/* Hero — matches reference typography & grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter text-[#f5cd05] uppercase sm:text-6xl md:text-7xl lg:text-8xl">
                THE CREATIVE <br />
                FORCE BEHIND <br />
                FEEMPIPO.
              </h1>
              <p className="max-w-2xl text-lg font-medium leading-relaxed text-[#d0c6ab] md:text-xl lg:text-2xl">
                At Feempipo, filmmaking is a collaborative art. From concept to
                screen, our talented team combines creativity, technical
                expertise, and passion for storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* 3 cards top row, 2 centered on bottom (lg+); uniform cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name}
              className={`group relative overflow-hidden rounded-xl bg-[#2e2a1e] ${CARD_BOX} ${cardGridPlacement(index)}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className={imageClass(member)}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#23200f] to-transparent opacity-90"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                <span className="mb-2 block text-xs font-bold tracking-widest text-[#f5cd05] uppercase">
                  {member.role}
                </span>
                <h3 className="mb-2 text-2xl font-black tracking-tighter text-white uppercase sm:text-3xl">
                  {member.name}
                </h3>
                <p className="mb-4 text-pretty text-sm leading-relaxed text-[#d0c6ab] sm:text-[0.9375rem]">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#f5cd05] transition-transform hover:scale-110"
                    aria-label={`${member.name} Instagram`}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm9.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                    </svg>
                  </a>
                  {member.x ? (
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#f5cd05] transition-transform hover:scale-110"
                      aria-label={`${member.name} X`}
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M18.9 2H22l-6.9 7.9L23 22h-6.2l-4.9-6.6L6 22H2.9l7.4-8.5L1 2h6.3l4.4 6L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join callout — surface-container-highest, primary CTA button */}
        <section className="mt-32 flex flex-col items-center rounded-xl bg-[#393528] p-10 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl">
            Be Part of the Story
          </h2>
          <p className="mb-8 max-w-lg text-[#d0c6ab]">
            We&apos;re always looking for visionary creators and technical
            wizards to join our growing studio.
          </p>
          <a
            href="mailto:Feempipo@gmail.com"
            className="rounded-xl bg-[#f5cd05] px-8 py-4 font-black tracking-tighter text-[#23200f] uppercase transition-transform hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
