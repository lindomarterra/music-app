import './chooseLang.css';
import { PiGuitarBold } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PiGuitarBold className="App-logo mb-2" />

        <p className='fst-italic' >
           english or portuguese <code>lirics?</code>
        </p>

        <div>
          <Link
            to='/englishList'
            terget='_self'
            className="App-link mx-1 text-decoration-none text-black fw-semibold fs-3 px-4 py-2 rounded-2">
            EN
          </Link>

          <Link
            to='#'
            terget='_self'
            className="App-link mx-1 text-decoration-none text-black fw-semibold fs-3 px-4 py-2 rounded-2">
            PT
          </Link>          
        </div>

        <div className='mt-5 pt-5' >
            <Link 
                to='/'
                target='_self'
                className='bg-white text-black p-2 rounded-2' >
                <RiArrowGoBackLine className='fs-4'/>
            </Link>
        </div>
        
      </header>

    
    </div>
  );
}

export default App;


