import Link from "next/link";
import { NAV_LINKS, CONTACT, SITE_NAME, SERVICE_TIMES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-church-maroon border-t border-church-burgundy/30">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-heading text-xl text-church-cream">
                {SITE_NAME}
              </h3>
              <p className="text-xs text-church-cream/60">Milton, WV</p>
            </div>
            <p className="text-sm text-church-cream/80 leading-relaxed max-w-xs">
              A welcoming church family with a large vision for the lost and a
              passion to help every believer achieve their God-given purpose.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h4 className="font-semibold text-church-cream text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-church-cream/80 hover:text-church-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/visit"
                  className="text-sm text-church-gold hover:text-church-gold-light transition-colors font-medium"
                >
                  Plan a Visit
                </Link>
              </li>
              <li>
                <a
                  href={CONTACT.giving}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-church-gold hover:text-church-gold-light transition-colors font-medium"
                >
                  Give Online
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h4 className="font-semibold text-church-cream text-sm uppercase tracking-wider">
              Service Times
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {SERVICE_TIMES.map((item) => (
                <li key={item.service} className="flex flex-col gap-0.5">
                  <span className="text-sm text-church-cream/80">
                    {item.service}
                  </span>
                  <span className="text-xs text-church-cream/60">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h4 className="font-semibold text-church-cream text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm text-church-cream/80 hover:text-church-cream transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-sm text-church-cream/80">
                {CONTACT.fullAddress}
              </li>
              <li>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-church-cream/80 hover:text-church-cream transition-colors"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-church-burgundy/30 pt-6 sm:pt-8">
          <p className="text-center text-xs text-church-cream/60">
            &copy; 2026 The Church In The Valley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
