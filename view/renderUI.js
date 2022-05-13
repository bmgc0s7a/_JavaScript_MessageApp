import {qs} from "../helpers/dom/querySel.js";
import { dashboard } from "./components/dashboard/dashboard.js";

const renderUI = messages => dashboard(qs('#main'), messages);

export {renderUI};