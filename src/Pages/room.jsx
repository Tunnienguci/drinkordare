import "../Assets/Styles/room.css";
import Data from "../Data/drink.json";
import { useState, useEffect } from "react";



export default function Room() {

    // Dùng useEffect để lấy dữ liệu từ localStorage vào state để render ra màn hình
    useEffect(() => {
        const support = localStorage.getItem("support");
        const dare = localStorage.getItem("dare");
        const drink = localStorage.getItem("drink");
    }, []);

    // Hàm này được gọi khi người chơi bấm nút Play
    const onClick = () => {
        // Lấy ra 1 số ngẫu nhiên từ 0 đến 9
        const random = Math.floor(Math.random() * 10);
        // Lưu dữ liệu vào localStorage
        localStorage.setItem("support", Data[random].support);
        localStorage.setItem("dare", Data[random].dare);
        localStorage.setItem("drink", Data[random].drink);

        // Lấy dữ liệu từ localStorage vào state để render ra màn hình
        const support = localStorage.getItem("support");
        const dare = localStorage.getItem("dare");
        const drink = localStorage.getItem("drink");

        document.querySelector(".support").innerHTML = support;
        document.querySelector(".dare").innerHTML = dare;
        document.querySelector(".drink").innerHTML = drink;
    }


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
