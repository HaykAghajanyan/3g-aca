import {Component} from "react";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            randomNum: 0
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.click)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.click)
    }

    click = e => {
        console.log(e.target.localName === 'header');
    }

    setRandomNum = () => {
        this.setState(prev => {
            prev.randomNum = Math.floor(Math.random() * 100)
            this.props.getRandomNum(prev.randomNum)
            return prev
        })
    }

    render() {
        return (
            <header
                onClick={this.setRandomNum}
                className='header'
                style={{backgroundColor: this.props.color}}
            >
                Header
            </header>
        )
    }

}

export default Header
