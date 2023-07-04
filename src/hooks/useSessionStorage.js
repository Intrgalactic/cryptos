
export default function useLocalStorage(itemName) {
    const item = JSON.parse(window.sessionStorage.getItem(itemName));
    return item;

}