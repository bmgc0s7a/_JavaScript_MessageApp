import DatabaseRules from "../DatabaseRules/DatabaseRules.js";

class LocalStorage extends DatabaseRules{
    getAll = () => Object.entries(window.localStorage).sort((a,b) => a.at(0) > b.at(0));
    get = (id) => JSON.parse(window.localStorage.getItem(id));
    add = (id, contact) => window.localStorage.setItem(id, JSON.stringify(contact));
    upd = (id,contact) => window.localStorage.setItem(id, JSON.stringify(contact));
    del = (id) => window.localStorage.removeItem(id);
    delAll = () => window.localStorage.clear();
}

export default LocalStorage;