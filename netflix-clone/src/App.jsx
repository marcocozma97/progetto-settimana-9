import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100"> 
      <MyNavbar />
      
      <main className="container-fluid px-4 py-4">
        <h2>Le nostre Saghe</h2>
        <p>Qui presto arriveranno i film...</p>
      </main>

      <MyFooter />
    </div>
  );
}

export default App;