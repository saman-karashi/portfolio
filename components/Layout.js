import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
     <Navbar />
     <main className='max-w-[1200px] mx-auto'>
        {children}
     </main>
     <Footer />
    </>
  )
}

export default Layout