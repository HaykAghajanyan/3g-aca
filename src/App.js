import { useEffect, useState } from "react";

// Գործնականի համար կպատրաստեք ToDo list -ի ռեալիզացիա։ Այդ պռոյեկտում 
// https://jsonplaceholder.typicode.com/todos հղումից կներբեռնեք todo-ները։ 
//  Ամեն todo-ն պետք է ունենա title-ը, id-ն ու status՝ completed ու in progress
//  և checkbox, որ փոխի այդ ստատուսը։ 
//  Եթե ստատուսը completed ա պետք է այդ todo-ի գույնը կանաչի։ Նաև պետք է լինի sort
//  կնոպկա, որը կսորթավորի todo-ները \
//  ըստ ստատուսի՝ սկզբից ցույց կտա չկատարվածները։ Սթայլերի վրա աշխատելը ցանկալի ա

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(json => setData(json))

    }, [])
   
    const [check, setCheck] = useState(Boolean)

    return (
        <div className="main">
            <h1 className="title"> Todo List</h1>

            <pre>

                {data.slice(0, 10).sort((a,b)=>{
                   return a.completed>b.completed ? -1 : 1
                }).map(item => {
                    return <div key={item.id} className="task"  style={{backgroundColor: item.completed ? 
                    "rgba(236, 235, 233, 0.5)" : "rgba(247, 235, 211, 0.5)"}}>
                        <label style={{color: item.completed ? "rgb(33, 141, 33)" : "red"}}>
                        <input type="checkbox" onClick={() => {
                            setCheck(prev => !prev)
                            item.completed =  !item.completed    
                        }} />{item.title} : {String(item.completed)}

                    </label></div>
                })
                }

            </pre>
        </div>
    )
}

export default App;
