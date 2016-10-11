/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/10/9
 */
import fetchBuffer from "../fetchBuffer";

describe("fetchBuffer middleware", ()=> {

    let store, next, dispatch;

    beforeEach(()=> {
        store = {
            dispatch: ()=> {
            },
            getState: ()=>({})
        };
        spyOn(store, 'dispatch');
        next = store.dispatch;
        dispatch = async(action)=> {
            await fetchBuffer(store)(next)(action);
        }
    });

});