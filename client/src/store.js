import {applyMiddleware,combineReducers,compose,createStore} from 'redux'
import thunk from 'redux-thunk'
import { adminReducer, uploadFileReducer } from './state/reducers/AdminReducer';
import { fileReducer } from './state/reducers/FilesReducer';
import { addServiceReducer, deleteServiceReducer, getServiceReducer, getServicesReducer, updateServiceReducer } from './state/reducers/ServiceReducer';
import { addProductReducer, deleteProductReducer, getProductReducer, getProductsReducer, updateProductReducer } from './state/reducers/ProductReducer';

const initialState = {
    files:{},
    upload_files:{},
    admin:JSON.parse(sessionStorage.getItem("admin"))?{data:JSON.parse(sessionStorage.getItem("admin"))}:{admin:{}},

}

const reducer = combineReducers({
    files: fileReducer,
    upload_files:uploadFileReducer,
    admin:adminReducer,
    
    //services
    add_services: addServiceReducer,
    get_services:getServicesReducer,
    get_service: getServiceReducer,
    update_service: updateServiceReducer,
    delete_service: deleteServiceReducer,

    //products
    add_product: addProductReducer,
    get_all_products : getProductsReducer,
    get_products: getProductReducer,
    update_product: updateProductReducer,
    delete_product: deleteProductReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;