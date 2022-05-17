import "./style.css";

const Button = () => {
    let textContent = "스크롤 내리기"

    return(
        <div className="wrapper">
            <span>{textContent}</span>
        </div>
    );
}

export default Button;