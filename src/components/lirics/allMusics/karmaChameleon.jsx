
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function KarmaChameleon() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
       
        <h5 className='fst-italic'> karma chameleon (culture club) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: A </p>
                <p className='opacity-25 mb-0 pb-0'> Bd F Bd F Bd Eb F Eb F Eb F Cm Gm F </p>

                <p className="mb-0 pb-0">Theres a loving in your eyes all the way</p>
                <p className="mb-0 pb-0">If I listen to your lies would you say</p>
                <p className="mb-0 pb-0">I'm a man without conviction</p>
                <p className="mb-0 pb-0">I'm a man who doesn't know</p>
                <p className="mb-0 pb-0">How to sell a contradiction</p>
                <p className="mb-0 pb-0">You come and go</p>
                <p>You come and go</p>

                <p className='opacity-25 mb-0 pb-0'> Bd F/A Gm Cm7 Bd F </p>
                <p className="mb-0 pb-0">Karma Karma Karma Karma</p>
                <p className="mb-0 pb-0">Karma Chameleon</p>
                <p className="mb-0 pb-0">You come and go</p>
                <p classname="mb-0 pb-0">You come and go</p>
                <p className='opacity-25 mb-0 pb-0'> Bd Dm Gm7 Cm7 Bd F </p>
                <p className="mb-0 pb-0">Loving would be easy</p>
                <p className="mb-0 pb-0">If your colours were like my dream</p>
                <p className="mb-0 pb-0">Red, gold and green</p>
                <p>Red, gold and green</p>

                <p className="mb-0 pb-0">Didn't hear your wicked words every day</p>
                <p className="mb-0 pb-0">And you used to be so sweet I heard you say</p>
                <p className="mb-0 pb-0">That my love was an addiction</p>
                <p className="mb-0 pb-0">When we cling our love is strong</p>
                <p className="mb-0 pb-0">When you go you're gone forever</p>
                <p className="mb-0 pb-0">You string along</p>
                <p>You string along</p>

                <p className='opacity-25 mb-0 pb-0'> Bd F/A Gm Cm7 Bd F </p>
                <p className="mb-0 pb-0">Karma Karma Karma Karma</p>
                <p className="mb-0 pb-0">Karma Chameleon</p>
                <p className="mb-0 pb-0">You come and go</p>
                <p className='mb-0 pb-0'>You come and go</p>
                <p className='opacity-25 mb-0 pb-0'> Bd Dm Gm7 Cm7 Bd F </p>
                <p className="mb-0 pb-0">Loving would be easy</p>
                <p className="mb-0 pb-0">If your colours were like my dream</p>
                <p className="mb-0 pb-0">Red, gold and green</p>
                <p>Red, gold and green</p>

                <p className='opacity-25 mb-0 pb-0'> Eb Dm Cm Gm Eb Dm Cm Gm F </p>

                <p className="mb-0 pb-0">Every day is like survival</p>
                <p className="mb-0 pb-0">You're my lover, not my rival</p>
                <p className="mb-0 pb-0">Every day is like survival</p>
                <p>You're my lover, not my rival</p>

                <p className='opacity-25 mb-0 pb-0'> Bb F Bb F Bb </p>

                <p className="mb-0 pb-0">Im a man without conviction</p>
                <p className="mb-0 pb-0">I'm a man who doesn't know</p>
                <p className="mb-0 pb-0">How to sell a contradiction</p>
                <p className="mb-0 pb-0">You come and go</p>
                <p>You come and go</p>

                <p className='opacity-25 mb-0 pb-0'> Bd F/A Gm Cm7 Bd F </p>
                <p className="mb-0 pb-0">Karma Karma Karma Karma</p>
                <p className="mb-0 pb-0">Karma Chameleon</p>
                <p className="mb-0 pb-0">You come and go</p>
                <p className='mb-0 pb-0'>You come and go</p>
                <p className='opacity-25 mb-0 pb-0'> Bd Dm Gm7 Cm7 Bd F </p>
                <p className="mb-0 pb-0">Loving would be easy</p>
                <p className="mb-0 pb-0">If your colours were like my dream</p>
                <p className="mb-0 pb-0">Red, gold and green</p>
                <p>Red, gold and green</p>

              



            

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

export default KarmaChameleon


