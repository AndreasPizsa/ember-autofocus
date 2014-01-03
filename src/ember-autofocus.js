;(function(){
	// my own namespace = my own clutter
	window.AndreasPizsa = window.AndreasPizsa || {};
	AndreasPizsa.Ember = AndreasPizsa.Ember || {};

	AndreasPizsa.Ember.ViewAutofocus = Ember.View.extend({
	  attributeBindings	: ['on','scroll'],
	  useScheduling		: true,
	  on				: null,
	  scroll			: false,
	  useNativeAutofocus: ('autofocus' in document.createElement('input')),

	  scheduleAutofocus: function() {
	  	if(this.useNativeAutofocus) return;

	    if (this.useScheduling) {
	      Ember.run.scheduleOnce('afterRender', this, this.autofocus);
	    } else {
	      this.autofocus();
	    }
	  }.on('didInsertElement'),

	  preventScrolling : function() {
	  	if(!this.scroll) {
	  		window.scrollTo(0,0);
	  		window.setTimeout(function(){window.scrollTo(0,0)},100);
	  	}
	  }.on('didInsertElement'),

	  autofocus: (function() {
	    var scrollX, scrollY, selector;
	    selector = this.on;
	    if (selector === null) {
	      selector = 'input[autofocus],textarea[autofocus],button[autofocus]';
	      if (Em.$(selector).length === 0) {
	        selector = 'input';
	      }
	    }
	    scrollX = window.scrollX, scrollY = window.scrollY;
	    Em.$(selector).first().select().focus();
	    window.scrollTo(scrollX, scrollY);
	  })
	});

	Ember.Handlebars.helper('autofocus', AndreasPizsa.Ember.ViewAutofocus);
	Ember.TextField.reopen({
	  attributeBindings: ['autofocus']
	});
}());