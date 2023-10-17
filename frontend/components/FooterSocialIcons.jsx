import footerSocial from '../data/footerSocial';
import useHover from '../hooks/useHover';

export default function FooterSocialIcons() {

  const footerSocialIcons = footerSocial.map((social) => {
    const [hoverRef, isHovered] = useHover();

    return (
      <div className="text-white" key={social.id}>
        <a href={social.link} className="cursor-pointer hover:text-cyan-400" ref={hoverRef}>
          <svg xmlns={social.xmls} width={social.width} height={social.height}>
            <path
              d={social.d}
              fill={social.fill}
              className={`${isHovered ? 'fill-cyan-400' : 'fill-white'} transition-colors duration-150`}
            />
          </svg>
        </a>
      </div>
    )});

  return (
    <nav
      className="flex flex-row gap-8 items-center md:items-stretch justify-center md:justify-stretch"
    >
      {
        footerSocialIcons
      }
    </nav>
  );
}
