import "../Assets/Styles/homepage.css";
import img1 from "../Assets/Images/1.png";


export default function Homepage() {

    const handleClick = () => {
        window.location.href = "/play";
    }

    return (
        <div className="homepage">
            <div className="homepage-head">
                <img src={img1} alt="img1" />
            </div>
            <div className="homepage-center">
                <h1>BoardGame</h1>
                <h3>Let's play together</h3>
                <button onClick={handleClick}>Let's Play</button>
            </div>
        </div>
    );
}