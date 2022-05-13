const qs = (element, parent = document) => parent.querySelector(element);

const qsa = (element, parent = document) => parent.querySelectorAll(element);

export { qs, qsa };