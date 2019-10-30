import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';
import ActionButtons from './actionButtons/ActionButtons';
import * as actions from '../../store/actions/course';
import Table from '../table/Table';

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedRow: -1
        }
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleActionClick = this.handleActionClick.bind(this);
    }

    handleRowClick(index) {
        this.setState(state => {
            if(state.selectedRow === index)
                return { selectedRow: -1};
            return {selectedRow: index};
        });
     }

    handleActionClick(action) {
        switch(action){
            case 'New': return this.props.history.push('/course');
            case 'Edit': 
                if(this.state.selectedRow < 0)
                    return;
                const path = '/course/' + this.state.selectedRow;
                this.props.history.push({
                    pathname: path,
                    state: this.props.courses[this.state.selectedRow]
                });
                break;
            case 'Delete': 
                if(this.state.selectedRow > -1){
                    this.props.deleteCourse(this.state.selectedRow);
                    this.setState({ selectedRow : -1})
                }                    
                break;
            default: return;
        }
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                <ActionButtons onActionClick={this.handleActionClick}/>
                <Table 
                    data={this.props.courses}
                    onRowSelect={this.handleRowClick}
                    selectedRow={this.state.selectedRow}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCourse: id => dispatch(actions.deleteCourse(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);