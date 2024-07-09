import React, { useState } from 'react'

function StarRating({starCount}) {
    const [starValue, setStarValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(0)

    return (
        
        <div className='container'>
            {new Array(starCount).fill(0).map((value, index)=>{
                    
                return (
                <span key={index}
                className={((hoverValue==0 && index<starValue)||index<hoverValue) ? "gold":""}
                onClick={(()=>(setStarValue(index+1))
                )}
                onMouseEnter={() => setHoverValue(index + 1)}
                onMouseLeave={()=> setHoverValue(0)}
                >
                &#9733;
                </span>)
            })}

        </div>
    )
}

// className={((hoverValue==0 && index<starValue)||index<hoverValue) ? "gold":""}
// --the intution behind this is:
// --we want to apply gold class if (index<hovervalue)
// --but suppose

// --you selected star no 2
// --index=1
// --starvalue=2
// --hovervaluu=2
// --class gold is  applied to  star no 1 and 2

// --but when you lower and hover to star no 1
// --then index=0
// --hovervalue=1
// --but starvalue=2

// --hence it will show 2 stars (star1 and star 2 as coloured [but you want now only star one to be coloured as])
// --but this is not happening since hovervalue has interuupting

// --hence check if hovervalue==0

export default StarRating