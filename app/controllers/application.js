/*global Ember */

var Person = Ember.Object.extend({
  // these will be supplied by `create`
  firstName: null,
  lastName: null,

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  fullNameAlternative: Ember.computed('firstName', 'lastName', function() {
    return this.get('lastName') + ' ' + this.get('firstName');
  })
});

var ironMan = Person.create({
  firstName: "Tony",
  lastName:  "Stark"
});

ironMan.get('fullName')

// ============

Person = Ember.Object.extend({
  firstName: null,
  lastName: null,
  age: null,
  country: null,

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  description: function() {
    return this.get('fullName') + '; Age: ' + this.get('age') + '; Country: ' + this.get('country');
  }.property('fullName', 'age', 'country')
});

var captainAmerica = Person.create({
  firstName: 'Steve',
  lastName: 'Rogers',
  age: 80,
  country: 'USA'
});

captainAmerica.get('description'); // "Steve Rogers; Age: 80; Country: USA"

// =============

Person = Ember.Object.extend({
  firstName: null,
  lastName: null,

  fullName: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      var nameParts = value.split(/\s+/);
      this.set('firstName', nameParts[0]);
      this.set('lastName',  nameParts[1]);
    }

    // getter
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});


var captainAmerica = Person.create();
captainAmerica.set('fullName', "William Burnside");
captainAmerica.get('firstName'); // William
captainAmerica.get('lastName'); // Burnside

// =============

export default Ember.Controller.extend({
  fullName: ironMan.get('fullName'),
  fullNameAlternative: ironMan.get('fullNameAlternative'),
  OtherAvenger: captainAmerica.get('description')
});
