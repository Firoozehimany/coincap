export function showArrowUp(tHeadRef, refId){
    tHeadRef[refId].current.classList.remove("showArrowDown")
    tHeadRef[refId].current.classList.add("showArrowUp")
};

export function showArrowDown(tHeadRef, refId){
    tHeadRef[refId].current.classList.remove("showArrowUp")
    tHeadRef[refId].current.classList.add("showArrowDown")
}

export function showArrowIcon(showIcon, tHeadRef, refId){
    for(const key in tHeadRef){
        if (tHeadRef[key] && tHeadRef[key].current){
            tHeadRef[key].current.classList.remove("showArrowUp", "showArrowDown")
        }
    }
    
    if (showIcon === false){
        showArrowUp(tHeadRef, refId)
    } else {
        showArrowDown(tHeadRef, refId)
    }
}