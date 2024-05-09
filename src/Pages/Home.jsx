import { funcArr } from "../Tasks";

function Home(props) {
    return(
        <div> 
            <main>
                {funcArr.map(func => func.component(func.props))}
            </main>
        </div>
    )
}

export default Home;