import { divMsg } from "../../components/messages/divMsg.js";
import { qs } from "../../../helpers/dom/querySel.js";
import { alert } from "../../components/widgets/alert.js";
import { addPresenter } from "../../../presenter/addPresenter.js";

const addNewMessage = function(e){
    divMsg(qs('#messages'), e.detail);
    alert('Add message', ['bg-green-500', 'text-white']);
    addPresenter(e.detail);
}

export {addNewMessage};