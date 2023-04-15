import './App.css';
import Body from './Main/Body';
import Header from './Main/Header';
import Deal from './Main/Deal';
import Testimonial from './Main/Testimonial';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <br />
      <Deal />
      <br />
      <Testimonial />
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;
