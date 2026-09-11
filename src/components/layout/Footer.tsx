import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t tag-border mt-20 bg-[#020202]">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">NOVUM</h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Streetwear d'alta gamma. Pezzi unici, design artigianale e stile dark underground.
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="tag-label text-gray-400 mb-2">Social</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            {/* TikTok Icon placeholder using SVG since Lucide doesn't have official TikTok sometimes */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="tag-label text-gray-400 mb-2">Info</h3>
          <Link href="/chi-siamo" className="text-sm text-gray-400 hover:text-white">Chi Siamo</Link>
          <Link href="/contatti" className="text-sm text-gray-400 hover:text-white">Contatti & Supporto</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
        </div>
      </div>
      <div className="border-t border-[#1a1a1a] py-4 text-center">
        <p className="tag-label text-gray-600">&copy; {new Date().getFullYear()} NOVUM STORE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
