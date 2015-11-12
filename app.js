// MODELS //
var Person = Backbone.Model.extend({
  urlRoot: 'http://tiny-starburst.herokuapp.com/collections/posts'
});
// END MODELS //
// VIEWS //
var PersonView = Backbone.View.extend({
  events: {
    'click .submitButton': 'send',
  },

  send: function(event){
    var first = this.$('.first').val();
    var last = this.$('.last').val();
    var address = this.$('.address').val();
    var phone = this.$('.phone').val();
    var person = new Person();
    if(first.trim() === ''){
      alert('put some stuff in');
      return;
    }
    if(last.trim() === ''){
      alert('put some stuff in');
      return;
    }
    if(address.trim() === ''){
      alert('put some stuff in');
      return;
    }
    if(phone.trim() === ''){
      alert('put some stuff in');
      return;
    }
    person.save();
  },
  handleSendClick: function(){
    console.log('Submitted.')
    event.preventDefault();
    this.send();
  },

  render: function(){
    this.model.toJSON();
    });
    return this;
  }
});

var personStuff = new PersonView({
personStuff.render();
$('main').append(personStuff.el);
// END VIEWS //
