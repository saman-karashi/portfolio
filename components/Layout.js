import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
     <Navbar />
     <main className='max-w-[1200px] mx-auto'>
        {children}
     </main>
    </>
  )
}

export default Layout