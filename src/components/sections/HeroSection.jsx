import { Icon } from "@iconify/react";

function HeroSection() {
  return (
    <section id="studio" className="hero-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="tracking-tight">
            Limitless
            <br />
            Creation.
          </h1>
          <p>
            Generate stunning visual assets, cinematic videos, and dynamic audio from one unified, AI-powered
            studio environment.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 items-start">
            <button className="cta-btn">Open Canvas</button>
            <button className="px-6 py-3 rounded-full text-sm font-medium text-slate-700 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-white/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>

        <div className="card-section relative w-full h-[600px] flex justify-center items-center">
          <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <div className="relative w-full max-w-md mx-auto aspect-[4/5] card-floater">
            <div
              className="absolute top-[10%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-indigo-500/40 to-purple-500/40 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl"
              style={{ transform: "rotateY(15deg) rotateZ(-10deg) translateZ(-50px)" }}
            />

            <div
              className="absolute top-[15%] right-[-10%] w-[65%] h-[65%] bg-gradient-to-br from-pink-500/40 to-rose-500/40 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl"
              style={{ transform: "rotateY(-15deg) rotateZ(10deg) translateZ(-30px)" }}
            />

            <div
              className="absolute top-[20%] left-[5%] right-[5%] bottom-[5%] bg-white/80 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col p-6"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Icon icon="solar:magic-stick-linear" width="20" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Generating Canvas</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Processing Node</div>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>

              <div className="flex-1 w-full bg-slate-100 rounded-xl border border-slate-200/50 overflow-hidden relative flex flex-col gap-2 p-3">
                <div className="w-full h-[60%] bg-slate-200 rounded-lg animate-pulse" />
                <div className="flex gap-2 h-[40%]">
                  <div className="w-1/3 h-full bg-slate-200 rounded-lg animate-pulse" style={{ animationDelay: "100ms" }} />
                  <div className="w-1/3 h-full bg-slate-200 rounded-lg animate-pulse" style={{ animationDelay: "200ms" }} />
                  <div className="w-1/3 h-full bg-slate-200 rounded-lg animate-pulse" style={{ animationDelay: "300ms" }} />
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-[75%] shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <div className="h-8 px-4 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-xs text-slate-500 font-medium">
                  4K Render
                </div>
                <div className="h-8 px-4 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-xs text-slate-500 font-medium">
                  Cinematic Lighting
                </div>
                <div className="h-8 px-4 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-xs text-slate-500 font-medium">
                  Raytracing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
