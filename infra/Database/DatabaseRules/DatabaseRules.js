import MethodNotExists from "../../../helpers/exceptions/database/MethodNotExists.js";

class DatabaseRules{
    static all = () => {throw new MethodNotExists('all')};
    static get = () => {throw new MethodNotExists('get')};
    static add = () => {throw new MethodNotExists('add')};
    static upd = () => {throw new MethodNotExists('upd')};
    static del = () => {throw new MethodNotExists('del')};
}

export default DatabaseRules;