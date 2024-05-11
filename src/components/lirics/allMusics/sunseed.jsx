
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function Sunseed() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
       
        <h5 className='fst-italic'> sunseed (raul seixas) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: D</p>
                <p className='opacity-25 mb-0 pb-0'>Intro: D G</p>
                <p className='opacity-25 mb-0 pb-0'> G A G A F#m G D  </p>
                <p className='opacity-25 mb-0 pb-0'> G A G A F#m G D A </p>
                <p className='opacity-25 mb-0 pb-0'> E G F#m E G F#m  </p>
                <p className='opacity-25'>G Gm6 D </p>



                <p className='mb-0 pb-0' >you were born at the ending</p>
                <p className='mb-0 pb-0' >As the curtain came down</p>
                <p className='mb-0 pb-0' >I can see you're confused girl but it's all right</p>
                <p> It's only the chimes</p>

                <p className='mb-0 pb-0' >Announcing a new time</p>
                <p> You see now</p>

                <p className='mb-0 pb-0' >Boats are cruising the deserts</p>
                <p className='mb-0 pb-0' >Oceans cracked by the heat</p>
                <p className='mb-0 pb-0' >People drowning in raindrops</p>
                <p className='mb-0 pb-0' >But it's all right</p>
                <p> It's not a defeat</p>

                <p className='mb-0 pb-0' >Stand on your own feet</p>
                <p> Right now the sun doesn't shine</p>

                <p className='mb-0 pb-0' >He's loaded on wine</p>
                <p className='mb-0 pb-0' >Though I can laugh in the storm</p>
                <p className='mb-0 pb-0' >Bacause I was born</p>
                <p className='mb-0 pb-0' >When the sun used to</p>
                <p className='mb-0 pb-0' >Shine in June</p>


          

                
            

          </div>
            
          
        </section>            

        <div className='mt-5'>
            <Link 
                to='/englishList'
                target='_self'
                className='bg-white text-black p-2 m-1 rounded-2' >
                <RiArrowGoBackLine className='fs-4'/>
            </Link>                       
        </div>
        
        
      </header>

    
    </div>
  );
}

export default Sunseed


