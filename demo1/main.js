/**
 * 工厂模式
 * 用函数封装以特定接口创建对象。
 * 解决了创建多个相似对象多问题，但却没有解决对象识别的问题（怎么知道一个对象的原型）
 */
function createPerson(name, age, job) {
    let o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.sayName = function () {
        alert(this.name)
    }
    return o
}

/**
 * 构造函数模式
 * 构造函数可以用来创建特定类型的对象
 * 使用 instanceof 检测对象类型
 *
 * 缺点： 即使是公用的方法也要在每一个生成的实例中重新创建
 */
function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function () {
        alert(this.name)
    }
}

// new 操作符 经历四个步骤
/**
 * 1。创建一个新对象
 * 2。将构造函数的作用域赋给新对象（this指向新对象）
 * 3。执行构造函数中的代码（为新对象添加属性）
 * 4。返回新对象
 */

/**
 * 原型模式
 * 原型上的属性和方法由所有实例共享。
 */
~function () {
    function Person() {
    }

    Person.prototype.name = 'name'
    Person.prototype.age = 'age'
    Person.prototype.job = 'job'
    Person.sayName = function () {
        alert(this.name)
    }
}();

/**
 * 构造函数和原型模式
 * 构造函数用于定义实例属性，原型用于定义方法和共享的属性
 */

(function () {
    function Person(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    Person.prototype = {
        constructor: Person,
        sayName: function () {
            alert(this.name)
        }
    }
})();

/**
 * 寄生构造函数模式
 * 可以修改原生构造函数而不影响原型构造函数
 */
~function () {
    function Person(name, age, job) {
        let o = new Object();
        o.name = name
        o.age = age
        o.job = job
        o.sayName = function () {
            alert(this.name)
        }
        return o
    }
}();

// 例子
function SpecialArray() {
    let values = new Array()
    values.push.apply(values, arguments)
    values.toPipedString = function () {
        return this.join('|')
    }
    return values
}

let colors = new SpecialArray('red', 'blue', 'green')
colors.toPipedString() // 'red | blue | green'

/**
 * 稳妥构造函数模式
 * 稳妥的意思是，没有公共属性，方法也不引用this对象，不使用new操作符
 */

~function () {
    function Person(name, age, job) {
        let o = new Object()
        // ... code
        // 私有变量和函数
        // ... code
        o.sayName = function () {
            alert(name)
        }
        return o
    }
}();


// 继承

/**
 * 原型链继承
 * 使用原型链实现继承
 * 引用类型的原型属性会被所有属性共享
 */
function SuperType() {
    this.property = true
}

SuperType.prototype.getProperty = function () {
    return this.property
}

function SubType() {

}

SubType.prototype = new SuperType()


/**
 * 借用构造函数
 * 在子类型搞糟函数内部调用超类型构造函数，使用call或者apply。
 * 超类型的原型上的方法，子类型不可见，方法无法复用
 */

~function () {
    function SuperType() {
        this.colors = ['red', 'blue', 'green']
    }

    function Subtype() {
        SuperType.call(this)
    }
}();

/**
 * 组合继承
 * 可以避免原型链和构造函数的缺陷
 */
~function () {
    function SuperType(name) {
        this.name = name
        this.colors = ['red', 'blue', 'green']
    }

    SuperType.prototype.sayName = function () {
        alert(this.name)
    }

    function SubType(name, age) {
        SuperType.call(this, name)
        this.age = age
    }

    SubType.prototype = new SuperType()
    SubType.prototype.constructor = SubType
}();

/**
 * 原型式继承
 * 用一个对象作为另一个对象的原型对象。和直接定义prototype差不多。constructor是F
 * 这样引用类型仍然共享
 */
function object(o) {
    function F() {

    }

    F.prototype = o
    return new F()
}

/**
 * 寄生式继承
 */
function createAnother(original) {
    let clone = object(original)
    clone.sayHi = function () {
        alert('hi')
    }
    return clone
}

/**
 * 寄生组合继承
 */

(function () {
    function SuperType(name) {
        this.name = name;
        this.colors = ['red', 'blue', 'green']
    }

    SuperType.prototype.sayName = function () {
        alert(this.name)
    };

    function SubType(name, age) {
        SuperType.call(this, name)
        this.age = age
    }

    SubType.prototype = new SuperType()
    SubType.prototype.constructor = SubType

})();


