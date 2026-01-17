import './App.css'
import { Outlet } from 'react-router';
import Header from './Components/Header/Header';
import LatestNews from './Components/LatestNews/LatestNews';
import Navbar from './Components/Navbar/Navbar';
import LeftAsset from './Components/homelayout/LeftAsset';
import RightAsset from './Components/homelayout/RightAsset';
import { Suspense } from 'react';

function App() {
  return (
    <div>
      <Header />
      {import.meta.env.VITE_name}
      <section className='w-11/12 mx-auto my-3'>
        <LatestNews />
      </section>
      <nav className='w-11/12 mx-auto my-3'>
        <Navbar />
      </nav>
      <main className='w-11/12 mx-auto my-3 flex sm:grid sm:grid-cols-12 gap-3'>
        <aside className='w-[40%] sm:w-full sm:col-span-3 sticky top-0 h-fit'>
          <LeftAsset />
        </aside>
        <section className="w-[60%] sm:w-full main sm:col-span-6">
          <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
            <Outlet />
          </Suspense>
        </section>
        <aside className='hidden sm:grid sm:col-span-3 sticky top-0 h-fit'>
          <RightAsset />
        </aside>
      </main>
    </div>
  )
}

export default App
