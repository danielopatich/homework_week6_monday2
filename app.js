// MODELS //
var Person = Backbone.Model.extend({
  urlRoot: 'http://tiny-starburst.herokuapp.com/collections/posts',
  validate: function(attrs, options){
    if(attrs.first.trim() === ''){
      alert('put some stuff in');
      throw new Error('noooooooo');
    }
    if(attrs.last.trim() === ''){
      alert('put some stuff in');
      throw new Error('noooooooo');
    }
    if(attrs.address.trim() === ''){
      alert('put some stuff in');
      throw new Error('noooooooo');
    }
    if(attrs.phone.trim() === ''){
      alert('put some stuff in');
      throw new Error('noooooooo');
    }
  }
});
// END MODELS //
// VIEWS //
var PersonView = Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#formTemplate').html()),
  events: {
    'click .submitButton': 'send',
  },

  send: function(event){
    var first = this.$('.first').val();
    var last = this.$('.last').val();
    var address = this.$('.address').val();
    var phone = this.$('.phone').val();
    // var person = new Person();
    this.model.set({
      first: first,
      last: last,
      address: address,
      phone: phone
    })
    this.model.save(null, {
      success: function(){
        console.log('woooo');
      },
      error: function(){
        console.log('nope');
      }
    });
  },
  handleSendClick: function(event){
    console.log('Submitted.')
    event.preventDefault();
    this.send();
  },

  render: function(){
    this.$el.html(this.template({}));
    return this;
  }
});

var personStuff = new PersonView({model: new Person()});
personStuff.render();
$('main').append(personStuff.el);
// END VIEWS //
