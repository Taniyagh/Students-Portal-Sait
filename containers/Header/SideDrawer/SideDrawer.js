import React from 'react';
import Logo from '../../../components/logo/logo';
import MenuItems from '../MenuItems/MenuItems';
import './SideDrawer.css';
import Button from '../../../components/UI/button/button';
import Backdrop from '../../../components/UI/backdrop/Backdrop';
const SideDrawer = (props)=>{
    let classes = ['SideDrawer','Close'];
    if(props.show){
        classes=['SideDrawer','Open']
    }
    return(
        <React.Fragment>
            <Backdrop show={props.show}  modalClosed={props.closeDrawer}/>
            <div className={classes.join(' ')}>
                <Logo height="10%" />
                <nav>
                    <MenuItems />
                </nav>
                <div className="boxButton">
                    <Button btnType="danger" clicked={()=>alert('sign in page opend')}>
                        ورود و ثبت نام
                    </Button>
                </div>
                
            </div>
        </React.Fragment>
        
    )
}
export default SideDrawer;
