import { addElem } from "../../../helpers/dom/elem.js";
import { input } from "../../../helpers/form/input.js";
import {submitFormMessage} from "../../events/form/submitFormMessage.js";
import { add } from "../../../helpers/dom/events.js";
import { onWriting } from "../../events/form/onWriting.js";

const formNewMessage = function(){
    const form = addElem('form', ['flex', 'gap-3']);
    const inputMessage = input('message', 'text', 'Your message', ['bg-slate-200', 'p-3', 'grow']);
    add(inputMessage, 'keyup', onWriting);
    const inputSubmit = input('submitMessage', 'submit', 'Send', ['bg-slate-900', 'px-3', 'text-white', 'font-bold', 'cursor-pointer']);
    add(form, 'submit', submitFormMessage);
    form.append(inputMessage, inputSubmit);
    return form;
}

export {formNewMessage};