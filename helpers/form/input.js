import { addElem } from "../dom/elem.js";
import { add } from "../dom/events.js";

const input = function(name, type, text, classlist = [], func, values){
    const input = addElem('input', classlist);
    input.name = name;
    input.type = type;
    (type === 'submit') ? input.value = text : input.placeholder = text
    //add(input, 'click', func, values);
    return input;
}

export {input};