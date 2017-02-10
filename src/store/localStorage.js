export function setStorage(name, data)  {
    localStorage.setItem(name, JSON.stringify(data));
};

export function getStorage(name)  {
    return JSON.parse(localStorage.getItem(name));
}