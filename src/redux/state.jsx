import productPageReducer from './productPageReducer';
import homePageReducer from './homePageReducer';
import catalogPageReducer from './catalogPageReducer';

let store = {
    _state: {
        productPage: productPageReducer(undefined, {type: 'init@reduxBlabla'}),
        homePage: homePageReducer(undefined, {type: 'init@reduxBlabla'}),
        catalogPage: catalogPageReducer(undefined, {type: 'init@reduxBlabla'})
    },
    _refresh() {
      console.log('hey')
    },
    getState() {

        return this._state;
    },
    dispatch(action) {
        this._state.productPage = productPageReducer(this._state.productPage, action);
        this._state.homePage = homePageReducer(this._state.homePage, action);
        this._state.catalogPage = catalogPageReducer(this._state.catalogPage, action);

        this._refresh();
    },
    subscribe(callback) {
        this._refresh = callback;

        // return nothing
    }
}

export default store;