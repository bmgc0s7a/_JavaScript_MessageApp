import { qs } from "../../../helpers/dom/querySel.js";
import { delPresenter } from "../../../presenter/delPresenter.js";

const delMessage = function(e){
    const id = e.target.closest('div')._id;
    e.target.closest('div').remove();
    delPresenter(id);
    console.log(id);
}

export {delMessage};