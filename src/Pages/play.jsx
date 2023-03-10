import "../Assets/Styles/play.css";

export default function Play() {

    //get name from input and send to server to create room and join room
    const joinRoom = (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        localStorage.setItem("name", name);
        window.location.href = "/room" + "?team=" + name;
    }



    return (
        <div className="play">
            <div className="info">
                <h1>BoardGame</h1>
                <form action="">
                    <input type="text" name="name" id="name" placeholder="Team Name"/>
                    <button onClick={joinRoom}>Join</button>
                </form>
            </div>
            <div className="support">
                <h1>Support</h1>
                <p>Languages: Vietnamese / English (updating)</p>
                <p>Currently, we are still in the process of developing and updating new games. We will try to develop and improve the features. Thanks for using it.</p>
            </div>
            <div className="board">
                <p>copyright ©2023, Tunnienguci</p>
            </div>  
        </div>
    );
}
