import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/products" component = {Product}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Redirect to = "/" />

      </Switch>
      <Footer/>
    </>
  );
}

export default App;
