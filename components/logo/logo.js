import React from 'react';
import reactLogo from '../../assets/images/reactapp-logo.png';
import './logo.css';
const Logo = (props)=>{
    return(
        <div className="Logo" style={{height:props.height}}>
            <img src={reactLogo} alt="reactapp.ir logo" />
        </div>
    )
}
export default React.memo(Logo);
