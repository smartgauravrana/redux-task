import * as actionTypes from './actionTypes';

export const addCourse = course => {
    return {
        type: actionTypes.ADD_COURSE,
        payload: course
    }
};

export const updateCourse = course => {
    return {
        type: actionTypes.UPDATE_COURSE,
        payload: course
    }
};

export const deleteCourse = id => {
    return {
        type: actionTypes.DELETE_COURSE,
        payload: id
    }
};