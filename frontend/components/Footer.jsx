import footerLinks from '../data/footerLinks';
import footerSocial from '../data/footerSocial';
import Image from 'next/image';
import FooterLinks from './FooterLinks';
import FooterSocialIcons from './FooterSocialIcons';

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-10 md:gap-0 text-center md:text-left md:flex-row justify-around md:h-80 bg-very-dark-violet p-8 md:p-24 w-full">
      <h3 className="text-3xl text-white font-bold">Shortly</h3>
      <FooterLinks />
      <FooterSocialIcons />
    </footer>
  );
}
