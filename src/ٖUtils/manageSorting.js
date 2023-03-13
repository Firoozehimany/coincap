export function sortWords(isSorting, list, setList, sortValue) {
    if (isSorting === true) {
        const sortList = [...list].sort((a, b) => a[sortValue].localeCompare(b[sortValue]));
        setList(sortList);
    } else {
        const reSortList = [...list].sort((a, b) => b[sortValue].localeCompare(a[sortValue]));
        setList(reSortList);
    }
};

export function sortNumbers(isSorting, list, setList, sortValue) {
    if (isSorting === true) {
        const sortList = [...list].sort((a, b) => a[sortValue] - b[sortValue]);
        setList(sortList);
    } else {
        const reSortList = [...list].sort((a, b) => b[sortValue] - a[sortValue]);
        setList(reSortList);
    }
};