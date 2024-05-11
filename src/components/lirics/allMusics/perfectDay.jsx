import "./overall.css";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

function perfectDay() {
  return (
    <div className="App">
      <header className="App-header-english-list pt-2">
        <h5 className="fst-italic mb-2"> perfect day (lou reed) </h5>

        <section
          style={{ height: "600px" }}
          className="d-flex flex-column overflow-y-auto p-2 list-scrollable"
        >
          <div className="text-white text-start p-1 fs-6 fst-italic ">
            <p className="mb-0 pb-0 opacity-25">Tone: Db (in the shape of C)</p>
            <p className="mb-0 pb-0 opacity-25">Capo: 1 st fret </p>
            <p className="opacity-25">Intro: E Am E Am </p>

            <p className="mb-0 pb-0 opacity-25"> Am D G C </p>
            <p className="mb-0 pb-0 opacity-25"> F Dm E </p>
            <p className="mb-0 pb-0"> just a perfert day </p>
            <p className="my-0 py-0"> drink sangria in the park </p>
            <p className="my-0 py-0"> and then later, when it gets dark </p>
            <p> we go home </p>                                              

            <p className="mb-0 pb-0"> just a perfect day </p>
            <p className="mb-0 pb-0"> feed animal in the zoo </p>
            <p className="mb-0 pb-0"> and then later, a movie too  </p>
            <p>  and then home </p>      

            <p className="mb-0 pb-0 opacity-25"> A D C#m D D/C# D/B </p>
            <p className="mb-0 pb-0 opacity-25"> A E F#m E D F#m E D </p>
            <p className="mb-0 pb-0"> Oh it`s such a perfect day </p>
            <p className="mb-0 pb-0"> i`m glad i spent it with you </p>
            <p className="mb-0 pb-0"> Oh such a perfect day </p>
            <p className="mb-0 pb-0"> you just keep me hanging on </p>
            <p className="mb-0 pb-0"> you just keep me hanging on </p>

            <p className="mb-0 pb-0 opacity-25"> Am D G C </p>
            <p className="mb-0 pb-0 opacity-25"> F Dm E </p>
            <p className="mb-0 pb-0"> just a perfert day </p>
            <p className="my-0 py-0"> problems all left alone </p>
            <p className="my-0 py-0"> weekenders on our own </p>
            <p> its such fun </p> 

            <p className="mb-0 pb-0 opacity-25"> Am D G C </p>
            <p className="mb-0 pb-0 opacity-25"> F Dm E </p>
            <p className="mb-0 pb-0"> you made me forget myself </p>
            <p className="my-0 py-0"> problems all left alone </p>
            <p className="my-0 py-0"> i thought i was someone else  </p>
            <p> someone good </p> 

            <p className="mb-0 pb-0 opacity-25"> Am D G C </p>
            <p className="mb-0 pb-0 opacity-25"> F Dm E </p>
            <p className="mb-0 pb-0"> just a perfert day </p>
            <p className="my-0 py-0"> problems all left alone </p>
            <p className="my-0 py-0"> weekenders on our own </p>
            <p> its such fun </p> 

            <p className="mb-0 pb-0 opacity-25"> instrumental: F#m E D  </p>


            <p className="mb-0 pb-0 opacity-25"> C#m G D </p>
            <p className="mb-0 pb-0 opacity-25"> D/C# D/B A </p>
            <p className="mb-0 pb-0"> you`re going reap, just what you sow </p>
            <p className="mb-0 pb-0"> you`re going reap, just what you sow </p>
            <p className="mb-0 pb-0"> you`re going reap, just what you sow </p>
            <p className="mb-0 pb-0"> you`re going reap, just what you sow </p>

           
          </div>
        </section>

        <div className="mt-5">
          <Link
            to="/englishList"
            target="_self"
            className="bg-white text-black p-2 m-1 rounded-2"
          >
            <RiArrowGoBackLine className="fs-4" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default perfectDay
