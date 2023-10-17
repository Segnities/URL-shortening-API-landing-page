export default function ShortenBg({ children, className }) {
  const rootClass = `bg-cover bg-[url('/img/bg-shorten-mobile.svg')] md:bg-[url('/img/bg-shorten-desktop.svg')] bg-dark-violet ${className}`;

  return (
    <div className={rootClass}>
      {children}
    </div>
  );
}
