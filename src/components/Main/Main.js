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
                <h4>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript: You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.The following is a breakdown of the HTML tags above:

                    MyCounter represents a variable called count whose value is a numeric expression.
                    GameScores is an object literal that has two prop-value pairs.
                    DashboardUnit is the XML block that is rendered on the page.
                    scores is the scores attribute. It gets its value from the GameScores object literal defined earlier.
                    A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.

                    For instance, the following code displays “Hello World” on the page by rendering the element into a DOM node called root.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.</h4>
                <br />
                <br />
                <h3 className='font-semibold text-xl'>2. What are the different of props and state?</h3>
                <br />
                <div className='flex justify-around'>
                    <div>
                        <h4 className='text-xl font-bold'>
                            Props:
                        </h4>
                        <ul>
                            <li>1. The Data is passed from one component to another.</li>
                            <li>2. The Data is passed from one component to another.</li>
                            <li>3. Props can be used with state and functional components.</li>
                            <li>4. Props are read-only.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>
                            State:
                        </h4>
                        <ul>
                            <li>1. The Data is passed within the component only.</li>
                            <li>2. It is Mutable ( can be modified).</li>
                            <li>3. State can be used only with the state components/class component (Before 16.0)</li>
                            <li>4. State is both read and write.</li>
                        </ul>
                    </div>
                </div>
                <br />
                <br />
                
            </div>
        </div>
    );
};

export default Main;