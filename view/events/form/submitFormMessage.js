import { qs } from "../../../helpers/dom/querySel.js";
import { input } from "../../../helpers/form/input.js";
import FormMessage from "../../../validators/view/form/FormMessage.js";
import { alert } from "../../components/widgets/alert.js";
import { addNewMessage } from "./addNewMessage.js";
import { randomMessage } from "./randomMessage.js";


const submitFormMessage = function(e){
    e.preventDefault();
    const [inputMessage] = e.target;
    try{
        FormMessage.exec(inputMessage);
        const newMsg = new CustomEvent('addNewMessage', {
            detail: {
                id: qs('#messages').childElementCount,
                owner: 'Bruno',
                message: inputMessage.value,
                dateTime: new Date()
            }
        });
        document.dispatchEvent(newMsg);
        setTimeout(() => {addNewMessage(randomMessage())},8000);
        qs('#userWriting').remove();
        inputMessage.value = '';
    } catch(e){
        alert(e, ['bg-red-400', 'text-white']);
    }
}

export {submitFormMessage};