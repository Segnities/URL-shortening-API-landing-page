import links from '../../data/links';

export default function DesktopMenu() {
  return (
    <nav className="flex items-center">
      <ul className="flex justify-between px-8 items-center">
        {
          links.map((link) => (
            <li
              className="text-base first-letter:uppercase font-semibold  cursor-pointer mx-3 hover:text-very-dark-violet "
              key={link.id}
            >
              <a
                href="#"
                className="text-base text-grayish-violet font-semibold cursor-pointer hover:text-dark-violet first-letter:uppercase">
                {link.title}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
