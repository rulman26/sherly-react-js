import { useState } from "react"

const Home = () => {
    const [wellcome, setWellcome] = useState("")
    return (
        <div>
            <main>
                <h1>RULMAN FERRO ARONE</h1>
                <br></br>
                <button
                    onClick={()=> setWellcome("Bienvenido Rulman FERRO")} 
                    className="btn btn-primary">Bienvenido</button>
                <h3>{wellcome}</h3>
            </main>
        </div>
    )
}


export default Home