class Worker {
    constructor (firstName, lastName, wokDays, dailySalary, cashBonus) {
        this.firstName = firstName;
        this.lastName = lastName;

        if( (typeof firstName !== "string") || (typeof lastName !== "string") ) {
            throw new TypeError('Invalid data type for Name');
        }

        this.wokDays = wokDays;
        this.dailySalary = dailySalary;

        if( isNaN(wokDays - dailySalary) || (typeof wokDays !== "number") || (typeof dailySalary !== "number")) {
            throw new TypeError('Invalid data type for wokDays or dailySalary');
        }

        if (wokDays < 0 || dailySalary < 0) {
            throw new RangeError('Invalid data range for wokDays or dailySalary');
        }

        this.cashBonus = cashBonus;

        if ( typeof cashBonus !== "boolean" ) {
            throw new TypeError('Invalid data type for cashBonus');
        }

    }

    getFullName() {
        return `First name is ${this.firstName}, Last name is ${this.lastName}`
    }

    getSalary() {
        return this.wokDays*this.dailySalary;
    }

    setCashBonus() {
        if (cashBonus) {
            this.dailySalary*=1.25;
        }
    }
 
}

console.log(new Worker("a", "b", 12, 2, true).getSalary());