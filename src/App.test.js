import productPageReducer, {
    ADD_COMMENT, addCommentActionCreator, REMOVE_COMMENT,
    removeCommentActionCreator
} from "./redux/productPageReducer";

it('comment is added', () => {
    let newState = productPageReducer({
        comments: []
    }, addCommentActionCreator('yo'));

    expect(newState.comments.length).toEqual(1);
    expect(newState.comments[0].text).toEqual('yo');
});

it('comment is deleted', () => {
    let newState = productPageReducer({
        comments: [{id: 100, text: 'yo'}, {id: 101, text: 'hi'}]
    }, removeCommentActionCreator(100));

    expect(newState.comments.length).toEqual(1);
    expect(newState.comments[0].id).toEqual(101);
});
