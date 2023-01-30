import { Link } from "react-router-dom";

function Home()
{
    return (
        <>
            <div className="container w-50 mx-auto">
                <h1>Welcome Guest</h1>
                <div className="mt-4">
                    <div className="mt-4">
                        
                        <Link to="/Game">Play as Guest</Link>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Home;