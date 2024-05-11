
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function TheManHeSoldTheWorld() {
  return (
    <div className="App">
      <header className="App-header-english-list p-2 ">
       
        <h5 className='fst-italic pb-1'> the man he sold the world (david bowie) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: C </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: A Dm F Dm </p>
                <p className='opacity-25  mb-0 pb-0'> A A7 Dm A A7 F </p>
                <p className='opacity-25 mb-0 pb-0'> C C7 A A7 Dm C  </p>
                <p className='opacity-25 mb-0 pb-0'> C F C# F C F C#  </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: A Dm F Dm </p>

                <p className='mb-0 pb-0'>We passed upon the stair</p>
                <p className='mb-0 pb-0'>We spoke of was and when</p>
                <p className='mb-0 pb-0'>Although i wasn't there</p>
                <p className='mb-0 pb-0'>He said i was his friend</p>
                <p className='mb-0 pb-0'>Which came as some surprise</p>
                <p className='mb-0 pb-0'>I spoke into his eyes</p>
                <p className='mb-0 pb-0'>I thought you died alone</p>
                <p>A long long time ago</p>

                <p className='mb-0 pb-0'>oh no! not me</p>
                <p className='mb-0 pb-0'>i never lost control</p>
                <p className='mb-0 pb-0'>you're face to face</p>
                <p>With the man who sold the world  </p>

                <p className='mb-0 pb-0'>I laughed and shook his hand</p>
                <p className='mb-0 pb-0'>I made my way back home</p>
                <p className='mb-0 pb-0'>I searched for form and land</p>
                <p className='mb-0 pb-0'>For years and years i roamed</p>
                <p className='mb-0 pb-0'>I gazed a gazely stare</p>
                <p className='mb-0 pb-0'>At all the millions here</p>
                <p className='mb-0 pb-0'>We must have died alone</p>
                <p>A long long time ago</p>

                <p className='mb-0 pb-0'>Who knows, not me</p>
                <p className='mb-0 pb-0'>We never lost control</p>
                <p className='mb-0 pb-0'>You're face, to face</p>
                <p>With the man who sold the world</p>
                                                                                                         
              


                
               
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

export default TheManHeSoldTheWorld


