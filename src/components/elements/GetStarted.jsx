import { Link } from 'react-router-dom';
import './GetStarted.css'

function GetStarted () {
    return (
        <>
            <Link to="/build" 
            // className="bg-violet-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
            //            hover:bg-violet-700 transition-colors duration-300 
            //            focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            className="get-button text-lg font-semibold rounded-full"
            onClick={() => console.log('Start building resume')}
          >
            Get Started
          </Link>
        </>
    )
}

export default GetStarted;