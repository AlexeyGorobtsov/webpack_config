
const getArrFromStr = str => str.split('.');

const getSubValue = (obj, value) => obj[value];
/**
 *
 * @param obj
 * @param value
 * @returns {*}
 * example:
 * const z = {
      a: 1,
      b: {z: {d: 3}}
    }
 const str= 'b.z.d'
 getValue(z, str) // 3
 */
export const getValue = (obj = {}, value = '') => {
    const arr = getArrFromStr(value);
    const result =  arr.reduce((acc, item) => {
        const {isFirst} = acc;
        if (!isFirst) {
            acc.current = obj[item];
            acc.isFirst = true;

            return acc;
        }
        if(acc.current) {
            acc.value = getSubValue(acc.current, item);
            acc.current = acc.value;

            return acc;
        }

        return acc;
    }, {});

    return result.value || null;
};
