import React from "react"
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import data from "./data"

export default function App(){
        
        const travelData = data.map(datas => {
            return (
                <Main 
                key = {datas.id}
                datas = {datas}
                />
            )
        })
    
    return(
        <div>
            <Nav />
            {travelData}
        </div>
    )
}