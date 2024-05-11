
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function CameAsYouAre() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
       
        <h5 className='fst-italic'> came as you are (nirvana) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: F#m </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: F#m7(11)/E  A9 </p>
                <p className='opacity-25 mb-0 pb-0'> F#m7(11)/E  A9 </p>
                <p className='opacity-25'> B9 D B9 D  </p>

                <p className='mb-0 pb-0'>Come as you are, as you were</p>
                <p className='mb-0 pb-0'>As I want you to be</p>
                <p className='mb-0 pb-0'>As a friend, as a friend</p>
                <p>As an old enemy</p>

                <p className='mb-0 pb-0'>Take your time, hurry up</p>
                <p className='mb-0 pb-0'>Choice is yours, don't be late</p>
                <p>Take a rest, as a friend</p>

                <p className='mb-0 pb-0'>As an old memory,         yeah</p>
                <p className='mb-0 pb-0'>memory,         yeah</p>
                <p className='mb-0 pb-0'>memory,         yeah</p>
                <p>memory,         yeah</p>

                <p className='mb-0 pb-0'>Come doused in mud, soaked in bleach</p>
                <p className='mb-0 pb-0'>As I want you to be</p>
                <p>As a trend, as a friend     </p>           

                <p className='mb-0 pb-0'>As an old memory,         yeah</p>
                <p className='mb-0 pb-0'>memory,         yeah</p>
                <p className='mb-0 pb-0'>memory,         yeah</p>
                <p>memory,         yeah</p>

                <p className='mb-0 pb-0'>And I swear that I don't have a gun</p>
                <p className='mb-0 pb-0'>No, I don't have a gun</p>
                <p>No, I don't have a gun</p>
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
  )
}

export default CameAsYouAre


