
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function Hurt() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
       
        <h5 className='fst-italic'> hurt (johnny cash) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: G </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: Am C D Am C D </p>
                <p className='opacity-25  mb-0 pb-0'> Am C D Am C D </p>
                <p className='opacity-25 mb-0 pb-0'> G Am7 F9 C G Am7 F9 G Am7 F9  </p>
                <p className='opacity-25'> G Am7 F9 G  </p>

                <p className='mb-0 pb-0' >I hurt myself today</p>
                <p className='mb-0 pb-0' >To see if I still feel</p>
                <p className='mb-0 pb-0' >I focus   on the pain</p>
                <p className='mb-0 pb-0' >The only thing that's real</p>
                <p className='mb-0 pb-0' >The needle tears a hole</p>
                <p className='mb-0 pb-0' >The old familiar sting</p>
                <p className='mb-0 pb-0' >Try to kill it   all away</p>
                <p>But I remember everything</p>

                <p className='mb-0 pb-0' >What have I become</p>
                <p className='mb-0 pb-0' >My sweetest friend?</p>
                <p className='mb-0 pb-0' >Everyone I know goes away in the end</p>
                <p className='mb-0 pb-0' >And you could have it all</p>
                <p className='mb-0 pb-0' >My empire of dirt</p>
                <p className='mb-0 pb-0' >I will let you down</p>
                <p>I will make you hurt</p>

                <p className='mb-0 pb-0' >I wear this crown of thorns</p>
                <p className='mb-0 pb-0' >Uon my liar's chair</p>
                <p className='mb-0 pb-0' >Fll of broken thoughts</p>
                <p className='mb-0 pb-0' >Icannot repair</p>
                <p className='mb-0 pb-0' >Bneath the stains of time</p>
                <p className='mb-0 pb-0' >Te feelings   disappear</p>
                <p className='mb-0 pb-0' >Yu are someone else</p>
                <p>Iam still right here</p>

                <p className='mb-0 pb-0' >What have I become</p>
                <p className='mb-0 pb-0' >My sweetest friend?</p>
                <p className='mb-0 pb-0' >Everyone I know goes away in the end</p>
                <p className='mb-0 pb-0' >And you could have it all</p>
                <p className='mb-0 pb-0' >My empire of dirt</p>
                <p className='mb-0 pb-0' >I will let you down</p>
                <p className='mb-0 pb-0' >I will make you hurt</p>
                <p className='mb-0 pb-0' >If I could start again</p>
                <p className='mb-0 pb-0' >A million miles away</p>
                <p className='mb-0 pb-0' >I would keep myself</p>
                <p>I would find a way</p>

               
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

export default Hurt


