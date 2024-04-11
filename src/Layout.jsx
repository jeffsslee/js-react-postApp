import Footer from '@/components/Footer';
import MainNav from '@/components/MainNav';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
  return (
    <>
      <MainNav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
