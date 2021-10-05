import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import notFound from './components/pageNowFound/notFound';
import About from './components/About/About';
import Faculty from './components/Faculty/Faculty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch></Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/faculty">
          <Faculty></Faculty>
        </Route>
        <Route path="/*">
          <notFound></notFound>
        </Route>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
