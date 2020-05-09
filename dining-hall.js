var id=0
function gengerateid(){
    return ++id
}
function Restaurant(abbr){
    this.cash = abbr.cash
    this.seat = abbr.seat
    this.staff = abbr.staff
}
Restaurant.prototype.hire = function(newstaff){
    this.staff.push(newstaff)
}

Restaurant.prototype.fire = function(oldstaff){
    this.staff = this.staff.filter(function(el){
        return el!==oldstaff
    })
}

function Staff(name,payment){
    this.id = gengerateid()
    this.name = name
    this.payment = payment
}
Staff.prototype.work = function(){

}

function Waiter(name,payment){
    Staff.call(this,name,payment)
}
Waiter.prototype = Object.create(Staff.prototype)
Waiter.prototype.constructor = Waiter
Waiter.prototype.serve = function(list){
    if(Array.isArray(list)){
        this.list = list
    }else{
        alert("上菜啦")
    }
}

function Cook(name,payment){
    Staff.call(this,name,payment)
}
Cook.prototype = Object.create(Staff.prototype)
Cook.prototype.constructor = Cook
Cook.prototype.cooking = function(){
    alert("菜做好了！")
}

function Customer(){

}
Customer.prototype.order = function(){
    alert("点菜")
}
Customer.prototype.eat = function(){
    alert("吃菜")
}
function Food(name,cost,price){
    this.name = name
    this.cost = cost
    this.price = price
}

var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);