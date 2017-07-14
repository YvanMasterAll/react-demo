import {createStore, bindActionCreators, applyMiddleware, compose, combineReducers} from 'redux';
import {createLogger} from 'redux-logger'
import * as currentTime from './modules/currentTime';
import * as currentUser from './modules/currentUser';
import DevTools from './devtools/DevTools';

/* --------------------
 * - 扩展 Store 功能 -
 * --------------------*/
//日志输出
const loggerMiddleware = createLogger()
const primeMiddleware = (store) => (next) => (action) => {
    action && next(action)
}
//创建中间件容器
const middleware = [ primeMiddleware, loggerMiddleware]
//扩展中间件和调试功能
const extendedCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument()
)(createStore)

//Multi reducer
const reducer = combineReducers({
    currentTime: currentTime.reducer,
    currentUser: currentUser.reducer
})

export const store = extendedCreateStore(reducer);
    
export const actions = {
    currentTime: bindActionCreators(
            currentTime.actions,
            store.dispatch
        ),
    currentUser: bindActionCreators(
            currentUser.actions,
            store.dispatch
        )
}



