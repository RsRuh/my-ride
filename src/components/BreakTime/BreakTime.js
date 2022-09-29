import React, { useEffect, useState } from 'react';
import './BreakTime.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreakTime = ({sumTime}) => {
    const notify = () => toast("Activity Completed!");
    const [time, setTime] = useState([]);

    const addBreakTime = (addTime) =>{
        setTime(addTime);
        localStorage.setItem('time', addTime)
    }
    useEffect(()=>{
        const oldTime = localStorage.getItem('time')
        if(oldTime){
            setTime(oldTime)
        }
    }, [])

    let total = 0;
    for (const countOfSum of sumTime){
        total = total + countOfSum.time;
        console.log(total);
    }


    return (
        <div>
            <div className="rideContainer">
                <div className="m-10">
                    <div className="grid grid-cols-4 myProfile">
                        <div>
                            <img
                                className="myPic"
                                src="myPic.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-span-3 pl-3">
                            <h1 className="text-xl font-semibold">
                                Rs Ruhul
                            </h1>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="mx-10">
                    <div className="flex justify-around myDetails bg-purple-50">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">52</span>kg
                            </h1>
                            <h1 className="font-semibold ml-3">Weight</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">5.9</span>
                            </h1>
                            <h1 className="font-semibold ml-2">Height</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">19</span>
                                yrs
                            </h1>
                            <h1 className="font-semibold ml-2">Age</h1>
                        </div>
                    </div>
                </div>
                <h1 className="my-5 ml-10 text-xl font-semibold">
                    Add A Break
                </h1>
                <div className="mx-10 pb-5">
                    <div className="flex justify-around bg-purple-50 brkBtn">
                            <button onClick={() => addBreakTime('10s')} className="btn btn-circle">
                                10s
                            </button>
                            <button onClick={() => addBreakTime('20s')} className="btn btn-circle">
                                20s
                            </button>
                            <button onClick={() => addBreakTime('30s')} className="btn btn-circle">
                                30s
                            </button>
                            <button onClick={() => addBreakTime('40s')} className="btn btn-circle">
                                40s
                            </button>
                            <button onClick={() => addBreakTime('50s')} className="btn btn-circle">
                                50s
                            </button>
                        
                    </div>
                    <h1 className="riding-details text-2xl font-semibold mt-20 mb-5">
                        Rides Details
                    </h1>
                    <div className="flex justify-around myDetails mb-5 bg-purple-50">
                        <h3 className="font-bold text-xl p-2">Riding time</h3>
                        <h3 className="font-semibold p-2 text-xl text-gray-400">
                            {total} seconds
                        </h3>
                    </div>
                    <div className="flex justify-around myDetails bg-purple-50">
                        <h3 className="font-bold text-xl p-2">Break Time</h3>
                        <h3 className="font-semibold text-xl p-2 text-gray-400">
                            {time}
                        </h3>
                    </div>
                    <button onClick={notify} className="btn btn-primary btn-block mt-10">
                    Activity Completed
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default BreakTime;