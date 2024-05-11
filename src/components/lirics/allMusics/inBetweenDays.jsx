
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function InBetweenDays() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
       
        <h5 className='fst-italic'> in between days (the cure) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: A </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: A D A D </p>
                <p className='opacity-25 mb-0 pb-0'> A D A D  </p>
                <p className='opacity-25'> Bm E Bm E  </p>

                <p className='mb-0 pb-0'>yesterday I got so old I felt like I could die</p>
                <p className='mb-0 pb-0'>Yesterday I got so old it made me want to cry</p>
                <p className='mb-0 pb-0'>Go on, go on, just walk away</p>
                <p className='mb-0 pb-0'>Go on, go on, your choice is made</p>
                <p className='mb-0 pb-0'>Go on, go on, and disappear</p>
                <p> Go on, go on, away from here</p>
                
                <p className='mb-0 pb-0'>And I know I was wrong when I said it was true</p>
                <p className='mb-0 pb-0'>That it couldn't be me and be her in between without you</p>
                <p> Without you</p>

                <p className='mb-0 pb-0'>Yesterday I got so scared I shivered like a child</p>
                <p className='mb-0 pb-0'>Yesterday away from you it froze me deep inside</p>
                <p className='mb-0 pb-0'>Come back, come back, don't walk away</p>
                <p className='mb-0 pb-0'>Come back, come back, come back today</p>
                <p className='mb-0 pb-0'>Come back, come back, why can't you see</p>
                <p> Come back, come back, come back to me</p>
                
                <p className='mb-0 pb-0'>And I know it was wrong when I said it was true</p>
                <p className='mb-0 pb-0'>That it couldn't be me and be her in between without you</p>
                <p> Without you</p>


                


          

                
            

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

export default InBetweenDays


