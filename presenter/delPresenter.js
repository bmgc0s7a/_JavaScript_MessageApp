import { del } from "../store/MessageList.js";

const delPresenter = function(id){
    del(id);
}

export {delPresenter};