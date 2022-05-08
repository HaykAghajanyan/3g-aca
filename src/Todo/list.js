import { memo } from "react"
import Color from "./Color"

const List = ({todo,onChange})=>{
return(
    <div>
        {
            todo.map(item=>{
                return (
                    <Color key={item.id}
                           todo={item}  
                           onChange={onChange} />
                )
            })
        }
    </div>
)
}
export default memo(List)