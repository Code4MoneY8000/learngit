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

function Waiter(name,payment){
    Staff.call(this,name,payment)
}

Waiter.prototype.serve = function(foodorder){
    console.log(Customerlist[CustomerNum]+"先生点了"+foodorder.name)
    Tony.cooking(foodorder)
}
Waiter.prototype.up = function(foodorder){
    console.log(Customerlist[CustomerNum]+"先生的"+foodorder.name+"请享用")
    Customerlist[CustomerNum].eat()
}

var SingleWaiter = (function(){
    var waiter
    return function(name,payment){
        if(!waiter){
            waiter = new Waiter(name,payment)
        }
        return waiter
    }
})()

function Cook(name,payment){
    Staff.call(this,name,payment)
}

Cook.prototype.cooking = function(foodorder){
    console.log(foodorder.name+"可以上了")
   Jay.up(foodorder)
}

var SingleCook = (function(){
    var cook
    return function(name,payment){
        if(!cook){
            cook = new Cook(name,payment)
        }
        return cook
    }
})()
var CustomerNum = 0
function Customer(){

}
function foodNum(){
    return parseInt(Math.floor(Math.random()*10))
}
var foodorder = {}
Customer.prototype.order = function(){
    var foodnum = foodNum()
    while(foodNum>3){
        foodnum = foodNum()
    }
    foodorder = foodList[foodnum]
    Jay.serve(foodorder)
}
Customer.prototype.eat = function(){
    console.log(Customerlist[CustomerNum]+"走了")
    CustomerNum++
    Customerlist[CustomerNum] = new Customer()
}
var Customerlist =["no1","no2","no3","no4"]
var foodList = [
    {
        name:"宫保鸡丁",
        price:20},
    {
        name:"炒茄子",
        price:15
    },{
        name:"红烧肉",
        price:30
    },{
        name:"土豆炖牛腩",
        price:45
    }]

var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 1,
    staff: []
});
//创建厨师和服务员
var Jay = new SingleWaiter("Jay",20000);
var Tony = new SingleCook("Tony", 30000);
Customerlist[CustomerNum] = new Customer();
ifeRestaurant.hire(Jay)
ifeRestaurant.hire(Tony)

//执行程序
Customerlist[CustomerNum].order()