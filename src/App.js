import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Particles from 'react-particles-js'
import NavBar from './components/Navbar';
import Header from './components/Header'
import { isCompositeComponentWithType } from 'react-dom/test-utils';

function App() {
  return (
    <>
      <Particles className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "white",
              }
            }
          }
        }} />
      <NavBar />
      <Header />
    </>
  );
}

export default App;
