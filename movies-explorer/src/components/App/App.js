import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <NotFound/>
      <Header/>
      <Main/>
      <Movies/>
      <Footer/>
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
