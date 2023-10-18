import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>
          Nevin Sebastian
        </title>
        <meta name="google-site-verification" content="NWXNa5gqDV54GB5K2JVg7xmTJwC2IHfj4Y7jlpbSxnU" />
      </Helmet>
      <NavBar/>
      <Banner />
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
