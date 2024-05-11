
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function HeavensDoors() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
       
        <h5 className='fst-italic '> knockin' on heaven s door (bob dylan) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: G</p>
                <p className='opacity-25'>Intro: G  D Am# G D C</p>

                <p className='my-0 py-0' >Mama, take this badge off of me</p>
                <p className='my-0 py-0' >Cause I can't use it anymore</p>
                <p className='my-0 py-0' >It's getting dark, too dark to see</p>
                <p> I feel like I'm knocking on heaven's door</p>


                <p className='my-0 py-0' >Knock, knock, knocking on heaven's door</p>
                <p className='my-0 py-0' >Knock, knock, knocking on heaven's door</p>
                <p className='my-0 py-0' >Knock, knock, knocking on heaven's door</p>
                <p> Knock, knock, knocking on heaven's door</p>


                <p className='my-0 py-0' >Mama, put that gun to the ground</p>
                <p className='my-0 py-0' >I can't shoot them anymore</p>
                <p className='my-0 py-0' >There's a long black cloud coming on down</p>
                <p> I feel like I'm knocking on heaven's door</p>

                <p className='my-0 py-0' >Knock, knock, knocking on heaven's door</p>
                <p className='my-0 py-0' >Knock, knock, knocking on heaven's door</p>
                <p className='my-0 py-0' >Knock, knock, knocking on heaven's door</p>
                <p> Knock, knock, knocking on heaven's door</p>

                

        

                





                
     
     

            

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

export default HeavensDoors


