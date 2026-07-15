import { Building2, GraduationCap, Code2, type LucideIcon } from "lucide-react";

export type Stat = { value: string; label: string };

export type CaseImageDef = {
  /** Path under /public, e.g. "/images/case-studies/uic-hero.jpg". */
  src: string;
  alt: string;
  caption?: string;
  /** Use object-contain (for posters/graphics that should not be cropped). */
  contain?: boolean;
};

export type Quote = { text: string; author: string; role: string };

/** How check-in / matching worked at this event. */
export type CheckIn = {
  label: string;
  text: string;
  /** The actual prompts attendees answered, when known. */
  questions?: string[];
};

/** A sponsorship or partnership callout. */
export type Partner = {
  label: string;
  text: string;
  image?: CaseImageDef;
};

export type CaseStudy = {
  slug: string;
  n: string;
  icon: LucideIcon;
  type: string;
  client: string;
  /** Short hook shown on the index card. */
  hook: string;
  /** Longer headline shown on the detail page. */
  headline: string;
  /** Hero image; if the file is missing the UI shows a branded fallback. */
  hero: CaseImageDef;
  /** For the hero/thumbnail fallback panel. */
  meta: { venue: string; date: string };
  /** Narrative blocks. */
  sections: { label: string; text: string }[];
  /** Headline result stats. */
  stats?: Stat[];
  checkin?: CheckIn;
  partner?: Partner;
  quotes: Quote[];
  gallery: CaseImageDef[];
  closer: string;
};

/** The peer-reviewed paper, presented in the style of its Springer page. */
export const RESEARCH = {
  eyebrow: "Peer-reviewed research",
  title:
    "AI-Powered Connection: Solving the Handshake Problem to Increase Human Connection by 12x",
  authors:
    "Co-authored by Nana Kofi Minta Addadzi-Koom (Founder, Knod, Inc.) and Dr. Alvin Chin (Professor, University of Illinois Chicago)",
  bookTitle: "HCI International 2026 Posters",
  bookSub: "(HCII 2026)",
  pages: "pp. 265-274",
  url: "https://link.springer.com/chapter/10.1007/978-3-032-30826-9_27",
  cover: {
    src: "/images/case-studies/paper-poster.jpg",
    alt: "HCI International 2026 Posters, the Springer proceedings that include the paper",
  } as CaseImageDef,
};

type AggStat = { to: number; suffix: string; label: string; decimals?: number };

export const AGGREGATE: AggStat[] = [
  { to: 1700, suffix: "+", label: "Attendees across live events" },
  { to: 500, suffix: "+", label: "Mutual connections confirmed in person" },
  { to: 94, suffix: "%", label: "Of responded intros are accepted" },
  { to: 4.6, decimals: 1, suffix: "/5", label: "Average event rating" },
];

