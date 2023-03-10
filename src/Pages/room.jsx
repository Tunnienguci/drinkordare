import "../Assets/Styles/room.css";
import Data from "../Data/drink.json";



export default function Room() {
    const onClick = () => {
        const data = Data;
        const random = Math.floor(Math.random() * data.length);
        const support = data[random].support;
        const dare = data[random].dare;
        const drink = data[random].drink;
        localStorage.setItem("drink", drink);
        localStorage.setItem("dare", dare);
        localStorage.setItem("support", support);
        window.location.reload();
    };

    const name = localStorage.getItem("name");

    return (
        <div className="room">
            <div className="info">
                <h1>Drink or Dare</h1>
                <p>
                    Welcome <span>{name}</span>
                </p>
            </div>
            <div className="card">
                {/* <h1>LÁ BÀI ĐẦU TIÊN</h1>
                <p>Hãy nhớ rằng, bạn phải hoàn thành thử thách mới có thể chuyển sang lượt kế tiếp. Nếu bạn không thể hoàn thành thử thách, bạn phải uống 01 ly rượu.</p>
                <p>Mỗi là bài sẽ được công khai với tất cả mọi người nên bạn hãy trở thành người chơi trung thực.</p> */}
                <p className="support">{localStorage.getItem("support")}</p>
                <h1 className="dare">{localStorage.getItem("dare")}</h1>
                <p id="drink"><span className="drink">{localStorage.getItem("drink")}</span></p>
            </div>
            <button onClick={onClick}>Play</button>
        </div>
    );
}
