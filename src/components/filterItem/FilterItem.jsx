import "./FilterItem.css"
import RemoveDuplicatedAndSort from '../../helpers/RemoveDuplicatedAndSort';
import assignments from "../../../src/assignments.json"
import CountItemsInArray from '../../helpers/CountItemsInArray';

function FilterItem({name, filteredItem, filteredItem2, filteredItem3, setFilter, filterNaam, filter2, filter3, openFilter, setOpenFilter}) {

    return (
        <details open={openFilter === name}>
            <summary onClick={(e) => { e.preventDefault(); setOpenFilter(openFilter === name ? null : name); }}>{filterNaam}</summary>
            <ul>
                {RemoveDuplicatedAndSort(
                    assignments
                        .map((assignment) => assignment[name])
                ).map((item) => {
                    const isSelected = filteredItem.includes(item);
                    const count = CountItemsInArray(assignments, item, name, filteredItem2, filteredItem3, filter2, filter3);
                    return (
                        <li
                            key={item}
                            onClick={() =>
                                setFilter((prevItems) =>
                                    prevItems.includes(item)
                                        ? prevItems.filter((i) => i !== item)
                                        : [...prevItems, item]
                                )
                            }
                            className={count === 0 ? 'filter-item disabled' : isSelected ? 'filter-item selected' : 'filter-item'}
                        >
                            {item} <span>({count})</span>
                        </li>
                    );
                })}
            </ul>
        </details>
    );
}

export default FilterItem;