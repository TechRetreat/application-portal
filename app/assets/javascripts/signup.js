var Signup = {
  screen: 0,
  nextScreen: function() {
    $(".screen[data-screen=" + this.screen + "]").addClass("screen--closed");
    this.screen += 1;
    $(".screen[data-screen=" + this.screen + "]").removeClass("screen--future");
  },
  prevScreen: function() {
    $(".screen[data-screen=" + this.screen + "]").addClass("screen--future");
    this.screen -= 1;
    $(".screen[data-screen=" + this.screen + "]").removeClass("screen--closed");
  }
};

$(document).on("page:change", function() {
  if ($(".signup").length == 0) return;
  Signup.screen = 0;
});
$(document).on("click", ".signup__next", function() {
  Signup.nextScreen();
});
$(document).on("click", ".signup__prev", function() {
  Signup.prevScreen();
});
