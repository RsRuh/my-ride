import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import CardGrp from '../CardGrp/CardGrp';
import './Main.css'

const Main = () => {
    const [CardList, setCardList] = useState([]);
    const [sumTime, setSumTime] = useState([])

    useEffect(() => {
        fetch('text.json')
            .then(res => res.json())
            .then(data => setCardList(data))
    }, [])
    // console.log(CardList);
    const handleButton = (CardGrp) => {
        const sum = [...sumTime, CardGrp];
        setSumTime(sum);
    }

    return (
        <div>
            <div className="md:grid grid-cols-4 gap-4">
                <div className="col-span-3 mt-10 mx-20">
                    <div>
                        <div className="flex">
                            <img src="hrslogo.png" className="logo" alt="" />
                            <h1 className="text-3xl pageTitle text-indigo-500 font-bold">
                                Riding SupperCar
                            </h1>
                        </div>
                        <h3 className="text-xl font-semibold my-5">
                            Select today’s Rides
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            CardList.map((ride) => (
                                <CardGrp ride={ride} handleButton={handleButton} key={ride.id}></CardGrp>
                            ))
                        }
                    </div>
                </div>
                <div className='cardSide'>
                    <BreakTime sumTime={sumTime}></BreakTime>
                </div>
            </div>

            <div className="question-container bg-sky-400 rounded-xl shadow-2xl">
                <h2 className='text-4xl py-5 text-center font-bold'>3 most ques for react</h2>
                <hr />
                <h3 className='font-semibold mt-5 text-xl'>1. What does react work?</h3>
                <br />
                <h4>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h4>
                <br />
                <br />
                <h3  className='font-semibold text-xl'>2. What are the different of props and state?</h3>
                <br />
                <h4>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h4>
                <br />
                <br />
                <h3  className='font-semibold text-xl'>3. What can do useEffect without data load?</h3>
                <br />
                <h4>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h4>
            </div>
        </div>
    );
};

export default Main;