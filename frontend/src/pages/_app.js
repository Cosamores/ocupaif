import '@/styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
