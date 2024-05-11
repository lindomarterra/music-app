import './firstPage.css';
import { PiGuitarBold } from "react-icons/pi";
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PiGuitarBold className="App-logo mb-2" />

        <p className='fst-italic' >
          playing <code>songs</code> and learning <code>musical teory!</code>
        </p>

        <div>
          <Link
            to='/chooseLang'
            terget='_self'
            className="App-link mx-1 text-decoration-none text-black fw-semibold fs-3 p-2 rounded-2">
            lirics
          </Link>

          <a
            className="App-link mx-1 text-decoration-none text-black fw-semibold fs-3 p-2 rounded-2 "
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            teory
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
