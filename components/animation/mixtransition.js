import React,{useState} from 'react';
import './animation.css';
import Button from '../UI/button/button';
import { CSSTransitionGroup } from 'react-transition-group'
const Mixtransition=()=>{
    const[items,setItems] =useState([
        {
            'id':0
        }
    ])
    const addItem=()=>{
        const newItems = [...items];
        newItems.push({
            'id':items.length
        })
        setItems(newItems)
    }
    const deleteItems=(index)=>{
        const Items = [...items];
        Items.splice(index,1);
        setItems(Items)
    }
    return(
        <div style={{display:'flex',flexFlow:'column',marginTop:'70px'}}>
            <Button btnType="danger" clicked={addItem}>
                ADD ITEM
            </Button>
            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={500}
                >
            {
                items.map((item)=>{
                    return(
                        <div className="box" key={item.id} onClick={()=>deleteItems(item.id)}>
                            <h1>Item{item.id}</h1>
                        </div>
                    )
                })
            }
            </CSSTransitionGroup>
        </div>

    )
}
export default Mixtransition;