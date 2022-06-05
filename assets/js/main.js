$(document).ready(function () {
  function imageSelector(input, elem) {
    var image_input = document.querySelector(input);
    image_input.addEventListener("change", function () {
      var reader = new FileReader();
      reader.addEventListener("load", () => {
        var uploaded_image = reader.result;
        console.log(uploaded_image);
        document.querySelector(
          elem
        ).style.backgroundImage = `url(assets/images/111.jpg)`;
      });
      reader.readAsDataURL(this.files[0]);
    });
  }

  imageSelector("#image_input", "#display_image");
  imageSelector("#image_input2", "#display_image2");
  imageSelector("#image_input3", "#display_image3");
  imageSelector("#image_input4", "#display_image4");
  imageSelector("#image_input5", "#display_image5");

  // Select Design
  $("select").on("change", function () {
    if ($(this).prop("value") === "design-1") {
      var src1 = 'url("assets/images/Team.png")';
      var src2 = 'url("assets/images/Team2.png")';
      var src3 = 'url("assets/images/Team3.png")';
      var src4 = 'url("assets/images/Team4.png")';
      var src5 = 'url("assets/images/Team5.png")';
      $("#display_image").css("background-image", src1);
      $("#display_image2").css("background-image", src2);
      $("#display_image3").css("background-image", src3);
      $("#display_image4").css("background-image", src4);
      $("#display_image5").css("background-image", src5);

      // Choc-1 text
      $("#drag1").append("<div class='draggable' style='left:16%; top: 0%; display:block; width:fit-content;'>pirveli</div>");
      $("#drag1 > div").css("color", "red");
      $("#drag1 > div").css("left", "34px");
      $("#drag1 > div").css("right", "33px");
      $("#drag1 > div").css("top", "33px");

      $(".draggable").draggable({
        containment: "parent",
      });
    } else if ($(this).prop("value") === "design-2") {
      var src1 = 'url("assets/images/111.jpg")';
      $("#display_image").css("background-image", src1);
      $("#display_image2").css("background-image", src1);
      $("#display_image3").css("background-image", src1);
      $("#display_image4").css("background-image", src1);
      $("#display_image5").css("background-image", src1);
      console.log("design 2");
    } else if ($(this).prop("value") === "design-3") {
      console.log("design 3");
    } else if ($(this).prop("value") === "design-4") {
      console.log("design 4");
    } else if ($(this).prop("value") === "design-5") {
      console.log("design 5");
    } else if ($(this).prop("value") === "design-6") {
      console.log("design 6");
    }
  });

  // Text Add
  // $("#first-choc").on("keyup", function () {
  //   $("#drag1").html($(this).val());
  // });
  // $("#second-choc").on("keyup", function () {
  //   $("#drag2").html($(this).val());
  // });
  // $("#third-choc").on("keyup", function () {
  //   $("#drag3").html($(this).val());
  // });
  // $("#fourth-choc").on("keyup", function () {
  //   $("#drag4").html($(this).val());
  // });
  // $("#fifth-choc").on("keyup", function () {
  //   $("#drag5").html($(this).val());
  // });
  $("#plus1").click(function (e) { 
    e.preventDefault();
    let text = $("#first-choc").val();
    $("#drag1").append("<div class='draggable' style='left:16%; top: 0%; display:block; width:fit-content;'>" + text + "</div>");
    $(".draggable").draggable({
      containment: "parent",
    });
  });
  $("#plus2").click(function (e) { 
    e.preventDefault();
    let text = $("#second-choc").val();
    $("#drag2").append("<div class='draggable' style='left:16%; top: 0%; display:block; width:fit-content;'>" + text + "</div>");
    $(".draggable").draggable({
      containment: "parent",
    });
  });
  $("#plus3").click(function (e) { 
    e.preventDefault();
    let text = $("#third-choc").val();
    $("#drag3").append("<div class='draggable' style='left:16%; top: 0%; display:block; width:fit-content;'>" + text + "</div>");
    $(".draggable").draggable({
      containment: "parent",
    });
  });
  $("#plus4").click(function (e) { 
    e.preventDefault();
    let text = $("#fourth-choc").val();
    $("#drag4").append("<div class='draggable' style='left:16%; top: 0%; display:block; width:fit-content;'>" + text + "</div>");
    $(".draggable").draggable({
      containment: "parent",
    });
  });
  $("#plus5").click(function (e) { 
    e.preventDefault();
    let text = $("#fifth-choc").val();
    $("#drag5").append("<div class='draggable' style='left:16%; top: 0%; display:block; width:fit-content;'>" + text + "</div>");
    $(".draggable").draggable({
      containment: "parent",
    });
  });

  //Text color
  $("#colorpicker").change(function () {
    $("#drag1").css("color", $(this).val());
  });
  $("#colorpicker2").change(function () {
    $("#drag2").css("color", $(this).val());
  });
  $("#colorpicker3").change(function () {
    $("#drag3").css("color", $(this).val());
  });
  $("#colorpicker4").change(function () {
    $("#drag4").css("color", $(this).val());
  });
  $("#colorpicker5").change(function () {
    $("#drag5").css("color", $(this).val());
  });

  //Font Size
  $("#fontSize1").change(function () {
    $("#drag1").css("font-size", $(this).val() + "px");
  });
  $("#fontSize2").change(function () {
    $("#drag2").css("font-size", $(this).val() + "px");
  });
  $("#fontSize3").change(function () {
    $("#drag3").css("font-size", $(this).val() + "px");
  });
  $("#fontSize4").change(function () {
    $("#drag4").css("font-size", $(this).val() + "px");
  });
  $("#fontSize5").change(function () {
    $("#drag5").css("font-size", $(this).val() + "px");
  });

  $(".draggable").draggable({
    containment: "parent",
  });

  // Mobile Draggable
  /*!
   * jQuery UI Touch Punch 1.0.8 as modified by RWAP Software
   * based on original touchpunch v0.2.3 which has not been updated since 2014
   *
   * Updates by RWAP Software to take account of various suggested changes on the original code issues
   *
   * Original: https://github.com/furf/jquery-ui-touch-punch
   * Copyright 2011–2014, Dave Furfero
   * Dual licensed under the MIT or GPL Version 2 licenses.
   *
   * Fork: https://github.com/RWAP/jquery-ui-touch-punch
   *
   * Depends:
   * jquery.ui.widget.js
   * jquery.ui.mouse.js
   */

  (function (factory) {
    if (typeof define === "function" && define.amd) {
      // AMD. Register as an anonymous module.
      define(["jquery", "jquery.ui"], factory);
    } else {
      // Browser globals
      factory(jQuery);
    }
  })(function ($) {
    // Detect touch support - Windows Surface devices and other touch devices
    $.support.mspointer = window.navigator.msPointerEnabled;
    $.support.touch =
      "ontouchstart" in document ||
      "ontouchstart" in window ||
      window.TouchEvent ||
      (window.DocumentTouch && document instanceof DocumentTouch) ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    // Ignore browsers without touch or mouse support
    if ((!$.support.touch && !$.support.mspointer) || !$.ui.mouse) {
      return;
    }

    var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

    /**
     * Get the x,y position of a touch event
     * @param {Object} event A touch event
     */
    function getTouchCoords(event) {
      return {
        x: event.originalEvent.changedTouches[0].pageX,
        y: event.originalEvent.changedTouches[0].pageY,
      };
    }

    /**
     * Simulate a mouse event based on a corresponding touch event
     * @param {Object} event A touch event
     * @param {String} simulatedType The corresponding mouse event
     */
    function simulateMouseEvent(event, simulatedType) {
      // Ignore multi-touch events
      if (event.originalEvent.touches.length > 1) {
        return;
      }

      // Prevent "Ignored attempt to cancel a touchmove event with cancelable=false" errors
      if (event.cancelable) {
        event.preventDefault();
      }

      var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent("MouseEvents");

      // Initialize the simulated mouse event using the touch event's coordinates
      simulatedEvent.initMouseEvent(
        simulatedType, // type
        true, // bubbles
        true, // cancelable
        window, // view
        1, // detail
        touch.screenX, // screenX
        touch.screenY, // screenY
        touch.clientX, // clientX
        touch.clientY, // clientY
        false, // ctrlKey
        false, // altKey
        false, // shiftKey
        false, // metaKey
        0, // button
        null // relatedTarget
      );

      // Dispatch the simulated event to the target element
      event.target.dispatchEvent(simulatedEvent);
    }

    /**
     * Handle the jQuery UI widget's touchstart events
     * @param {Object} event The widget element's touchstart event
     */
    mouseProto._touchStart = function (event) {
      var self = this;

      // Interaction time
      this._startedMove = event.timeStamp;

      // Track movement to determine if interaction was a click
      self._startPos = getTouchCoords(event);

      // Ignore the event if another widget is already being handled
      if (
        touchHandled ||
        !self._mouseCapture(event.originalEvent.changedTouches[0])
      ) {
        return;
      }

      // Set the flag to prevent other widgets from inheriting the touch event
      touchHandled = true;

      // Track movement to determine if interaction was a click
      self._touchMoved = false;

      // Simulate the mouseover event
      simulateMouseEvent(event, "mouseover");

      // Simulate the mousemove event
      simulateMouseEvent(event, "mousemove");

      // Simulate the mousedown event
      simulateMouseEvent(event, "mousedown");
    };

    /**
     * Handle the jQuery UI widget's touchmove events
     * @param {Object} event The document's touchmove event
     */
    mouseProto._touchMove = function (event) {
      // Ignore event if not handled
      if (!touchHandled) {
        return;
      }

      // Interaction was moved
      this._touchMoved = true;

      // Simulate the mousemove event
      simulateMouseEvent(event, "mousemove");
    };

    /**
     * Handle the jQuery UI widget's touchend events
     * @param {Object} event The document's touchend event
     */
    mouseProto._touchEnd = function (event) {
      // Ignore event if not handled
      if (!touchHandled) {
        return;
      }

      // Simulate the mouseup event
      simulateMouseEvent(event, "mouseup");

      // Simulate the mouseout event
      simulateMouseEvent(event, "mouseout");

      // If the touch interaction did not move, it should trigger a click
      // Check for this in two ways - length of time of simulation and distance moved
      // Allow for Apple Stylus to be used also
      var timeMoving = event.timeStamp - this._startedMove;
      if (!this._touchMoved || timeMoving < 500) {
        // Simulate the click event
        simulateMouseEvent(event, "click");
      } else {
        var endPos = getTouchCoords(event);
        if (
          Math.abs(endPos.x - this._startPos.x) < 10 &&
          Math.abs(endPos.y - this._startPos.y) < 10
        ) {
          // If the touch interaction did not move, it should trigger a click
          if (
            !this._touchMoved ||
            event.originalEvent.changedTouches[0].touchType === "stylus"
          ) {
            // Simulate the click event
            simulateMouseEvent(event, "click");
          }
        }
      }

      // Unset the flag to determine the touch movement stopped
      this._touchMoved = false;

      // Unset the flag to allow other widgets to inherit the touch event
      touchHandled = false;
    };

    /**
     * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
     * This method extends the widget with bound touch event handlers that
     * translate touch events to mouse events and pass them to the widget's
     * original mouse event handling methods.
     */
    mouseProto._mouseInit = function () {
      var self = this;

      // Microsoft Surface Support = remove original touch Action
      if ($.support.mspointer) {
        self.element[0].style.msTouchAction = "none";
      }

      // Delegate the touch handlers to the widget's element
      self.element.on({
        touchstart: $.proxy(self, "_touchStart"),
        touchmove: $.proxy(self, "_touchMove"),
        touchend: $.proxy(self, "_touchEnd"),
      });

      // Call the original $.ui.mouse init method
      _mouseInit.call(self);
    };

    /**
     * Remove the touch event handlers
     */
    mouseProto._mouseDestroy = function () {
      var self = this;

      // Delegate the touch handlers to the widget's element
      self.element.off({
        touchstart: $.proxy(self, "_touchStart"),
        touchmove: $.proxy(self, "_touchMove"),
        touchend: $.proxy(self, "_touchEnd"),
      });

      // Call the original $.ui.mouse destroy method
      _mouseDestroy.call(self);
    };
  });
});
