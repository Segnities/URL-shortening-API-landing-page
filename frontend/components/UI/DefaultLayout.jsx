import Footer from '../Footer';
import Nav from '../Nav';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Nav/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}