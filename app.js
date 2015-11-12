// MODELS //
var Post = Backbone.Model.extend({
  urlRoot: 'http://tiny-starburst.herokuapp.com/collections/posts'
});
// END MODELS //
// COLLECTIONS //
var Posts = Backbone.Collection.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/posts',
  model: Post
});
// END COLLECTIONS //
// VIEWS //
var PostView = Backbone.View.extend({
  tagName: 'section',
  initialize: function(){
    this.render();
    console.log('Post Page Rendered.')
  },
  events: {
    'click .postButton': 'handlePostClick',
  },

  send: function(event){
    var name = this.$('.name').val();
    var message = this.$('.message').val();
    var post = new Post({
      name: name,
      message: message,
    });
    this.model.save(null, {
      success: function() {
      }
    });
    postsCollection.add(post);
  },

  handleEnter: function(){
    console.log('Submitted.')
    event.preventDefault();
  },
  handlePostClick: function(){
    console.log('Submitted.')
    event.preventDefault();
    if (event.keyCode === 13) {
        this.send();
    }
  },
  render: function(){
    var html = $('#inputBoxTemplate').html();
    this.$el.html(html);
    return this;
  },
});

var postStuff = new PostView();
var postCollection = new Posts();
postStuff.render();
$('main').append(postStuff.el);
// END VIEWS //
