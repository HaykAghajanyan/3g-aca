import {useThemeContext} from "../../contexts/colorThemeProvider";
import {useCallback, useMemo, useState} from "react";
import HideButton from "../HideButton";

const options = [
    {
        id: '1',
        value: 'white'
    },
    {
        id: '2',
        value: 'green'
    },
    {
        id: '3',
        value: 'orange'
    },
]

const NavBar = () => {
    const [someNum, setSumNum] = useState(2)

    const {themeColor, setThemeColor} = useThemeContext()

    const handleThemeColor = e => {
        setThemeColor(e.target.value)
    }

    const calculate = useMemo(() => {
        let result = 0
        for (let i = 0; i < 1000; i++) {
            result += +someNum
        }
        return result
    }, [someNum])

    const showNum = useCallback(() => {
        console.log('num', calculate)
    }, [])

    const changeNumber = e => {
        setSumNum(e.target.value)
    }

    return (
        <div>
            NavBar
            <input type="number" onChange={changeNumber}/>
            <button onClick={showNum}>calculate</button>
            <HideButton showNum={showNum} />
            <select
                value={themeColor}
                onChange={handleThemeColor}
                name="color"
                id="color"
            >
                {
                    options.map(({id, value}) => (
                        <option
                            key={id}
                            value={value}
                        >
                            {value}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default NavBar
