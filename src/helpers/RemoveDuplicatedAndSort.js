function RemoveDuplicatedAndSort(list){
    const uniqueItems = list.filter((list, id, array) => array.indexOf(list) == id);
    const sortedItems = uniqueItems.sort((a, b) => a.localeCompare(b));
    
    return sortedItems;
}

export default RemoveDuplicatedAndSort;