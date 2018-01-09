//全局用到的js
import types from './types';
export default {
    methods : {
        sessionSetItem(key, value){
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        sessionGetItem(key){
            return JSON.parse(sessionStorage.getItem(key));
        },
        userChecked(){
            var userId = this.sessionGetItem(types.USER_ID);
            if(userId <= 0){
              this.router.push('/');
              return;
            }
        }
        
    }
}