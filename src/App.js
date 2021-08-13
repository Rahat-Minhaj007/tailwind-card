import './App.css';
import img1 from './images/img1.jfif';
import img2 from './images/img2.jfif';
import img3 from './images/img3.jfif';


function App() {
  return (
    <div className="h-screen bg-gray-100">
      <section className="md:max-h-full flex justify-center items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h5 className="text-base md:text-lg text-indigo-700 mb-1">See Our Recent News</h5>
            <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Tailwind Css Responsive </h1>
          </div>
          <div className="mt-16 flex justify-evenly flex-wrap">

            {/* Card 1 */}

            <div className="w-auto h-auto md:w-96 shadow-xl rounded overflow-hidden cursor-pointer my-3">
              <img src={img1} alt="" className="w-full h-64" />
              <div className="text-start py-5 hover:bg-indigo-100 ">
                <h5 className="text-indigo-300 font-medium leading-relaxed px-5">October 29,2021 </h5>
                <h2 className="text-gray-500 font-medium text-2xl leading-relaxed px-5">Cities are crowded</h2>
                <p className="text-gray-500 font-normal text-justify leading-relaxed pl-5 pr-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur, consectetur facere esse iusto quaerat voluptate animi magni nostrum blanditiis dolores, fuga unde veniam incidunt odit, alias ut! Praesentium, adipisci.</p>
                <div className="flex px-5 py-4 justify-between">
                  <div className="flex  text-indigo-300">
                    <h5>Read More </h5><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="flex text-gray-300 pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg><h5>12k</h5>

                  </div>
                </div>

              </div>
            </div>

            {/* Card 2 */}
            <div className="w-auto h-auto md:w-96 shadow-xl rounded overflow-hidden cursor-pointer my-3">
              <img src={img2} alt="" className="w-full " />
              <div className="text-start py-5 hover:bg-indigo-100 ">
                <h5 className="text-indigo-300 font-medium leading-relaxed px-5">October 29,2021 </h5>
                <h2 className="text-gray-500 font-medium text-2xl leading-relaxed px-5">Lakes are silent</h2>
                <p className="text-gray-500 font-normal text-justify leading-relaxed pl-5 pr-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur, consectetur facere esse iusto quaerat voluptate animi magni nostrum blanditiis dolores, fuga unde veniam incidunt odit, alias ut! Praesentium, adipisci.</p>
                <div className="flex px-5 py-4 justify-between">
                  <div className="flex  text-indigo-300">
                    <h5>Read More </h5><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="flex text-gray-300 pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg><h5>12k</h5>

                  </div>
                </div>

              </div>
            </div>
            {/* Card 3 */}

            <div className="w-auto h-auto md:w-96 shadow-xl rounded overflow-hidden cursor-pointer my-3">
              <img src={img3} alt="" className="w-full " />
              <div className="text-start py-5 hover:bg-indigo-100 ">
                <h5 className="text-indigo-300 font-medium leading-relaxed px-5">October 29,2021 </h5>
                <h2 className="text-gray-500 font-medium text-2xl leading-relaxed px-5">Mountains are alone</h2>
                <p className="text-gray-500 font-normal text-justify leading-relaxed pl-5 pr-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur, consectetur facere esse iusto quaerat voluptate animi magni nostrum blanditiis dolores, fuga unde veniam incidunt odit, alias ut! Praesentium, adipisci.</p>
                <div className="flex px-5 py-4 justify-between">
                  <div className="flex  text-indigo-300">
                    <h5>Read More </h5><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="flex text-gray-300 pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg><h5>12k</h5>

                  </div>
                </div>

              </div>
            </div>


          </div>

        </div>

      </section>


    </div>
  );
}

export default App;
