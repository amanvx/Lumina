import { Icon } from "@iconify/react";

function FeaturesSection() {
  return (
    <section id="models" className="max-w-[1400px] mr-auto ml-auto pt-20 pr-6 pb-32 pl-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">Complete Creative Control</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
          Direct models with precision, blend modalities effortlessly, and export production-ready assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 min-h-[800px] gap-x-8 gap-y-8">
        <div className="glass-panel md:col-span-2 flex flex-col transition-all duration-1000 group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <Icon icon="solar:magic-stick-linear" width="24" height="24" className="text-slate-700" />
            </div>
            <h3 className="text-3xl font-medium text-[var(--primary)] mb-3 tracking-tight mt-4">Multi-Modal Synthesis</h3>
            <p className="text-[var(--text-muted)] text-lg">
              Generate text-to-3D, video-to-video, and prompt-to-audio concurrently from a single interface.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-6 h-auto md:h-44">
            <div className="flex-1 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[160px]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
              <div className="flex justify-between items-center w-full mb-4 relative z-10">
                <div className="text-xs font-medium text-slate-500 tracking-wider uppercase">Render Status</div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-full pt-4 relative z-10">
                <div className="bg-purple-400/30 w-full h-[80%] rounded-t-sm" />
                <div className="w-full bg-blue-400/50 rounded-t-sm h-[100%] relative">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]" />
                </div>
                <div className="w-full bg-pink-400/30 rounded-t-sm h-[60%]" />
                <div className="w-full bg-emerald-400/30 rounded-t-sm h-[40%]" />
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
              <div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">Asset Pipeline</div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-700">
                  <Icon icon="solar:box-linear" width="16" height="16" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-1.5 w-full bg-slate-300 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-slate-200 rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
                  <Icon icon="solar:music-note-linear" width="16" height="16" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-1.5 w-5/6 bg-slate-300 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-slate-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel flex flex-col transition-all duration-1000 group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <Icon icon="solar:gallery-wide-linear" width="24" height="24" className="text-slate-700" />
            </div>
            <h3 className="text-2xl font-normal text-[var(--primary)] mb-3 tracking-tight mt-4">Universal Library</h3>
            <p className="text-[var(--text-muted)] font-light">Organize, version, and share generated assets effortlessly.</p>
          </div>
          <div className="flex w-full h-44 mt-10 relative perspective-[1000px] items-end justify-center">
            <div className="transition-transform duration-500 group-hover:-translate-y-4 bg-slate-50/50 w-[85%] h-24 border-slate-300/30 border rounded-xl absolute bottom-16 shadow-sm" />
            <div className="transition-transform duration-500 group-hover:-translate-y-2 bg-slate-50/80 w-[92%] h-24 border-slate-200/50 border rounded-xl absolute bottom-8 shadow-md backdrop-blur-md" />
            <div className="absolute w-full bottom-0 h-24 bg-white/80 border border-white/80 rounded-xl backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center px-6 gap-4">
              <div className="flex bg-slate-50 w-12 h-12 border-slate-200 border rounded-xl shadow-inner items-center justify-center">
                <Icon icon="solar:folder-with-files-linear" width="24" height="24" className="text-slate-500" />
              </div>
              <div className="space-y-2.5 flex-1">
                <div className="h-2.5 bg-slate-300/80 w-1/2 rounded-full" />
                <div className="h-2 w-1/3 bg-slate-200/80 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel flex flex-col transition-all duration-1000 group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <Icon icon="solar:share-circle-linear" width="24" height="24" className="text-slate-700" />
            </div>
            <h3 className="text-2xl font-medium text-[var(--primary)] mb-3 tracking-tight mt-4">Node-Based Workflows</h3>
            <p className="text-[var(--text-muted)]">Connect models visually to build complex generative pipelines.</p>
          </div>
          <div className="mt-10 space-y-3">
            <div className="flex items-center justify-between bg-white/70 border border-white p-4 rounded-xl shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <Icon icon="solar:videocamera-linear" width="16" height="16" className="text-slate-600" />
                </div>
                <div className="h-2.5 w-24 bg-slate-700 rounded-full" />
              </div>
              <div className="w-11 h-6 bg-slate-700 rounded-full relative shadow-inner">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow border border-slate-200" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-white/40 border border-white/60 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
                  <Icon icon="solar:music-notes-linear" width="16" height="16" />
                </div>
                <div className="h-2 w-28 bg-slate-400 rounded-full" />
              </div>
              <div className="w-11 h-6 bg-slate-200 rounded-full relative shadow-inner border border-slate-300">
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm border border-slate-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel md:col-span-2 flex flex-col transition-all duration-1000 group rounded-[2rem] p-10 gap-6">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <Icon icon="solar:server-square-linear" width="24" height="24" className="text-slate-700" />
            </div>
            <h3 className="text-2xl font-medium text-slate-900 mb-2 mt-4">Cloud Render Farm</h3>
            <p className="text-slate-500 max-w-lg">
              Distributed rendering infrastructure ensuring ultra-fast generation times for 4K video and high-poly 3D models.
            </p>
          </div>

          <div className="mt-4 flex flex-col md:flex-row gap-5 h-auto md:h-48">
            <div className="flex-[2] bg-white/60 border border-white/80 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-sm min-h-[160px]">
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 15,30 L 40,60 L 65,35 L 85,75" stroke="#cbd5e1" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
              </svg>
              <div className="absolute top-[30%] left-[15%] w-3.5 h-3.5 rounded-full bg-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.4)] border border-white" />
              <div className="absolute top-[60%] left-[40%] w-5 h-5 rounded-full bg-white border-2 border-slate-200 shadow-[0_0_20px_rgba(148,163,184,0.3)] flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-ping" />
                <div className="w-2 h-2 bg-slate-500 rounded-full absolute" />
              </div>
            </div>

            <div className="flex-[1] flex flex-col gap-4">
              <div className="bg-white/60 border border-white/80 rounded-xl p-5 flex-1 flex flex-col justify-center shadow-sm">
                <div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">Avg Frame Gen</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-medium text-slate-800">42</span>
                  <span className="text-sm font-medium text-slate-500">ms</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-[85%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
