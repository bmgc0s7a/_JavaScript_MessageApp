// const css = (element,classes = []) => classes.forEach(classe => element.classList.add(classe));
const css = (element,classes = []) => [...classes].forEach(classe => element.classList.add(classe));

const addElem = (element, classes = [], id) => {
    const elem = document.createElement(element);
    if(id) elem.id = id;
    css(elem, classes);
    return elem;
}
export {addElem};