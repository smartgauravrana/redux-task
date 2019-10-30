import * as actionTypes from '../actions/actionTypes';

const initalState = {
    data: [
        {
            title: 'Clean Code: Writing Code for Humans',
            length: '3:10',
            category: 'Software Practices',
            author: 'Deepak kumar'
        },
        {
            title: 'Web Component Fundamentals',
            length: '5:10',
            category: 'HTML5',
            author: 'Shubham bali'
        },
        {
            title: 'Architecting Applications for the Real World',
            length: '2:35',
            category: 'Software Architecture',
            author: 'Pardeep kumar'
        }
    ]
};

const reducer = (state=initalState, {type, payload}) => {
    const data = [...state.data];
    switch(type){
        case actionTypes.ADD_COURSE: 
            return {...state, data: [...state.data, payload]};

        case actionTypes.DELETE_COURSE:             
            data.splice(payload, 1);
            return {...state, data: data};
        
        case actionTypes.UPDATE_COURSE:
            data.splice(payload.id, 1, payload.course);
            return {...state, data: data};
        default: return state;
    }
};

export default reducer;