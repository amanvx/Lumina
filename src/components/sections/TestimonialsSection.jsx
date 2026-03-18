import { Icon } from "@iconify/react";

const testimonials = [
  {
    badge: "5.0 Rating",
    quote:
      '"Orion cut our MTTR by 60% in the first month. The AI root cause analysis is like having our best principal engineer on-call 24/7."',
    name: "Sarah Jenkins",
    role: "VP Engineering, DataFlow",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    badge: "Enterprise",
    quote:
      '"We replaced three legacy monitoring tools with Orion. The interface is beautiful, but the automated runbooks are the real game changer."',
    name: "Michael Chang",
    role: "Director of SRE, Acme Corp",
    gradientAvatar: true
  },
  {
    badge: "Fast Impact",
    quote:
      '"Alert fatigue was destroying our team\'s morale. Orion grouped the noise so perfectly that our paging volume dropped immediately."',
    name: "Elena Rostova",
    role: "Platform Lead, Sentinel",
    avatar: "https://i.pravatar.cc/150?img=47"
  }
];

function TestimonialsSection() {
  return (
    <section id="showcase" className="max-w-[1400px] mx-auto px-6 pb-32 pt-10">
      <div className="text-center mb-16">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white/70 text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-5">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-4">
          Loved by engineering leaders
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed font-light">
          Teams rely on Orion to reduce noise, accelerate incident response, and bring clarity to complex operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.name} className="glass-panel p-8 rounded-[2rem] flex flex-col justify-between min-h-[320px] bg-white/70">
            <div>
              <div className="flex items-center justify-between mb-7">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Icon key={`${item.name}-${idx}`} icon="solar:star-bold" width="18" height="18" />
                  ))}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.badge}</div>
              </div>
              <p className="text-slate-700 text-[17px] leading-8 font-light mb-10">{item.quote}</p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-200/70">
              {item.gradientAvatar ? (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-sm flex-shrink-0" />
              ) : (
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm flex-shrink-0 bg-slate-900">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
