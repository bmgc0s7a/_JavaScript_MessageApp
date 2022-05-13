import DatabaseRules from "../DatabaseRules/DatabaseRules.js";

class LocalStorage extends DatabaseRules{
    all = () => Object.values(window.localStorage).map(msg => JSON.parse(msg)).sort((a,b) => a.dateTime > b.dateTime);
    get = (id) => JSON.parse(window.localStorage.getItem(id));
    add = values => window.localStorage.setItem(values.id, JSON.stringify(values));
    upd = values => window.localStorage.setItem(values.id, JSON.stringify(values));
    del = (id) => window.localStorage.removeItem(id);
    delAll = () => window.localStorage.clear();
}

export default LocalStorage;