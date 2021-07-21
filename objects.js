/* Литеральный объект  */
const cat = {
    age: 5,
    furColor: "white",
    canSwim: false,
    sayMeow: function (text) {
        return text;
    },
    addAge: function (number) {
        this.age += number;
    }
}

/* Функция конструктор */
const Cat = function (age = 1, furColor = null, canSwim = null) {
    this.age = age
    this.furColor = furColor
    this.canSwim = canSwim
    this.sayMeow = function () {
        return "Meow";
    }
    this.addAge = function (number) {
        if (isNaN(number)) {
            return null;
        }
        this.age = this.age + number;
        return this.age;
    }
};

const barsik = new Cat();
const mursik = new Cat(4, "red", false);
