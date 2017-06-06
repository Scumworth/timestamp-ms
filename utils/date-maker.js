const moment = require('moment');

const makeDate = (rawDate) => {
    
    const formattedDate = {unix: null, natural: null};
    
    if (+rawDate >= 0) {
        formattedDate.unix = +rawDate;
        formattedDate.natural = moment.unix(+rawDate).format("MMMM D, YYYY")
    }
    
    if (!/^[0-9]+$/.test(rawDate) &&  moment(rawDate, "MMMM D, YYYY").isValid()) {
        console.log('test');
        const unixString = moment(rawDate, 'MMMM D, YYYY').format('X');
        formattedDate.unix = +unixString; 
        formattedDate.natural = moment.unix(formattedDate.unix).format('MMMM D, YYYY');
    }
        
     
    return JSON.stringify(formattedDate);
    
}

module.exports.makeDate = makeDate;
