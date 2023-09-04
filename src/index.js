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
}