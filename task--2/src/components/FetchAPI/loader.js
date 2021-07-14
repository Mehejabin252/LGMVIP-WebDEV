import Loader from "react-loader-spinner"
import './loader.css'

const LoadSpin = () => {
    return(
        <div className="loadSp">
            <Loader type="TailSpin" color="purple" height="150px" width="150px" timeout="3000" />
        </div>
    );
}

export default LoadSpin