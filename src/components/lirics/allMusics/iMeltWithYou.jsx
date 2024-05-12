
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function IMeltWithYou() {
  return (
    <div className="App">
      <header className="App-header-english-list p-2 ">
       
        <h5 className='fst-italic pb-1'> i melt with you (modern english) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: C </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: C F C F </p>
                <p className='opacity-25'> C F C F </p>

                <p className="mb-0 pb-0">Moving forward using all my breath </p>
                <p className="mb-0 pb-0">Making love to you was never second best </p>
                <p className="mb-0 pb-0">I saw the world thrashing all around your face </p>
                <p>Never really knowing it was always mesh and lace </p>

                <p className="mb-0 pb-0">I'll stop the world and melt with you </p>
                <p className="mb-0 pb-0">You've seen the difference and it's getting better all the time </p>
                <p className="mb-0 pb-0">There's nothing you and I won't do </p>
                <p>I'll stop the world and melt with you </p>

                <p className="mb-0 pb-0"> Dream of better lives the kind which never Hate </p>
                <p className="mb-0 pb-0"> Dropped in the state of imaginary grace </p>
                <p className="mb-0 pb-0"> I made a pilgrimage to save this human Race </p>
                <p> Never comprehending a race that long gone by </p>
 
                <p className="mb-0 pb-0"> I'll stop the world and melt with you </p>
                <p className="mb-0 pb-0"> You've seen the difference and it's getting Better all the time </p>
                <p className="mb-0 pb-0"> There's nothing you and I won't do </p>
                <p> I'll stop the world and melt with you</p>

                <p className='opacity-25'> Em Am Em Am </p>

                <p>The future's open wide</p>

                <p className='opacity-25'> C F C F </p>

                <p className="mb-0 pb-0"> I'll stop the world and melt with you </p>
                <p className="mb-0 pb-0"> You've seen the difference and it's getting better all the time </p>
                <p className="mb-0 pb-0"> There's nothing you and I won't do </p>
                <p> I'll stop the world and melt with you </p>

                <p className='opacity-25'> Em Am Em Am </p>

                <p>The future's open wide</p>

                <p className="mb-0 pb-0">I'll stop the world and melt with you  </p>
                <p className="mb-0 pb-0">You've seen the difference and it's getting better all the time  </p>
                <p className="mb-0 pb-0">There's nothing you and I won't do  </p>
                <p className="mb-0 pb-0">I'll stop the world and melt with you  </p>
                <p>I'll stop the world and melt with you..</p>

          
                

                
                

              

                


               
          </div>
                      
        </section>            

        <div className='mt-4 mb-3'>
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

export default IMeltWithYou


