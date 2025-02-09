import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextImg from "../assets/images/next.png";
import prevImg from "../assets/images/prev.png";

export function SliderArrow({ className, style, onClick, icon }) {
    return (
        <img src={icon} alt="next"
            className={className}
            style={{
                style,
                width: "auto",
                height: "auto"
            }}
            onClick={onClick}
        />
    );
}

export const Slider_ = ({ children }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderArrow style={{ marginRight: "10px" }} icon={nextImg} />,
        prevArrow: <SliderArrow style={{ marginLeft: "10px" }} icon={prevImg} />
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}