/* Placeholder functionality for non-placeholder browsers */
(function($){
  $.fn.placehold_me = function(options){
    var settings = $.extend({}, $.fn.placehold_me.defaultOptions, options);

    /*Bind a form submit check to clear out default values if the user never entered the field
    and changed the text */
    $(this).parents('form').submit(function() {
      var $input_fields = $(this).find('input, textarea');
      $input_fields.each(function() {
        var input = $(this);
        if (input.val() === input.attr('placeholder')) {
          input.val('');
        }
      })
    });

    return this.each(function() {
      /* Check for Placeholder support natively in the browser here if you aren't including Modernizr - modernizr.com*/
      var $this = $(this),
          val = $this.attr('placeholder');

      /*What is this!? Get outta here with that non input/text area nonsense!*/
      if($this[0].nodeName != "INPUT" && $this[0].nodeName != "TEXTAREA"){return false;}

      /* checks if placeholder attribute exists*/

      /*Let's start the fun! Check what type of field you are dealing with.
      Textareas and inputs of type email/text are checked for now.
      Email is passed as type text, just included in case a browser gets uppity later */
      if( $this.val().length === 0 && val !== "" && val !== undefined ) {
        if($this.attr('type') === "text" || $this.attr('type') === "email" || $this[0].nodeName === "TEXTAREA"){
          $this.attr('title', val);
          $this.val(val).focus(function(){
            if($this.attr('title') === $this.val()){
              $this.val("");
            }
          }).blur(function(){
            if( $this.val() === "" ){
              $this.val(val);
            }
          });
        }
        else if($this.attr('type') === "password"){
          var $offset = $this.offset();
          $('body').append("<span class='pass-span pldr-" + $this.attr('id') + "'>" + val + "</span>");
          $('.pldr-' + $this.attr('id')).css("position", "absolute").css("top", $offset.top + 8).css("left", $offset.left + 5).css("z-index", "9999");
          $this.focus(function(){
              $('.pldr-' + $this.attr('id')).hide();
          })
          .blur(function(){
            if( $this.val() === "" ){
              $('.pldr-' + $this.attr('id')).show();
            }
          });
          $('.pass-span').click(function(){
            $(this).hide();
            var $focusInputTo = "#" + $(this).attr('class').split(' ')[1].replace("pldr-", "");
            $($focusInputTo).focus();
          });
        }
      }
    });

    $.fn.placehold_me.defaultOptions = {
      /* put options here. included for future extensibility*/
    };
  };
})(jQuery);
