import createDataContext from '../context/createDataContext';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            return [...state, { id: `${Math.random()}`, title: `Blog post #${state.length}` }];
        case 'deleteBlogPost':
            return state.filter(element => element.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'addBlogPost' });
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'deleteBlogPost', payload: id });
    };
};

export const { Context, Provider } = createDataContext(reducer, { addBlogPost, deleteBlogPost }, []);
