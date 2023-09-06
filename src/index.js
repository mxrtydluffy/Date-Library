const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dys = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Challenge 1

/**
   * @class D
   * Constructor that initializes the date object.
   * @param {...*} args - Arguments to be passed to the native Date object.
*/
class D {
    /**
        * Initializes new D instance.
        * @param {...*} args - Initialize the Date object.
    */
    constructor(...args) {
        this._date = new Date(...args);
    }

// Challenge 2

    // returns full year
    /**
        * Gets the full year of the date.
        * @returns {number} of the full year.
    */
    get year() {
        return this._date.getFullYear();
    }

    // returns short year
    /**
        * Gets the last two digits of the year.
        * @returns {string} The short term of the year.
    */
    get yr(){
        return this._date.getFullYear() % 100;
    }

    // returns month
    /**
        * Gets the full month name of the date.
        * @returns {string} The full month name.
    */
    get month() {
        return months[this._date.getMonth()];
    }

    // returns short month
    /**
        * Gets the abbreviated month name of the date.
        * @returns {string} The abbreviation of the month name.
    */
    get mon() {
        return mons[this._date.getMonth()];
    }

    // returns day
    /**
        * Gets the full day of the week.
        * @returns {string} The full day name.
    */
    get day() {
        return days[this._date.getDay()];
    }

    // returns short day
    /**
        * Gets the abbreviated form of the day of the week.
        * @returns {string} The abbreviated day name.
    */
    get dy(){
        return dys[this._date.getDay()];
    }

    // returns date
    /** 
        * Gets the day of the month
        *  @returns {number} The Date.
    */
    get date(){
        return this._date.getDate();
    }

    // returns hours
    /**
        * Gets the hour of the day.
        * @returns {number} The Hour.
   */
    get hours() {
        return this._date.getHours();
    }

    // returns minutes
    /**
        * Gets the minutes of the hour.
        * @returns {number} The Minutes.
    */
    get min() {
        return this._date.getMinutes();
    }

    // returns seconds
    /** 
        * Get the seconds
        *  @returns {number} The Seconds.
    */
    get sec() {
        return this._date.getSeconds();
    }

    // Challenge 3
    /**
        * Returns the date formatted according to the specified mask
        * @param {string} [mask='Y M D'] - Output format - Format mask
        * @returns {string} - Formatted date string
    */

    format(mask = 'Y M D') {
        let result = "";
        for (let char of mask) {
            switch (char) {
                case "Y":
                    result += this.year;
                    break;
                case "y":
                    result += this.yr;
                    break;
                case "M":
                    result += this.month;
                    break;
                case "m":
                    result += this.mon;
                    break;
                case "D":
                    result += String(this.date).padStart(2, "0");
                    break;
                case "d":
                    result += this.date;
                    break;
                case "#":
                    result += String(this.dy).padStart(2, "0");
                    break;
                case "H":
                    result += String(this.hours).padStart(2, "0");
                    break;
                case "h":
                    result += this.hours;
                    break;
                case "I":
                    result += String(this.min).padStart(2, "0");
                    break;
                case "i":
                    result += this.mins;
                    break;
                case "S":
                    result += String(this.secs).padStart(2, "0");
                    break;
                case "s":
                    result += this.secs;
                    break;
                default:
                    result += char;                    
            }
        }
        return result;
    }

    // Challenge 4
    /**
        * Describes how long ago or in the future the date is.
        * @returns {string} Time difference in string representation.
    */
    when() {
        // Get current date & time
        const currentDate = new Date();
        const secDiff = Math.floor((this._date - currentDate) / 1000)

        if (secDiff === 0) {
            return 'today'
        }
        const seconds = Math.abs(secDiff);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years} ${years === 1 ? 'year' : 'years'}
            ${secDiff > 0 ? 'from now' : 'ago'}`;
        } else if (months > 0) {
            return `${months} ${months === 1 ? 'month' : 'months'}
            ${secDiff > 0 ? 'from now' : 'ago'}`;
        } else if (days > 0) {
            return `${days} ${days === 1 ? 'day' : 'days'}
            ${secDiff > 0 ? 'from now' : 'ago'}`;
        } else if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'}
            ${secDiff > 0 ? 'from now' : 'ago'}`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}
            ${secDiff > 0 ? 'from now' : 'ago'}`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'}
            ${secDiff > 0 ? 'from now' : 'ago'}`;
        }
    }
}

// No parameters:
const a = new D();
const b = new D("9/26/1965");
const c = new D(1970, 1, 1, 0, 0, 0);
const d = new D(new Date());

// console log challenges
let testing = false;
if (testing == true) {
// Challenge 1
console.log("________________Challenge 1________________");
console.log(a._date);
console.log(b._date);
console.log(c._date);
console.log(d._date);

// Challenge 2
console.log("________________Challenge 2________________");
console.log("Full year:", d.year);
console.log("Short year:", d.yr); 
console.log("Full month:", d.month);
console.log("Short month:", d.mon); 
console.log("Full day:", d.day);
console.log("Short day:", d.dy);
console.log("Date:", d.date);
console.log("Hour:", d.hours);
console.log("Minutes:", d.mins);
console.log("Seconds:", d.secs);

// Challenge 3
console.log("________________Challenge 3________________");
console.log(d.format());
console.log(d.format("y/m/d"));
console.log(d.format("H:I:S"));
console.log(d.format("h:i:s"));
console.log(d.format("Y-M-D h:I:S"));

// Challenge 4
console.log("________________Challenge 4________________");
let e = new D(2023, 0, 2, 3, 4, 5);
console.log(e.when());
e = new D(2023, 9, 2, 3, 4, 5);
console.log(e.when());
e = new D(2028, 9, 2, 3, 4, 5);
console.log(e.when());
e = new D(2023, 6, 30, 3, 4, 5);
console.log(e.when());
e = new D();
console.log(e.when());
}

module.exports = { D };