import { addElem } from "../../../helpers/dom/elem.js";
import { qs } from "../../../helpers/dom/querySel.js";

const onWriting = function(e){
    const divMainForm = e.target.closest('#formAction');
    const writing = addElem('p', ['text-xs', 'p-3'], "userWriting");
    const userWriting = qs('#userWriting');
    if(e.target.value && !userWriting){
        writing.textContent = "Bruno is writing...";
        divMainForm.prepend(writing);
    } else if(!e.target.value){
        userWriting.remove();

    }


}

export {onWriting};