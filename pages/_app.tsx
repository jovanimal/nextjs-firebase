import NavBar from '../components/NavBar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: 'jovan' }}>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
