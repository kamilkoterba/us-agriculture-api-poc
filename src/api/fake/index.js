import lorem from "lorem-ipsum";

let ndbno = 1;

export default {
    get: (q) => Promise.resolve({
        data: {
            list: {
                item: randomItems()
            }
        }
    })
};

function randomItems(q) {
    const count = Math.floor((Math.random() * 100) + 1);
    const item = [];
    for (let i = 0; i < count; i++) {
        item.push(randomItem(q))
    }
    return item;
}

function randomItem(q) {
    return {
        ndbno: ndbno++,
        name: lorem(),
        group: lorem()
    };
}