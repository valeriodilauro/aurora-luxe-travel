export default function Footer() {
  return (
    <footer
      className="relative border-t border-aurora-border py-16"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-aurora flex items-center justify-center bg-gradient-to-br from-aurora-cyan via-aurora-purple to-aurora-magenta">
                <span className="text-white font-heading font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-semibold text-white text-lg tracking-wide">
                AURORA <span className="text-aurora-gold font-normal">LUXE</span>
              </span>
            </div>
            <p className="font-body text-aurora-muted leading-relaxed max-w-md">
              Ultra-premium concierge travel for those who demand the extraordinary.
              Every journey is a masterpiece — crafted exclusively for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Destinations", "Experiences", "Membership", "Concierge"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-aurora-muted hover:text-aurora-cyan transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-aurora-muted text-sm">
              <li>concierge@auroraluxe.travel</li>
              <li>+44 20 7946 0958</li>
              <li>London • Dubai • Tokyo</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-aurora-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-aurora-muted/50 text-xs">
              © {new Date().getFullYear()} Aurora Luxe Travel. All rights reserved.
            </p>

            {/* Image Credits */}
            <div className="text-center md:text-right">
              <p className="font-body text-aurora-muted/40 text-xs">
                Images via{" "}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aurora-muted/60 hover:text-aurora-cyan/60 transition-colors"
                >
                  Unsplash
                </a>{" "}
                — All photos used under Unsplash license.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
