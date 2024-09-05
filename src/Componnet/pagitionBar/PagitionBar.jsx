import { useState } from "react";

const PagitionBar = ({ postPerPage, totalPost,pagition }) => {
    //
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i);
    }
    const [active, setActive] = useState(1);
    // 
    const handleClick = (number) => {
        setActive(number)
        pagition(number)
    }


    return (
        <div>
            <ul className="flex items-center gap-3">
                {
                    pageNumber.map((number,idx) =><li key={idx} onClick={()=>{handleClick(number); pagition=(number)}} className={` cursor-pointer ${active===number ? "bg-red-600 text-2xl p-3 rounded text-black": " text-2xl p-3"}`}>
                        {number}
                    </li>)
                    
                }
            </ul>
        </div >
    );
};

export default PagitionBar;