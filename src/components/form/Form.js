import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/course';
import validate from '../../utility/validateRules';
import './Form.css';

class Form extends Component{
        constructor(props){
        super(props);
        this.isEditPage = this.props.match.params.title ? true: false;
        this.courseId = this.props.match.params.title;
        this.initialState = {
            formIsValid: this.isEditPage ? true: false,
            formControls: {
                title:{
                    value: this.isEditPage ? this.props.courses[this.courseId].title:'',
                    touched: this.isEditPage ? true: false,
                    valid: this.isEditPage ? true: false,
                    validationRules: {
                        isRequired: true
                    }
                },
                author: {
                    value:  this.isEditPage ? this.props.courses[this.courseId].author:'',
                    touched: this.isEditPage ? true: false,
                    valid: this.isEditPage ? true: false,
                    validationRules: {
                        isRequired: true
                    }
                },
                category: {
                    value:  this.isEditPage ? this.props.courses[this.courseId].category:'',
                    touched: this.isEditPage ? true: false,
                    valid: this.isEditPage ? true: false,
                    validationRules: {
                        isRequired: true
                    }
                },
                length: {
                    value:  this.isEditPage ? this.props.courses[this.courseId].length:'',
                    touched: this.isEditPage ? true: false,
                    valid: this.isEditPage ? true: false,
                    validationRules: {
                        isRequired: true
                    }
                }
            }
        };    
        
        this.state = {...this.initialState};

        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        const updatedControls = {
            ...this.state.formControls
        };

        const updatedFormElement = {
            ...updatedControls[name]
        };
        
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
          });
    }

    submitForm = () => {
        if(!this.state.formIsValid){
            const updatedControls = {
                ...this.state.formControls
            };
            for(let formElement in updatedControls){
                updatedControls[formElement].touched = true;
                updatedControls[formElement].valid = updatedControls[formElement].valid || false
            } 
            this.setState({formControls: updatedControls});
            return;   
        }
        const formControls = this.state.formControls;
        const newCourse = {
            title: formControls.title.value,
            author: formControls.author.value,
            category: formControls.category.value,
            length: formControls.length.value
        }
        if(this.isEditPage){
            this.props.updateCourse(this.courseId, newCourse);
        } else{
            this.props.addCourse(newCourse);
        }        
        this.props.history.push('/')
    }

    clearForm = () => {
        this.setState({...this.initialState});
    }

    handleButtonClick(type){
        switch(type){
            case 'submit': return this.submitForm();
            case 'cancel': return this.props.history.push('/');
            case 'clear': return this.clearForm();
            default: return;
        }
    }

    render(){
        const formControls = this.state.formControls;
        let isInputValueExist = false;
        for(let element in formControls){
            if(formControls[element].value !== ''){
                isInputValueExist = true;
                break;
            }
        }

        return (
            <div className="form-container">
                <h1>{this.props.match.params.title ? 'Edit': 'Add'}</h1>
                <form >
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            name="title"
                            placeholder="Title of the course" 
                            className={formControls.title.touched && !formControls.title.valid ? 'form-control form-control-error': 'form-control'}
                            onChange={this.handleChange}
                            value={formControls.title.value}/>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select
                            name="author" 
                            className={formControls.author.touched && !formControls.author.valid ? 'form-control form-control-error': 'form-control'}
                            onChange={this.handleChange}
                            value={formControls.author.value}>
                            <option value=""></option>
                            <option value="Deepak kumar">Deepak kumar</option>
                            <option value="Shubham bali">Shubham bali</option>
                            <option value="Pardeep kumar">Pardeep kumar</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input 
                            name="category"
                            placeholder="Category of the course" 
                            className={formControls.category.touched && !formControls.category.valid ? 'form-control form-control-error': 'form-control'}
                            onChange={this.handleChange}
                            value={formControls.category.value}/>
                    </div>
                    <div className="form-group">
                        <label >Length</label>
                        <input 
                            name="length"
                            placeholder="Length of course" 
                            className={formControls.length.touched && !formControls.length.valid ? 'form-control form-control-error': 'form-control'}
                            onChange={this.handleChange}
                            value={formControls.length.value}/>
                    </div>
                </form>
                <div className="form-btn-container">
                    <button 
                        className="form-btn submit-btn"
                        onClick={() => this.handleButtonClick('submit')}>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit</button>
                    
                    {!this.isEditPage && (<button 
                        className="form-btn"
                        disabled={!isInputValueExist}
                        onClick={() => this.handleButtonClick('clear')}>Clear Values</button>)}
                    
                    <button 
                        className="form-btn" 
                        onClick={() => this.handleButtonClick('cancel')}>Cancel</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCourse: course => dispatch(actions.addCourse(course)),
        updateCourse: (id, course) => dispatch(actions.updateCourse(id, course))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);