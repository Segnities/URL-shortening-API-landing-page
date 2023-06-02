import footerLinks from '../data/footerLinks';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 md:gap-0 text-center md:text-left md:flex-row justify-around md:h-80 bg-very-dark-violet p-8 md:p-24">
      <h3 className="text-3xl text-white font-bold">Shortly</h3>
      {footerLinks.map((linkSection) => (
        <nav key={linkSection.id} className="flex flex-col gap-2">
          <h4 className="text-base font-semibold text-white">{linkSection.title}</h4>
          {
            linkSection.links.map(link => (
              <a key={link.id} href="#" className="text-sm text-gray-500 hover:text-cyan-500">{link.title}</a>
            ))
          }
        </nav>
      ))}
    </footer>
  );
}
