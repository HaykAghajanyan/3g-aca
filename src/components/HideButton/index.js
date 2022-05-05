import {memo} from 'react'

const HideButton = ({click}) => {
    console.log('rendered')
    return (
        <div>
            <button style={{width: 100, height: 100, borderRadius: '50%', backgroundColor: 'green'}}
                    onClick={click}/>
        </div>
    )
}

export default memo(HideButton)
