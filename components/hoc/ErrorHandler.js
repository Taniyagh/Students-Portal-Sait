/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import Modal from '../UI/modal/Modal';
const ErrorHandler = (WrappedComponent,axios)=>{
    const withHooksErrorHandler=(props)=>{
        const [show,setShow] = useState(false);
        const [error,setError] = useState(null);
        axios.interceptors.request.use(request=>{
            setShow(false)
            return request;
        })
        axios.interceptors.response.use(response=>response,error=>{
            setShow(true);
            setError(error.message);
            
        })
        const errorConfirmHandler=()=>{
            setShow(false);
        }
        return(
            <React.Fragment>
                 <Modal show={show} modalClosed={errorConfirmHandler}>
                    {error}
                 </Modal>
                 <WrappedComponent {...props} />
            </React.Fragment>
           
        );
    }
    return withHooksErrorHandler;
}
export default ErrorHandler;
