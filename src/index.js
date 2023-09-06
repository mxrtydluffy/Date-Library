const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dys = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Challenge 1
class D {
    constructor(...args) {
        this._date = new Date(...args);
    }

// Challenge 2
    // returns full year
    get year() {
        return this._date.getFullYear()
    }

    // returns short year
    get yr(){
        return this._date.getFullYear() % 100
    }

    // returns month
    get month() {
        return months[this._date.getMonth()]
    }

    // returns short month
    get mon() {
        return mons[this._date.getMonth()]
    }

    // returns day
    get day() {
        return days[this._date.getDay()]
    }

    // returns short day
    get dy(){
        return dys[this._date.getDay()]
    }

    // returns date
    get date(){
        return this._date.getDate()
    }

    // returns hours
    get hours() {
        return this._date.getHours()
    }

    // returns minutes
    get min() {
        return this._date.getMinutes()
    }

    // returns seconds
    get sec() {
        return this._date.getSeconds()
    }

    // Challenge 3

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
    when() {
        // Get current date & time
        const currentDate = new Date();
        const secDiff = Math.floor((this._date - currentDate) / 1000)

        if (diffInSeconds === 0) {
            return 'today'
        }
        const seconds = Math.abs(diffInSeconds);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years} ${years === 1 ? 'year' : 'years'}
            ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (months > 0) {
            return `${months} ${months === 1 ? 'month' : 'months'}
            ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (days > 0) {
            return `${days} ${days === 1 ? 'day' : 'days'}
            ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'}
            ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}
            ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'}
            ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        }
    }
}