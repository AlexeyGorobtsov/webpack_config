import {getValue} from "./getValue";

/**
 *
 * @param arr
 * @param keys
 * @returns {*}
 *
 * const content = [
 { name: 'project',
        group: {
            id: '1',
            active: true
        },
    }
 ];
 const keys = [
 'group.id',
 'group.active',
 ];
 *
 *getFlatList(arr, keys) // result [{
    name: "project"
    group: {id: "1", active: true}
    group.id: "1"
    group.active: true
}]
 */
export const getFlatList = (arr, keys) => arr.reduce((acc, item) => {
    const subObj = keys.reduce((accum, key) => {

        accum[key] = getValue(item, key);

        return accum;
    }, {});

    acc.push({...item, ...subObj});

    return acc;
}, []);