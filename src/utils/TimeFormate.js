/**
 * This function is used to convert the time in milliseconds to the date or time format.
 * @param {*} value
 * @param {*} type 
 * @param {*} inMs 
 * @returns 
 */

const getTimeFormate = (value, type, inMs) => {

    if (!type) return value;

    if (!inMs) {
        value = value * 1000;
    }

    const date = new Date(value);
    let options;

    if (type === 'date') {
        options = {
            year: 'numeric',
            month: 'long',
            week: 'long',
            day: 'numeric'
        }
    } else if (type === 'time') {
        options = {
            hour: 'numeric',
            minute: 'numeric',
        }
    }

    return new Intl.DateTimeFormat('en-US', options).format(date);

}


export default getTimeFormate;
