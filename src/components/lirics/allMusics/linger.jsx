
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function linger() {
  return (
    <div className="App">
      <header className="App-header-english-list p-2 ">
       
        <h5 className='fst-italic pb-1'> linger (the cranberries) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: D </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: A6 A A6 A C D </p>
                <p className='opacity-25'> D A C G </p>
          
                <p className='mb-0 pb-0'>If you, if you could return</p>
                <p className='mb-0 pb-0'>Don't let it burn, don't let it fade</p>
                <p className='mb-0 pb-0'>I'm sure I'm not being rude</p>
                <p className='mb-0 pb-0'>But it's just your attitude</p>
                <p className='mb-0 pb-0'>It's tearing me apart</p>
                <p>It's ruining everyday</p>

                <p className='mb-0 pb-0'>I swore, I swore I would be true</p>
                <p className='mb-0 pb-0'>And honey so did you</p>
                <p className='mb-0 pb-0'>So why were you holding her hand?</p>
                <p className='mb-0 pb-0'>Is that the way we stand?</p>
                <p className='mb-0 pb-0'>Were you lying all the time?</p>
                <p>Was it just a game to you?</p>
                            
                <p className='mb-0 pb-0'>But I'm in so deep</p>
                <p className='mb-0 pb-0'>You know I'm such a fool for you</p>
                <p className='mb-0 pb-0'>You got me wrapped around your finger</p>
                <p className='mb-0 pb-0'>Do you have to let it linger?</p>
                <p className='mb-0 pb-0'>Do you have to? do you have to?</p>
                <p>Do you have to let it linger?</p>

                <p className='mb-0 pb-0'>Oh, I thought the world of you</p>
                <p className='mb-0 pb-0'>I thought nothing could go wrong</p>
                <p className='mb-0 pb-0'>But I was wrong, I was wrong </p>
                <p className='mb-0 pb-0'>If you, if you could get by</p>
                <p className='mb-0 pb-0'>Trying not to lie</p>
                <p className='mb-0 pb-0'>Things wouldn't be so confused</p>
                <p className='mb-0 pb-0'>And I wouldn't feel so used</p>
                <p className='mb-0 pb-0'>But you always really knew</p>
                <p>I just wanna be with you</p>

                <p className='mb-0 pb-0'>But I'm in so deep</p>
                <p className='mb-0 pb-0'>You know I'm such a fool for you</p>
                <p className='mb-0 pb-0'>You got me wrapped around your finger</p>
                <p className='mb-0 pb-0'>Do you have to let it linger?</p>
                <p className='mb-0 pb-0'>Do you have to? do you have to?</p>
                <p>Do you have to let it linger?</p>
                            
                

              

                


               
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

export default linger


