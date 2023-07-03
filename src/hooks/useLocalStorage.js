
export default function useLocalStorage(itemName) {
    const item = JSON.parse(window.localStorage.getItem(itemName));
    return item;

}