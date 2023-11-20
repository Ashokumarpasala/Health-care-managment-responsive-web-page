import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Bmi from './components/Bmi';
import Excercise from './components/Excercise';
import Yoga from './components/Yoga';
import Health from './components/Health';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Bmi />
      <Excercise />
      <Yoga />
      <Health />
    </div>
  );
}

export default App;
