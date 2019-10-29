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
            case 'New': return this.props.history.push('/new');
            case 'Edit': return this.props.history.push('/new');
            case 'Delete': return console.log('delete action');
            default: return;
        }
    }

    render(){
        return (
            <div>
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
        addCourse: () => dispatch(actions.addCourse()),
        updateCourse: () => dispatch(actions.updateCourse()),
        deleteCourse: () => dispatch(actions.deleteCourse())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);