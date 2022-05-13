const add = (element, eventEle , func = [], values= []) => element.addEventListener(eventEle, func.bind(values));

export {add};