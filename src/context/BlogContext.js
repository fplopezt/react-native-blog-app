import createDataContext from '../context/createDataContext';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            return [...state, { id: `${Math.random()}`, title: action.payload.title, content: action.payload.content }];
        case 'editBlogPost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    blogPost.title = action.payload.title;
                    blogPost.content = action.payload.content;
                }
                return blogPost;
            });
        case 'deleteBlogPost':
            return state.filter(element => element.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'addBlogPost', payload: { title, content } });
        callback();
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'editBlogPost', payload: { id, title, content } });
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'deleteBlogPost', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ id: '1sfgbdfsbh54y2', title: 'TEST POST', content: 'TEST CONTENT' }]);
