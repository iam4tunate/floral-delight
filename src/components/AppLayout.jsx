import Footer from './Footer';
import Navbar from './Navbar';

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className='pt-[80px] relative'>{children}</main>
      <Footer />
    </div>
  );
}
