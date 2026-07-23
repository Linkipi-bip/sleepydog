import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
const heroAsset = "/assets/sleepydog-hero.png";
const bedAsset = "/assets/sleepydog-bed.png";
const sleepyVideo = "/assets/sleepy.mp4";

const CONTRACT = "Fch8Bft7Wg3srkr7y71snzr121AYkt9oR7sgucZpump";
const TG_URL = "https://t.me/SLEEPYDOGDEV";
const X_URL = "https://x.com/FALLASLEEPDOG";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SleepyDog — The dream is only a nap away" },
      {
        name: "description",
        content:
          "SleepyDog: the cozy good boy who dreams in moonlight. Join the pack, warm the blanket, and chase quiet dreams together.",
      },
      { property: "og:title", content: "SleepyDog — The dream is only a nap away" },
      {
        property: "og:description",
        content: "Cozy nights, soft glows, and one very sleepy good boy. $SLEEPYDOG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Star({ top, left, size, delay }: { top: string; left: string; size: number; delay: string }) {
  return (
    <span
      className="absolute rounded-full bg-white"
      style={{
        top, left, width: size, height: size,
        animation: `twinkle 3s ease-in-out ${delay} infinite`,
        boxShadow: "0 0 6px rgba(255,255,255,0.9)",
      }}
    />
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative w-9 h-9 rounded-full overflow-hidden ring-moon bg-gradient-to-br from-primary to-accent">
            <img src={heroAsset} alt="SleepyDog" className="absolute inset-0 w-full h-full object-cover" />
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-wide">SLEEPYDOG</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.2em]">$SLEEPYDOG</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#intro" className="text-primary"><span className="text-muted-foreground mr-2">01</span>INTRO</a>
          <a href="#story" className="text-muted-foreground hover:text-foreground"><span className="mr-2">02</span>STORY</a>
          <a href="#roadmap" className="text-muted-foreground hover:text-foreground"><span className="mr-2">03</span>ROADMAP</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={TG_URL} className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-full border border-border text-sm hover:bg-muted">↗ TG</a>
          <a href={X_URL} className="inline-flex items-center gap-2 px-5 h-10 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90">X</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="intro" className="relative min-h-screen overflow-hidden bg-night">
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <Star key={i}
            top={`${(i * 37) % 100}%`}
            left={`${(i * 53) % 100}%`}
            size={Math.random() > 0.7 ? 3 : 1.5}
            delay={`${(i % 5) * 0.4}s`}
          />
        ))}
      </div>
      {/* Moon */}
      <div
        className="absolute top-24 right-1/3 w-40 h-40 rounded-full opacity-90"
        style={{
          background: "radial-gradient(circle at 30% 30%, oklch(0.98 0.02 90), oklch(0.78 0.14 255) 70%, transparent 72%)",
          boxShadow: "var(--glow-moon)",
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-accent uppercase mb-8">
            <span>☾</span><span>Tucked in tight · dreaming in moonlight</span>
          </div>
          <h1 className="font-display font-black leading-[0.85] text-white text-[clamp(4rem,11vw,10rem)]">
            SLEEPY<br />
            <span className="text-glow" style={{ color: "oklch(0.86 0.14 255)" }}>DOG.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            The good boy who never stopped dreaming —
            <span className="text-foreground font-semibold"> so the dream came to him.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={X_URL} className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-primary text-primary-foreground font-semibold ring-moon hover:opacity-90">
              Join the pack ↗
            </a>
            <a href="#story" className="inline-flex items-center gap-2 text-sm tracking-widest text-foreground border-b border-foreground/40 hover:border-foreground pb-1">
              READ HIS STORY →
            </a>
          </div>
          <div className="mt-10 text-xs text-muted-foreground tracking-widest">
            Sweet dreams only <span className="text-accent font-semibold">$SLEEPYDOG</span> ☾
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-primary/20 blur-3xl" />
          <img
            src={heroAsset}
            alt="SleepyDog resting in a car at golden hour, wrapped in a warm glow"
            className="relative rounded-3xl w-full object-cover ring-moon"
            style={{ animation: "float-slow 10s ease-in-out infinite" }}
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-primary/50 flex flex-col items-center justify-center text-center backdrop-blur-md bg-background/50">
            <div className="text-[9px] tracking-[0.2em] text-muted-foreground">GOOD NIGHT ONLY</div>
            <div className="text-sm font-bold text-primary mt-1">$SLEEPY</div>
            <div className="text-lg">☾</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-[10px] tracking-[0.3em] text-muted-foreground">SCROLL TO DREAM ↓</div>
    </section>
  );
}

function ContractBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="border-y border-border bg-card/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs tracking-widest">
        <span className="text-muted-foreground">CONTRACT ADDRESS</span>
        <code className="font-mono text-foreground truncate max-w-md">{CONTRACT}</code>
        <button onClick={copy} className="flex items-center gap-2 text-primary hover:text-accent">
          ▣ {copied ? "COPIED" : "COPY"}
        </button>
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-32 bg-night overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs tracking-[0.3em] text-accent mb-4">☾ THE COZY RULE</div>
        <h2 className="font-display font-bold text-5xl md:text-7xl max-w-4xl leading-tight">
          Some chase the ball. <span className="text-primary">We chase the pillow.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          No hustle. No noise. Just one very sleepy dog, one very warm blanket,
          and a community that knows the best dreams happen with the lights low.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Soft by nature", d: "Made of pillows, patience and a little starlight." },
            { n: "02", t: "Dreamy by design", d: "Every glow, every gradient — tuned to twilight." },
            { n: "03", t: "Pack-powered", d: "Good boys and girls, all tucked in together." },
          ].map((f) => (
            <div key={f.n} className="p-8 rounded-3xl border border-border bg-card/40 backdrop-blur hover:border-primary/40 transition">
              <div className="text-xs tracking-widest text-muted-foreground">{f.n}</div>
              <div className="mt-3 text-2xl font-display font-bold">{f.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl" />
            <img
              src={bedAsset}
              alt="SleepyDog asleep in bed wearing a starry nightcap"
              className="relative rounded-3xl w-full"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] text-muted-foreground">THE ORIGINAL SLEEPY BOY · 01</div>
            <blockquote className="mt-6 text-3xl md:text-4xl font-display leading-snug">
              <span className="text-accent">"</span>
              The face of someone who found the dream —
              and decided to stay a little longer.
              <span className="text-accent">"</span>
            </blockquote>
            <div className="mt-10 flex gap-4">
              <a href={TG_URL} className="px-6 h-12 inline-flex items-center rounded-full border border-border hover:bg-muted">Telegram ↗</a>
              <a href={X_URL} className="px-6 h-12 inline-flex items-center rounded-full bg-primary text-primary-foreground font-semibold">Follow on X ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ROADMAP = [
  {
    tag: "NOW", num: "01", icon: "☾",
    title: "Light the nightlight",
    body: "Build the cozy world, gather the earliest sleepers, and turn one soft glow into a signal the timeline can nap to.",
    items: ["Brand + site", "Community warm-up", "Lore unlocked"],
  },
  {
    tag: "NEXT", num: "02", icon: "✦",
    title: "Open the blanket",
    body: "Fair launch. Clean links. One contract address everywhere — the shortest path from awake to asleep.",
    items: ["Launch", "DEX tracking", "Sticker pack"],
  },
  {
    tag: "GROW", num: "03", icon: "↗",
    title: "Run with the pack (slowly)",
    body: "Community contests, dreamy creator drops, partnerships — enough moonlight to warm every timeline.",
    items: ["Meme raids", "Creator rewards", "Collabs"],
  },
  {
    tag: "DREAM", num: "04", icon: "✓",
    title: "Live the dream",
    body: "The roadmap ends where the community takes over. Dream bigger, stay soft, and keep the bed warm for the next good boy.",
    items: ["Community-led future", "Real-world naps", "More dreams"],
  },
];

function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 bg-night">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs tracking-[0.3em] text-accent mb-4">☾ THE DREAM MAP</div>
        <h2 className="font-display font-bold text-5xl md:text-7xl max-w-3xl">Four naps to the dream.</h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {ROADMAP.map((r) => (
            <article key={r.num} className="relative p-10 rounded-3xl border border-border bg-card/40 backdrop-blur overflow-hidden group hover:border-primary/50 transition">
              <div className="absolute top-6 right-6 text-6xl opacity-20 group-hover:opacity-40 transition">{r.icon}</div>
              <div className="flex items-baseline gap-3">
                <span className="text-xs tracking-[0.3em] text-primary">{r.tag}</span>
                <span className="text-xs tracking-widest text-muted-foreground">{r.num}</span>
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-display font-bold">{r.title}</h3>
              <p className="mt-4 text-muted-foreground max-w-md">{r.body}</p>
              <ul className="mt-6 space-y-2">
                {r.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-accent">✓</span>{i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="dream" className="relative py-32 bg-night overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs tracking-[0.3em] text-accent mb-4">☾ CAUGHT ON CAMERA</div>
        <h2 className="font-display font-bold text-5xl md:text-7xl max-w-3xl leading-tight">
          30 seconds in — <span className="text-primary">already dreaming.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Press play. Watch a good boy do what he does best.
        </p>

        <div className="mt-14 relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-primary/20 blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden ring-moon border border-border bg-card">
            <video
              src={sleepyVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 bg-night text-center overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.14 255) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-xs tracking-[0.3em] text-accent">THE BLANKET IS OPEN</div>
        <h2 className="mt-4 font-display font-bold text-5xl md:text-7xl">Ready to live the dream?</h2>
        <p className="mt-6 text-lg text-muted-foreground">Slip under. Stay awhile. Dream loudly.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={X_URL} className="px-8 h-14 inline-flex items-center rounded-full bg-primary text-primary-foreground font-bold ring-moon hover:opacity-90">Join the pack ↗</a>
          <a href={TG_URL} className="px-8 h-14 inline-flex items-center rounded-full border border-border hover:bg-muted">Telegram ↗</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground tracking-widest">
        <div>© SLEEPYDOG · GOOD NIGHT ONLY</div>
        <div className="flex gap-6">
          <a href={X_URL} className="hover:text-foreground">X</a>
          <a href={TG_URL} className="hover:text-foreground">TELEGRAM</a>
          <a href="#top" className="hover:text-foreground">TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ContractBar />
      <Story />
      <VideoSection />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
}
