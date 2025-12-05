import list from "../../src/assignments.json"

function CountItemsInArray(list, countItem, filterItem, filterOne, filterTwo, propertyOne, propertyTwo){
    const count = list.filter(
        (a) =>
            a[filterItem] === countItem &&
            (filterOne.length === 0 || filterOne.includes(a[propertyOne])) &&
            (filterTwo.length === 0 || filterTwo.includes(a[propertyTwo]))
    ).length;
    return count;
}

export default CountItemsInArray;