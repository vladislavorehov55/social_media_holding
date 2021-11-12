import Slider from "./Slider/Slider";
import {useState} from "react";
import img1 from '../../../../images/img1.png';
import img2 from '../../../../images/img2.png';
import img3 from '../../../../images/img3.png';

const SliderContainer = ({changeImg}) => {
    const [activeImgInd, setActiveImgInd] = useState(0);
    const images = [img1, img2, img3]

    const changeActiveImgByArrow = (type) => {
        if (type === 'up') {
            if (activeImgInd === 0) {
                changeImg(images[images.length - 1])
                setActiveImgInd(images.length - 1)
            } else {
                changeImg(images[activeImgInd - 1])
                setActiveImgInd(prevState => prevState - 1)
            }
        } else {
            if (activeImgInd === images.length - 1) {
                changeImg(images[0])
                setActiveImgInd(0)
            } else {
                changeImg(images[activeImgInd + 1])
                setActiveImgInd(prevState => prevState + 1)
            }
        }
    }
    const changeActiveImg = (id) => {
        changeImg(images[id])
        setActiveImgInd(id)
    }
    return (
        <Slider images={images} activeImgInd={activeImgInd}
                changeActiveImgByArrow={changeActiveImgByArrow}
                changeActiveImg={changeActiveImg}
        />
    )
}
export default SliderContainer