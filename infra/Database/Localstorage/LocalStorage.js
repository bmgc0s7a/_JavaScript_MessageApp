import DatabaseRules from "../DatabaseRules/DatabaseRules.js";

class LocalStorage extends DatabaseRules{
    all = () => Object.values(window.localStorage).map(msg => JSON.parse(msg));
    get = (id) => JSON.parse(window.localStorage.getItem(id));
    add = (id, contact) => window.localStorage.setItem(id, JSON.stringify(contact));
    upd = (id,contact) => window.localStorage.setItem(id, JSON.stringify(contact));
    del = (id) => window.localStorage.removeItem(id);
    delAll = () => window.localStorage.clear();
}

export default LocalStorage;