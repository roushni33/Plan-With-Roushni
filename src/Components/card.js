import { useState } from "react";
function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 200)}....`

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (

        <div className="w-[400px] h-[max-content] m-[1rem] p-[1rem] flex flex-col rounded-[10px]  shadow-md">
            <img src={image} className="aspect-square w-[480px] object-cover" alt="img"></img>

            <div className="my-5 mx-[5px]">
                <div className="">
                    <h4 className="text-[#1faa59] text-xl"> ₹{price}</h4>
                    <h4 className="text-2xl">{name}</h4>
                </div>
                <div className="description">{description}
                    <span className="text-[#12b0e8] cursor-pointer" onClick={readmoreHandler}>
                        {readmore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>


            <button className="mt-[18px] py-[10px] px-[80px] border border-[#b4161b] cursor-pointer rounded-[10px] text-[18px] font-bold bg-[#b4161b21] hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>




    );
}

export default Card;