const IMG = "/images/case-studies";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "chicago-innovation",
    n: "01",
    icon: Building2,
    type: "Membership innovation community",
    client: "Chicago Innovation",
    hook: "A 25th-anniversary night where the whole point was who you met.",
    headline:
      "One of Chicago's most recognized innovation communities, where the entire value is the connection between its members.",
    hero: {
      src: `${IMG}/chicago-innovation-hero.jpg`,
      alt: "A Chicago Innovation panel on stage with the Knod screen behind them",
    },
    meta: { venue: "SAIC Ballroom, 112 S Michigan Ave, Chicago", date: "February 19, 2026" },
    sections: [
      {
        label: "Who they are",
        text: "Chicago Innovation is one of the most recognized innovation communities in the city. Best known for the annual Chicago Innovation Awards, it spends the year bringing together founders, corporate leaders, investors, students, and civic figures. Its work is built on a simple idea: innovation happens when the right people meet. In its 25th anniversary year, Knod is proud to be a major contributing sponsor.",
      },
      {
        label: "The challenge",
        text: "A room full of the right people does not guarantee the right introductions. Members arrive, gravitate toward the people they already know, and leave without meeting the person who could have changed their year. Chicago Innovation wanted its gatherings to actually deliver on the promise of connection, and to see it in the numbers, not just feel it in the room.",
      },
      {
        label: "In the room",
        text: "The Innovation Forecast: The Next 25 Years brought a remarkable panel to the School of the Art Institute of Chicago Ballroom, including 2025 Nobel laureate in Economic Sciences Professor Joel Mokyr of Northwestern, P33 CEO Brad Henderson, the Aspen Institute's Janice Jackson, World Business Chicago CEO Phil Clement, and Chicago Community Trust President and CEO Andrea Saenz, moderated by Chicago Innovation President and CEO Luke Tanen. With that much talent in one room, the cost of not meeting the right person was high.",
      },
    ],
    checkin: {
      label: "How Knod ran the room",
      text: "Knod was there from the door. Attendees checked in through Knod and answered a couple of quick prompts, and Knod went up on the main screen so the whole room could see how it worked: scan, answer, and get matched with the people worth meeting. No app to download, no new profile, no feed.",
      questions: ["What are you interested in?", "What are you hoping to get from this event?"],
    },
    partner: {
      label: "A major contributing sponsor",
      text: "Knod is listed among Chicago Innovation's major contributing sponsors for its 25th anniversary year, a partnership built on a shared belief that connection is the point of every room.",
      image: {
        src: `${IMG}/chicago-innovation-sponsor.jpg`,
        alt: "knod ai listed among Chicago Innovation's major contributing sponsors on their website",
        caption: "knod ai among Chicago Innovation's major contributing sponsors.",
      },
    },
    stats: [
      { value: "60", label: "Attendees on Knod" },
      { value: "68", label: "Nods exchanged" },
      { value: "30", label: "Mutual connections" },
      { value: "44%", label: "Match rate" },
    ],
    quotes: [
      {
        text: "At Chicago Innovation, we are always trying to spark meaningful connections at our monthly events. Knod offers a unique, tech-forward way for our innovation-minded attendees to network that's fun, frictionless, and outcomes-focused.",
        author: "Paul Kitti",
        role: "Vice President, Marketing & Events, Chicago Innovation",
      },
      {
        text: "Using Knod at Chicago Innovation was phenomenal. The matching was surprisingly accurate. We were paired with attendees who aligned closely with our interests, and the conversations felt natural and high-level. It made networking intentional and genuinely valuable.",
        author: "Rylee Johnson",
        role: "MainStreet Investment Advisors, LLC",
      },
    ],
    gallery: [
      {
        src: `${IMG}/chicago-innovation-1.jpg`,
        alt: "A Knod table card with a QR code on a Chicago Innovation branded table",
        caption: "The Knod table card attendees scanned to join. No app needed.",
      },
      {
        src: `${IMG}/chicago-innovation-2.jpg`,
        alt: "A full ballroom of Chicago Innovation attendees seen from the balcony",
        caption: "The Innovation Forecast at the School of the Art Institute of Chicago Ballroom.",
      },
    ],
    closer:
      "Connections that would have taken hours of forced small talk, or never happened at all, happened in minutes. In a room built to imagine the next 25 years, the introductions were as memorable as the panel.",
  },
  {
    slug: "uic",
    n: "02",
    icon: GraduationCap,
    type: "University classroom · smart meet-spot feature",
    client: "University of Illinois Chicago",
    hook: "Students who sit on their phones, turned toward each other.",
    headline:
      "Three classes, one new smart feature: students get matched and meet in person at a designated spot, with no chat needed.",
    hero: {
      src: `${IMG}/uic-hero.jpg`,
      alt: "A UIC lecture hall with students mingling and the Knod screen for IDS 200",
    },
    meta: { venue: "University of Illinois Chicago", date: "March 20, 2026" },
    sections: [
      {
        label: "The problem in the room",
        text: "Walk into most classrooms before the lecture starts and you will see the same thing: students sitting on their phones, saying nothing to the people right next to them. They come to class and they go back to their dorm, and the classmates who could have become friends, study partners, or collaborators stay strangers all semester. The hardest conversation is the first one, and it is the one that never happens.",
      },
      {
        label: "The new smart feature",
        text: "Dr. Alvin Chin put Knod's new smart meet-spot feature to work across three of his IDS classes. Instead of endless chatting through a screen, Knod matches two students by what they have in common and sends them to a designated spot in the room to actually meet in person. No back-and-forth texting, just a clear nudge: go here, meet this person, you will get along.",
      },
      {
        label: "What happened",
        text: "Across three sections, students got off their phones and met classmates they had never spoken to. The feature took the guesswork and the fear out of the first hello, and left the part that matters: the conversation. The match rate held near 59% across all three classes.",
      },
    ],
    checkin: {
      label: "How the feature worked",
      text: "Students scanned in with Knod and answered a few quick prompts. Knod paired them with someone they had something in common with, then pointed both people to a designated meeting spot in the room. No chat thread to manage, no awkward opener to write.",
      questions: ["What are you interested in?", "What are you hoping to get from this class?"],
    },
    stats: [
      { value: "82", label: "Students across three sections" },
      { value: "245", label: "Nods exchanged" },
      { value: "145", label: "Mutual connections confirmed" },
      { value: "~59%", label: "Match rate · 4.3 to 5.0 section ratings" },
    ],
    quotes: [
      {
        text: "Knod made me realize that despite being an introvert I do enjoy talking to people. Thank you for developing this!",
        author: "UIC Business Student",
        role: "IDS course, University of Illinois Chicago",
      },
    ],
    gallery: [
      {
        src: `${IMG}/uic-1.jpg`,
        alt: "UIC students standing and talking together in a lecture hall",
        caption: "Students meeting classmates they had never spoken to before.",
      },
      {
        src: `${IMG}/uic-3.jpg`,
        alt: "Three UIC students laughing together over their phones after being matched",
        caption: "Matched, then sent to a designated spot to meet in person.",
      },
    ],
    closer:
      "This is what the feature is for: turning a room of people looking down at their phones into a room of people meeting each other. Three classes in one morning, and the phones went in pockets.",
  },
  {
    slug: "deepmind",
    n: "03",
    icon: Code2,
    type: "Hackathon · organized by Forever 22",
    client: "Vibecoding Hackathon",
    hook: "A room of builders at every level, matched by what they were making.",
    headline:
      "A technical crowd that needed to find collaborators fast, matched by interest.",
    hero: {
      src: `${IMG}/deepmind-hero.jpg`,
      alt: "Builders networking at the Vibecoding Hackathon at Drive Capital in Chicago",
    },
    meta: { venue: "Drive Capital, Chicago", date: "March 14, 2026" },
    sections: [
      {
        label: "The setup",
        text: "On March 14, 2026, the Vibecoding Hackathon ran at Drive Capital in Chicago. It was organized by Forever 22, with sponsors Google DeepMind, Drive Capital, and Outbound Collective. The room held people at every level, from first-time builders to seasoned engineers, exactly the mix where the best collaborator is often the person you never get around to meeting.",
      },
      {
        label: "The challenge",
        text: "Builders arrive heads-down, already thinking about their idea. The clock is running, and the cost of walking up to the wrong person feels high, so people default to the team they came with. The best cross-pollination in the room never happens.",
      },
      {
        label: "What Knod did",
        text: "Knod handled check-in at the door and, based on each person's interests, matched them with the collaborators worth crossing the room for that day. Attendees answered a quick prompt about what they were building and what they needed, and Knod surfaced the right people while the energy was still high.",
      },
    ],
    checkin: {
      label: "Check-in and matching",
      text: "Attendees scanned the Knod poster at the door, answered a prompt about their interests and what they were working on, and got matched for the day's event. Check-in and matching happened in the same moment, so people were meeting collaborators from the first minute.",
      questions: ["What are you interested in?", "What are you building, and what do you need?"],
    },
    stats: [
      { value: "54", label: "Attendees on Knod" },
      { value: "37", label: "Nods exchanged" },
      { value: "14", label: "Mutual connections confirmed" },
      { value: "38%", label: "Match rate · top rating from attendees" },
    ],
    quotes: [
      {
        text: "Getting started with Knod was smooth and intuitive. Mint handled the setup for my event, and it truly elevated the way guests mingled and met each other.",
        author: "Kaya Jones",
        role: "Event Organizer, Forever 22",
      },
    ],
    gallery: [
      {
        src: `${IMG}/deepmind-1.jpg`,
        alt: "The Vibecoding Hackathon with Google's DeepMind event poster with a Knod QR code",
        caption: "The poster attendees scanned to check in and get matched.",
        contain: true,
      },
      {
        src: `${IMG}/deepmind-2.jpg`,
        alt: "Attendees checking in at the Vibecoding Hackathon at Drive Capital",
        caption: "Check-in at Drive Capital. Scan once, and Knod matched you for the day.",
      },
    ],
    closer:
      "For a builder, a single introduction can be the difference between a demo and a company. Knod put those introductions in front of people while the room was still full.",
  },
];

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
