import React from 'react';
import './CardGrp.css'

const CardGrp = ({ride, handleButton}) => {
    // console.log(props);
    const { discription, name, age, picture, time, id } = ride;
    // console.log(time);
    return (
        <div className="card w-72 bg-blue-50 shadow-2xl carCard">
                <figure className="">
                    <img src={picture} alt="Shoes" className="rounded-xl card-img" />
                </figure>
                <div className="card-body">
                    <h2 className="carName">{name}</h2>
                    <p>{discription ? discription.slice(0, 100) : 'Nothing'}</p>
                    <h2 className='font-semibold'>For Age: {age}</h2>
                    <h3 className="text-lg font-semibold">
                        Time required : {time}
                    </h3>
                    <div className="card-actions">
                        <button onClick={()=> handleButton(ride)} className="btn w-full btn-primary">Add to list</button>
                    </div>
                </div>
            </div>
    );
};

export default CardGrp;