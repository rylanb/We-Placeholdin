/* Placeholder functionality for non-placeholder browsers */
(function($){
  $.fn.placehold_me = function(options){
    var settings = $.extend({}, $.fn.placehold_me.defaultOptions, options);
    
    return this.each(function() {
      var $this = $(this),
          val = $this.attr('placeholder');
      if($this[0].nodeName === "INPUT" || $this[0].nodeName === "TEXTAREA"){
        if($this.attr('type') === "text" || $this.attr('type') === "email" || $this[0].nodeName === "TEXTAREA"){
          $this.attr('title', val);
          $this.val(val)
            .focus(function(){
              if($this.attr('title') === $this.val()){
                $this.val("");
              }
            })
            .blur(function(){
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
        else{
          /*What is this!? Get outta here with that non input/text area nonsense!*/
          return false;
        }
    });
    
    $.fn.placehold_me.defaultOptions = {
      /* put options here included for future extensibility*/
    };
  };
})(jQuery);