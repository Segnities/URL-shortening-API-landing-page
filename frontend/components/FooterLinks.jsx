import React from 'react';

import footerLinks from '../data/footerLinks';

export default function FooterLinks() {
  return (
    <React.Fragment>
      {footerLinks.map((linkSection) => (
        <nav key={linkSection.id} className="flex flex-col gap-2">
          <h4 className="text-base font-semibold text-white">{linkSection.title}</h4>
          {
            linkSection.links.map(link => (
              <a
                key={link.id}
                href="#"
                className="text-sm text-gray-500 hover:text-cyan-500"
              >
                {link.title}
              </a>
            ))
          }
        </nav>
      ))}
    </React.Fragment>
  );
}
