import './App.css';
import Navbar from './components/Navbar';
import TabComponent from './components/TabComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TabComponent />
      <a style={{ marginTop: 15, display: "block", color: "#fff", background: "#171717", textDecoration: "none" }} href="https://icons8.com/icon/6GdeXmcTxW9h/head-to-head">Head to Head icon by Icons8</a>
    </div>
  );
}

export default App;
