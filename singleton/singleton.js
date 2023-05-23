/*
    Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
*/


// console.log('Singleton Desing Pattern');
// class Singleton{
//     getInstance() {
//         return Singleton.instance
//     }
//     constructor() {
//         if(Singleton.instance) {
//             console.log('It already exists')
//             return Singleton;
//         }
//         console.log('instance created')
//         Singleton.instance = this;
//     }
// }

// const singleton = new Singleton();
// const singleton2 = new Singleton();


class WeekDays{
    daysEs = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
    daysEn = ['monday','thusday','wednesday','thursday','friday','saturday','sunday']

    constructor(lang) {
        this.lang = lang;
        if(WeekDays.instance){
            return WeekDays.instance;
        }
        this.instance = this;

    }

    getDays() {
        return this.lang  === "es" ? this.daysEs : this.daysEn;
    }
}
const weekDays = new WeekDays('es');
//Displays the week days in spanish
console.log(weekDays.getDays());
//Display the week days in spanish because it is the same instance of the class
const weekDays2 = new WeekDays('en');
console.log(weekDays.getDays());

