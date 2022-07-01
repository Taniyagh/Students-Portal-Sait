import React , {Component} from 'react';
export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false,
            errorMessage:''
        }
    }
    componentDidCatch(error,errorInfo){
        this.setState({hasError:true,errorMessage:error});
    }
    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }
        return this.props.children;
    }
}
