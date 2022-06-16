const createElem = (tags, attrs) => {
    const elem = document.createElement(tags);
    Object.assign(elem, attrs);
    console.log('elem: ', elem);
}

createElem('div', {})