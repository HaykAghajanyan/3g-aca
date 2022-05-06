import React, { useState } from "react";
import {COLORS, BUTTON_TYPES} from './helpers/constants'
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const {RED, PURPLE, BLUE, BROWN, GREEN, ORANGE} = COLORS
const {HIDE, SHOW} = BUTTON_TYPES

function App() {
    const [state, setState] = useState({
        circles: [
            {
                id: '1',
                color: RED
            },
            {
                id: '2',
                color: PURPLE
            },
            {
                id: '3',
                color: BROWN
            },
            {
                id: '4',
                color: BLUE
            },
            {
                id: '5',
                color: GREEN
            },
        ],
        chosenCircle: null,
        isHeaderShown: true,
        randomNumFromHeader: null
    })

    const changeColor = e => {
        setState({chosenCircle: e.target.id})
    }

    const toggleHeader = () => {
        setState(prev => ({
            ...prev,
            isHeaderShown: !prev.isHeaderShown
        }))
    }

    const getRandomNum = (num) => {
        setState(prev => ({...prev, randomNumFromHeader: num}))
    }


    const {circles, chosenCircle, isHeaderShown, randomNumFromHeader} = state

    console.log('randomNumFromHeader', randomNumFromHeader)
    return (
        <>
            {isHeaderShown && <Header
                getRandomNum={getRandomNum}
                color={chosenCircle && circles[chosenCircle - 1].color}
            />}


            <button onClick={toggleHeader}>{isHeaderShown ? HIDE : SHOW}</button>
            <div className="container">
                {
                    circles.map(circle => {
                        return <div
                            key={circle.id}
                            id={circle.id}
                            className='circle'
                            style={{backgroundColor: chosenCircle === circle.id ? ORANGE : circle.color}}
                            onClick={changeColor}
                        >{circle.id}</div>
                    })
                }
            </div>
            <Footer />
            <NavBar />
        </>
    );
}

export default App;
