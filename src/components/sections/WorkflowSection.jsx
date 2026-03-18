import { Icon } from "@iconify/react";

const integrations = [
  { title: "Design & UI", stack: "Figma, Adobe XD", icon: "solar:pen-linear", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { title: "Video Editing", stack: "Premiere, DaVinci", icon: "solar:video-frame-linear", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { title: "3D & Spatial", stack: "Blender, Unreal", icon: "solar:box-linear", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { title: "Audio & SFX", stack: "Ableton, Logic Pro", icon: "solar:music-note-linear", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" }
];

function WorkflowSection() {
  return (
    <section id="workflows" className="min-h-screen flex overflow-hidden bg-slate-50/30 pt-32 pb-32 relative items-center justify-center">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20 px-6">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">Connects with your workflow</h2>
        <p className="text-lg text-slate-500">Lumina integrates seamlessly with the creative tools your team already uses.</p>
      </div>

      <div className="md:scale-75 lg:scale-100 transition-transform duration-700 ease-out flex w-[800px] h-[800px] mt-40 relative scale-[0.45] items-center justify-center">
        <div className="relative z-10 w-40 h-40 rounded-full bg-[#eef2f6] border border-white/80 shadow-[0_25px_60px_rgba(15,23,42,0.08),inset_8px_8px_18px_rgba(255,255,255,0.95),inset_-10px_-10px_20px_rgba(148,163,184,0.12)] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white/40 blur-xl scale-110 pointer-events-none" />
          <div className="relative w-[112px] h-[112px] rounded-full border border-slate-300/40 bg-gradient-to-br from-white to-slate-100 shadow-[inset_0_2px_10px_rgba(255,255,255,0.95),0_10px_24px_rgba(15,23,42,0.04)] flex items-center justify-center">
            <Icon icon="solar:palette-bold" width="32" height="32" className="text-slate-800" />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-medium">LUMINA</span>
          </div>
        </div>

        <div className="absolute inset-0 rounded-full border border-slate-900/[0.03] animate-orbit-track">
          {integrations.map((item) => (
            <div key={item.title} className={`absolute w-64 h-24 flex items-center justify-center ${item.position}`}>
              <div className="animate-orbit-card w-full">
                <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon icon={item.icon} width="20" height="20" className="text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-800 tracking-tight">{item.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{item.stack}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-[180px] border border-slate-900/[0.02] rounded-full pointer-events-none" />
        <div className="absolute inset-[280px] border border-slate-900/[0.015] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}

export default WorkflowSection;
