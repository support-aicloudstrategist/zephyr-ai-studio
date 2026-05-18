import { whatsappProjectUrl } from '@/lib/siteLinks';

type PortfolioItem = {
  title: string;
  filter: string;
  create: string;
  bestFor: string;
  image: string;
  video?: string;
  gradient: string;
};

export function PortfolioCard({ item, featured = false }: { item: PortfolioItem; featured?: boolean }) {
  const href = whatsappProjectUrl(`Hi Zephyr AI Studio, I want this campaign style for my brand: ${item.title}.`);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`portfolio-card premium-card group relative block h-full min-h-[430px] overflow-hidden rounded-[1.25rem] border bg-black text-left outline-none shadow-[0_18px_70px_rgba(0,0,0,.34)] transition duration-500 md:min-h-[480px] md:rounded-[1.55rem] ${featured ? 'border-zephyr-cyan/18 shadow-[0_22px_80px_rgba(123,223,229,.08)]' : 'border-white/10'}`}
      aria-label={`Create this for my brand: ${item.title}`}
    >
      <img
        src={item.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="portfolio-image absolute inset-0 h-full w-full object-cover opacity-80 saturate-[.88] contrast-110"
      />
      {item.video && (
        <video
          className="portfolio-image absolute inset-0 h-full w-full object-cover opacity-78 saturate-[.9] contrast-110"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.image}
          aria-hidden="true"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      )}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.25)_34%,rgba(0,0,0,.96)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-black via-black/74 to-transparent" />
      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2 md:left-5 md:top-5">
        <span className="rounded-full border border-white/12 bg-black/48 px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-white/58 backdrop-blur-md">Campaign style</span>
        <span className="rounded-full border border-zephyr-cyan/18 bg-zephyr-cyan/[.07] px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-zephyr-cyan/86 backdrop-blur-md">{item.filter}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex min-h-[54%] flex-col justify-end p-5 md:p-6">
        <h3 className="font-display text-[clamp(1.72rem,6.5vw,2.75rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[clamp(1.75rem,2.1vw,2.65rem)]">{item.title}</h3>
        <div className="mt-4 space-y-2.5 text-sm leading-6 text-white/70 md:text-[0.92rem] md:leading-6">
          <p>{item.create}</p>
          <p>{item.bestFor}</p>
        </div>
        <span className="premium-button mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/16 bg-white/[.065] px-5 py-3 text-center text-[0.64rem] font-black uppercase tracking-[0.14em] text-white/86 backdrop-blur-sm group-hover:border-zephyr-cyan/36 group-hover:text-zephyr-cyan">
          Create this for my brand
        </span>
      </div>
    </a>
  );
}
