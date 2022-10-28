if(typeof jQuery==='undefined'){throw new Error('Make sure jQuery is included before the jquery.adi.js');};(function($){'use strict';var Adi;$.adi=function(args){var options=$.extend({},Adi.defaults,args);return new Adi(options);};Adi=function(args){$.extend(this,args);if(this._check()){this._init();this.active();}
if(!this._check()){this.inactive();}};Adi.prototype._check=function(){return $.adblock===undefined};Adi.prototype._init=function(){this._append();};Adi.prototype._setTemplate=function(title,content){return '<div class="jquery-adi">'+
'<div class="jquery-adi_content">'+
'<button class="jquery-adi_close"></button>'+
'<h2>'+title+'</h2>'+
'<p>'+content+'</p>'+
'</div>'+
'</div>';};Adi.prototype._append=function(callback){this.$el=$(this._setTemplate(this.title,this.content)).appendTo($(document.body)).addClass(this.theme);this._show();};Adi.prototype._show=function(){var that=this;this.$el.show();this._center();this._controls();this.onOpen(this.$el);};Adi.prototype._controls=function(){var that=this;function close(){that.$el.hide();that.onClose(that.$el);}
this.$el.on('click','.jquery-adi_close',close);$(document).on('keyup',function(e){if(e.keyCode==27)
close();});};Adi.prototype._center=function(){var $modal=this.$el.find('.jquery-adi_content');$modal.css('margin-top',-Math.abs($modal.outerHeight()/2));};Adi.defaults={title:'Adblock detected!',content:'We noticed that you may have an Ad Blocker turned on. Please be aware that our site is best experienced with Ad Blockers turned off.',theme:'light',onOpen:function(){},onClose:function(){},active:function(){},inactive:function(){}};})(jQuery);