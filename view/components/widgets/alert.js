import { addElem } from "../../../helpers/dom/elem.js";

const alert = function (message, classList = []) {
  const divElem = addElem("div", [
    "fixed",
    "top-10",
    "right-0",
    "p-3",
    "text-xs",
    ...classList,
  ]);
  const pText = addElem("p", ["p-3"]);
  pText.textContent = message;
  divElem.append(pText);
  document.body.append(divElem);
  setTimeout(() => divElem.remove(), 5000);
};

export { alert };
