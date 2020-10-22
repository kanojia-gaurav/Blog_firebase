/*var events  = require('events');
var util  = require('util');

var Person = function(name){
    this.name = name;
};
util.inherits(Person,events.EventEmitter);

var gaurav = new  Person('gaurav');
var kanojia = new  Person('kanojia');
var devil = new  Person('devil');

var people = [gaurav,kanojia,devil];
people.forEach(function(person){
    person.on('speak',function(mess){
        console.log(person.name+ ' said: '+mess);
    });
});

gaurav.emit('speak','hey bro');
kanojia.emit('speak',"hi gaurav");*/

var fs = require('fs');
