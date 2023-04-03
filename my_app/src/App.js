import './App.css';
import Pageone from './Pageone';
import Detail from './Detail';
import Sectionui from './Sectionui';
import Sectionf from './Sectionf'
import Sectionb from './Sectionb';
import Sectiond from './Sectiond';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Pageone} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/Uidesign" exact component={Sectionui} />
        <Route path="/frontend" exact component={Sectionf} />
        <Route path="/backend" exact component={Sectionb} />
        <Route path="/database" exact component={Sectiond} />
      </div>
    </Router>
  );
}

export default App;
