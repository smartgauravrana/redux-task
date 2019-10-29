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

const reducer = (state=initalState, action) => {
    switch(action.type){
        default: return state;
    }
};

export default reducer;