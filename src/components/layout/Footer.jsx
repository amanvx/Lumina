import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200 pt-10 pb-10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400 font-light">© 2026 Lumina AI Studio. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Icon icon="solar:twitter-linear" width="20" height="20" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Icon icon="solar:link-circle-linear" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
