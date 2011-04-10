/* Placeholder functionality for non-placeholder browsers */

$.fn.placehold_me = function(){
  return this.each(function() {
    var $this = $(this),
        val = $this.attr('placeholder');
    if( $this[0].nodeName === "INPUT" ){
      if($this.attr('type') === "text"){
        $this.attr('title', val);
        $this.val(val)
          .focus(function(){
            if($this.attr('title') == val) $this.val("");
          })
          .blur(function(){
            if( $this.val() === "" ) $this.val(val);
          });
        }
        else if($this.attr('type') === "password"){
          var $offset = $this.offset();
          $('body').append("<span class='pass-span pldr-" + $this.attr('id') + "'>" + val + "</span>");
          $('.pldr-' + $this.attr('id') + '').css("position", "absolute").css("top", $offset.top + 4).css("left", $offset.left + 5).css("z-index", "9999");
          $this.focus(function(){
            //if($this.attr('title') === val){
              //$this.val("");
              $('.pldr-' + $this.attr('id') + '').hide();
            //}
          })
          .blur(function(){
            if( $this.val() === "" ){
              $('.pldr-' + $this.attr('id') + '').show();
            }
          });
          $('.pass-span').click(function(){
            $(this).hide();
            var $focusInputTo = "#" + $(this).attr('class').split(' ')[1].replace("pldr-", "");
            $($focusInputTo).focus();
          });
        }
      }
      else if($this[0].nodeName === "TEXTAREA" ){
        $this.attr('title', val);
        $this.val(val)
          .focus(function(){
            if($this.attr('title') == val) $this.val("");
          })
          .blur(function(){
            if( $this.val() === "" ) $this.val(val);
          });
      }
      else{
        return false;
      }
  });
};