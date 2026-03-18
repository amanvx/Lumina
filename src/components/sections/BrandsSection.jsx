import { Icon } from "@iconify/react";

const brands = [
  { name: "PixelDust", icon: "solar:camera-linear" },
  { name: "StreamNet", icon: "solar:videocamera-linear" },
  { name: "EpicWorlds", icon: "solar:gamepad-linear" },
  { name: "Artify", icon: "solar:pen-new-square-linear" },
  { name: "SynthAudio", icon: "solar:music-note-linear" }
];

function BrandItem({ name, icon }) {
  return (
    <div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
      <Icon icon={icon} width="32" height="32" />
      <span className="text-2xl font-semibold tracking-tight">{name}</span>
    </div>
  );
}

function BrandsSection() {
  return (
    <section className="flex flex-col w-full max-w-[1400px] border-slate-200/30 border-t mx-auto pt-20 pb-20 items-center justify-center overflow-hidden">
      <p className="text-sm text-slate-400 font-semibold tracking-wide uppercase mb-12 px-6 text-center">
        Trusted by world-class creative studios
      </p>
      <div
        className="w-full relative flex items-center overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <div className="marquee-track flex w-max hover:[animation-play-state:paused]" style={{ animationDuration: "40s" }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
              {brands.map((brand) => (
                <BrandItem key={`${copy}-${brand.name}`} name={brand.name} icon={brand.icon} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
