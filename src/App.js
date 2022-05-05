import {Component} from "react";
import {COLORS, BUTTON_TYPES} from './helpers/constants'
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const {RED, PURPLE, BLUE, BROWN, GREEN, ORANGE} = COLORS
const {HIDE, SHOW} = BUTTON_TYPES

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

    changeColor = e => {
        this.setState({chosenCircle: e.target.id})
    }

    toggleHeader = () => {
        this.setState(prev => {
            prev.isHeaderShown = !prev.isHeaderShown
            return prev
        })
    }

    getRandomNum = (num) => {
        this.setState({randomNumFromHeader: num})
    }


    render() {
        const {circles, chosenCircle, isHeaderShown, randomNumFromHeader} = this.state

        console.log('randomNumFromHeader', randomNumFromHeader)
        return (
            <>
                {isHeaderShown && <Header
                    getRandomNum={this.getRandomNum}
                    color={chosenCircle && circles[chosenCircle - 1].color}
                />}


                <button onClick={this.toggleHeader}>{isHeaderShown ? HIDE : SHOW}</button>
                <div className="container">
                    {
                        circles.map(circle => {
                            return <div
                                key={circle.id}
                                id={circle.id}
                                className='circle'
                                style={{backgroundColor: chosenCircle === circle.id ? ORANGE : circle.color}}
                                onClick={this.changeColor}
                            >{circle.id}</div>
                        })
                    }
                </div>
                <Footer />
                <NavBar />
            </>
        );
    }
}

export default App;
