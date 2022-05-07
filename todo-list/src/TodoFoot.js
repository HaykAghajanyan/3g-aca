import {memo} from 'react'

const TodoFoot = ({onSort}) => {
    return (
        <div className="Foot">
            <button className="button" onClick={onSort}>Sort</button>
        </div>
    )
}

export default memo(TodoFoot)
