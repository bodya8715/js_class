'use strict';

const PREMIUM_CASH = 1.25;

class Worker {
    constructor (firstName, lastName, wokDays, dailySalary, cashBonus) {
        if( (typeof firstName !== "string") || (typeof lastName !== "string") ) {
            throw new TypeError('Свойства firstName и lastName необходимо ввести как строку');
        }

        this.firstName = firstName;
        this.lastName = lastName;

        if( isNaN(wokDays - dailySalary) || (typeof wokDays !== "number") || (typeof dailySalary !== "number")) {
            throw new TypeError('Свойства wokDays и dailySalary необходимо ввести как число');
        }

        if (wokDays < 0 || dailySalary < 0) {
            throw new RangeError('Неправильный диапазон данных для свойства wokDays или dailySalary');
        }

        this.wokDays = wokDays;
        this.dailySalary = dailySalary;

        if ( typeof cashBonus !== "boolean" ) {
            throw new TypeError('Свойство cashBonus необходимо ввести как логическое значение');
        }

        this.cashBonus = cashBonus;
    }

    getFullName() {
        return `First name is ${this.firstName}, Last name is ${this.lastName}`
    }

    getSalary() {
        if(this.cashBonus) {
            return this.wokDays * this.dailySalary * PREMIUM_CASH;
        }

        return this.wokDays*this.dailySalary;
    }
 
}

console.log(new Worker("a", "b", 12, 2, true).getSalary());