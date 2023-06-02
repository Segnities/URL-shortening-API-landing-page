export default function BoostBg({ children, className }) {
  const rootClass = "bg-cover bg-[url('/img/bg-boost-mobile.svg')] md:bg-[url('/img/bg-boost-desktop.svg')] bg-dark-violet " + className;

  return (
    <div className={rootClass}>
      {children}
    </div>
  );
}
