import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function BlogLayout() {
  const location = useLocation();
  const isRootBlogPage = location.pathname === '/case-studies';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header/>
      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  );
} 