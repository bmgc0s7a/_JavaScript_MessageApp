import { get } from "../store/MessageList.js";
import { renderUI } from "../view/renderUI.js";

const renderPresenter = function(){
    renderUI(get());
}

export default renderPresenter;