import Card from './card.js'

function Tours({ tours, removeTour }) {
   return (
      <div>
         <div>
            <h2>Plan with Roushni</h2>
         </div>

         <div>
            {
               // tours.map((tour) => {
               //    console.log(tour)
               //    return <Card {...tour} removeTour={removeTour} ></Card>
               // })
               // console.log(">>>>>>",tours[0])
               
            }
         </div>
      </div>

   );
}

export default Tours;