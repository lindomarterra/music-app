
import './englishList.css'
import { PiGuitarBold } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function EnglishList() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">

        <PiGuitarBold className="App-logo mb-2"/>

        <p className='fst-italic' >
          <code className='fs-4' >songs in english:</code>
        </p>

        <section 
          style={{ height:"400px" }}
          className='d-flex flex-column overflow-y-auto p-3 list-scrollable' >
          <Link
            to='/loveStreet'
            target='_self'
            className='text-decoration-none fw-bold text-white p-2 '
            >
              love street (the doors)
          </Link>

          <Link
            to='/perfectday'
            target='_self'
            className='text-decoration-none fw-bold text-white p-2 '
            >
              perfect day (lou reed)
          </Link>
      
        
          
          
        </section>

        

    

        <div className='mt-5'>
            <Link 
                to='/chooseLang'
                target='_self'
                className='bg-white text-black p-2 rounded-2' >
                <RiArrowGoBackLine className='fs-4'/>
            </Link>
        </div>
        
        
      </header>

    
    </div>
  );
}

export default EnglishList


