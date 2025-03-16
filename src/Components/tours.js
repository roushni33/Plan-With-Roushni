import Card from './card.js'

function Tours({ tours, removeTour }) {
   return (
      <div className='flex justify-center items-center flex-col'>
         <div >
            <h2 className='text-5xl border-4 border-dashed border-blue-600  rounded-2xl px-[5vw] py-[1vh'>Plan With Roushni</h2>
         </div>

         <div className='flex items-center justify-center flex-wrap max-w-[1600px] w-full mx-auto  '>
            {
               tours.map((tour) => {
                  
                  return <Card {...tour} removeTour={removeTour} ></Card>
               })
               
               
            }
         </div>
      </div>

   );
}

export default Tours;