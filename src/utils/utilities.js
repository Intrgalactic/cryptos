
export default function setLocalStorageItem(action, itemName, item) {
    switch (action) {
        case "set": window.localStorage.setItem(itemName, item);
            break;
        case "delete": window.localStorage.removeItem(itemName);
            break;
        default:
            break
    }
}