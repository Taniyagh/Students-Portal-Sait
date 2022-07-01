import React,{useState} from 'react';
import './animation.css';
import Button from '../UI/button/button';

const Animation=()=>{
    const[slideState,setSlide] = useState(false);
    const[flipState,setFlip] = useState(false);
    const onSlide=()=>{
        setSlide(true);
        setFlip(false);
    }
    const onFlip=()=>{
        setSlide(false);
        setFlip(true);
    }
    return(
        <div className={`box ${slideState?'slide':null} ${flipState?'flip':null}`} >
            <h1>انیمیشن</h1>
            <h2>ترکیب انیمیشن های CSS با React Js</h2>
            <div style={{display:'felx',flexFlow:'row',justifyContent:'center'}}>
                <Button btnType="danger" clicked={onSlide}>Slide</Button>
                <Button btnType="success" clicked={onFlip}>Flip</Button>
            </div>
        </div>
    )
}
export default Animation;