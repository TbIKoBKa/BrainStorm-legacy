import randomInt from "./randomInt"

const createBoxes = (length, maxNumber) => {
    const target = randomInt(maxNumber)
    const posTarget = randomInt(length)
    let boxes = [], i = 0
    while(i < length) {
        let newItem = randomInt(maxNumber)
        while(newItem === target || boxes.includes(newItem)) {
            newItem = randomInt(maxNumber)
        }
        boxes[i++] = newItem
    }
    boxes[posTarget] = target
    
    return { target, boxes }
}

export default createBoxes