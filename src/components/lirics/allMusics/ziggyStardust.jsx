
import './overall.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

function ZiggyStardust() {
  return (
    <div className="App">
      <header className="App-header-english-list p-2 ">
       
        <h5 className='fst-italic pb-1'> ziggy stardust (david bowie) </h5>

        <section 
          style={{ height:"600px" }}
          className='d-flex flex-column overflow-y-auto p-2 list-scrollable' >

          <div className='text-white text-start p-1 fs-6 fst-italic '>

                <p className='mb-0 pb-0 opacity-25'>Tone: G </p>
                <p className='opacity-25 mb-0 pb-0'>Intro: G D Cadd9 Bm Am </p>
                <p className='opacity-25 mb-0 pb-0 '> G Bm C D G Em A C  </p>
                <p className='opacity-25'> Am G F G Am G F G Am G F G D E </p>
                         
                <p className="mb-0 pb-0">Ziggy played guitar,    jamming good</p>
                <p className="mb-0 pb-0">with Wierd and Gilly and the Spiders from Mars</p>
                <p className="mb-0 pb-0">He played it left hand, but made it too far</p>
                <p>became the special man, and we were Ziggy's band</p>

                <p className="mb-0 pb-0">Ziggy really sang, with screwed up eyes and</p>
                <p className="mb-0 pb-0">screwed down hairdo like some cat from Japan</p>
                <p className="mb-0 pb-0">He could lick 'em by smiling, he could leave 'em to hang</p>
                <p>He came on so loaded man, well hung and snow-white tan </p>

                <p className="mb-0 pb-0">But where were the spiders</p>
                <p className="mb-0 pb-0">while the fly tried to break our balls</p>
                <p className="mb-0 pb-0">Just the beer light to guide us</p>
                <p>And so we bitched about his fans and should we crush his sweet hands</p>

                <p className="mb-0 pb-0">Ziggy played for time, jiving us that</p>
                <p className="mb-0 pb-0">we were voodoo and the kids was just crass</p>
                <p className="mb-0 pb-0">He was the nazz with God-given ass</p>
                <p>He took it all too far but boy could he play guitar</p>

                <p className="mb-0 pb-0">Making love with his ego</p>
                <p className="mb-0 pb-0">Ziggy sucked up into his mind</p>
                <p className="mb-0 pb-0">Like a leper messiah</p>
                <p>When the kids had killed the man I had to break up the band</p>
             
                

              

                


               
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

export default ZiggyStardust


