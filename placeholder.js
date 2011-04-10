$.fn.placehold_me = function(){
  return this.each(function() {
    var $this = $(this),
        val = $this.attr('placeholder');
    if( $this[0].nodeName !== "INPUT" ) return false;
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
        console.debug("PASSWORD");
      }
  });
};

$.fn.password_placehold_me = function(){
  return this.each(function() {
    var $this = $(this),
        val = $this.attr('placeholder');
    if( $this[0].nodeName !== "INPUT" ) return false;
      $this.attr('title', val);
      $this.val(val)
        .focus(function(){
          if($this.attr('title') == val) $this.val("");
        })
        .blur(function(){
          if( $this.val() === "" ) $this.val(val);
        });
  });
};

$.fn.textarea_placehold_me = function(){
  return this.each(function() {
    var $this = $(this),
        val = $this.attr('placeholder');
    if( $this[0].nodeName !== "TEXTAREA" ) return false;
      $this.attr('title', val);
      $this.attr('value', val)
        .focus(function(){
          if($this.attr('title') == val) $this.attr('value', '');
        })
        .blur(function(){
          if( $this.val() === '' ) $this.attr('value', val);
        });
  });
};