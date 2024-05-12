
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function HowCouldIKnow() {
  return (
    <div className="App">
      <header className="App-header-english-list p-2 ">
       
        <h5 className='fst-italic pb-1'> how could i know (raul seixas) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: Em </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: G D C G D</p>
                <p className='opacity-25 mb-0 pb-0'> G D Em B F# D  </p>
                <p className='opacity-25 mb-0 pb-0'> G C G C G D  </p>
                <p className='opacity-25 mb-0 pb-0'> G C G C G D D7  </p>
                <p className='opacity-25'> G D Em B </p>

                            
                <p className='mb-0 pb-0'>Reformulation rearrange the</p>
                <p className='mb-0 pb-0'>game you're in</p>
                <p className='mb-0 pb-0'>Let us start from the begin</p>
                <p className='mb-0 pb-0'>With confidence you'll win</p>
                <p className='mb-0 pb-0'>That's the reason you</p>
                <p>were born</p>

                <p className='mb-0 pb-0'>Cause Jesus Christ man won't</p>
                <p className='mb-0 pb-0'>be coming</p>
                <p className='mb-0 pb-0'>Back no more</p>
                <p className='mb-0 pb-0'>He set up his proper laws</p>
                <p className='mb-0 pb-0'>And you know well that he did</p>
                <p className='mb-0 pb-0'>just what</p>
                <p>He should have done</p>
                        
                <p className='mb-0 pb-0'>As I was growing and my hair was</p>
                <p className='mb-0 pb-0'>getting longer</p>
                <p className='mb-0 pb-0'>I was feeling so much stronger</p>
                <p className='mb-0 pb-0'>I could carry my guitar and I knew</p>
                <p>That I could sing</p>

                <p className='mb-0 pb-0'>But hey how could I know</p>
                <p className='mb-0 pb-0'>The wind would blow with the rain</p>
                <p className='mb-0 pb-0'>Hey how could I see</p>
                <p className='mb-0 pb-0'>What would they make</p>
                <p>out of me</p>

                <p className='mb-0 pb-0'>When I was little used to dream I</p>
                <p className='mb-0 pb-0'>was a king</p>
                <p className='mb-0 pb-0'>Now they taught me how to sing</p>
                <p className='mb-0 pb-0'>Think I've got most everything</p>
                <p className='mb-0 pb-0'>I could ever ask for</p>
                <p className='mb-0 pb-0'>You've got your pencil your guitar</p>
                <p className='mb-0 pb-0'>Your amplifier</p>
                <p className='mb-0 pb-0'>Searching for the lousy liars</p>
                <p className='mb-0 pb-0'>You will set this world on fire</p>
                <p>Like Nero did to Rome Yeah</p>

                <p className='mb-0 pb-0'>But hey how could I know</p>
                <p className='mb-0 pb-0'>My eyes could see in the dark</p>
                <p className='mb-0 pb-0'>Hey don't press on me</p>
                <p>I'm not to blame can't you see</p>

                <p className='mb-0 pb-0'>It's been so long now</p>
                <p className='mb-0 pb-0'>Since the latest red has gone</p>
                <p className='mb-0 pb-0'>Who knows you'll be the next</p>
                <p>To go down in history</p>


               
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

export default HowCouldIKnow


