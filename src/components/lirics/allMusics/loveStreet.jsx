
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function Lovestreet() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
       
        <h5 className='fst-italic'> love street (the doors) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: C</p>
                <p className='opacity-25'>Intro:  Dm   C   Cm   A#</p>

                <p className='mb-0 pb-0 opacity-25'> Dm C Cm A#</p>                
                <p className='mb-0 pb-0'>She lives on Love Street,</p>
                <p className='my-0 py-0'>lingers long on Love Street.</p>
                <p className='my-0 py-0'>She has a house and garden,</p>
                <p>I would like to see what happens.</p>

                <p className='mb-0 pb-0' >Instrumental</p>
                <p className='opacity-25'>Em  D  Dm  C (1x)</p>

                <p className='mb-0 pb-0 opacity-25'> Dm C Cm A#</p>
                <p className='my-0 py-0'>She has robes and she has monkeys,</p>
                <p>lazy diamond studded flunkies.</p>

                <p className="mb-0 pb-0 opacity-25"> Cm Dm  Eb A#</p>
                <p className="mb-0 pb-0 opacity-25"> Cm Dm  Eb D7</p>

                <p className='mb- mb-0'>She has wisdom and knows what to do,</p>
                <p>she has me and she has you.</p>

                <p className="mb-0 pb-0 opacity-25"> Dm C Cm A# </p>
                <p className='mb-0 pb-0'>I see you live on Love Street,</p>
                <p className='my-0 pb-0'>there's a store where the creatures meet.</p>
                <p className='my-0 pb-0'>I wonder what they do in there,</p>
                <p className='my-0 pb-0'>summer sunday and a year.</p>
                <p>I guess I like it fine  so far.</p>

                <p className='opacity-25'>  Cm   A#  F*   G   G(sus9)   G   G(sus4)   G   G(sus9)   G </p>


                <p className="mb-0 pb-0 opacity-25"> Em D Dm C </p>                            
                <p className='mb-0 pb-0'>She lives on Love Street,</p>
                <p className='mb-0 pb-0'>lingers long on Love Street.</p>
                <p className='mb-0 pb-0'>She has a house and garden,</p>
                <p>I would like to see what happens.</p>

                <p className="opacity-25"> Em D Dm C </p>      


                





                
     
     



    
     



                    


                   
                 


                    


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

export default Lovestreet


