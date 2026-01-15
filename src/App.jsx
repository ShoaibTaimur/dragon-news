import './App.css'
import { Outlet } from 'react-router';
import Header from './Components/Header/Header';
import LatestNews from './Components/LatestNews/LatestNews';
import Navbar from './Components/Navbar/Navbar';
import LeftAsset from './Components/homelayout/LeftAsset';
import RightAsset from './Components/homelayout/RightAsset';

function App() {
  return (
    <div>
      <Header />
      <section className='w-11/12 mx-auto my-3'>
        <LatestNews />
      </section>
      <nav className='w-11/12 mx-auto my-3'>
        <Navbar />
      </nav>
      <main className='w-11/12 mx-auto my-3 *:border grid grid-cols-12'>
        <aside className='col-span-3'>
          <LeftAsset />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className='col-span-3'>
          <RightAsset />
        </aside>
      </main>
    </div>
  )
}

export default App
