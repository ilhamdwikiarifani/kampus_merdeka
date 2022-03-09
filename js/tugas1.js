//kucing-------------------------------------------------
$("document").ready(function () {
  $(".kucing").click(function () {
    $(this).css({
      background: "url('images/kucing.jpg')",
      "background-size": "cover",
    });
  });
  $(".kucing").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/kucing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".kucing").mouseover(function () {
    $(this).css({
      background: "rgb(76, 174, 240)",
    });
  });

  //kuda----------------------------------------------
  $(".kuda").click(function () {
    $(this).css({
      background: "url('images/kuda.jpg')",
      "background-size": "cover",
    });
  });
  $(".kuda").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/kuda.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".kuda").mouseover(function () {
    $(this).css({
      background: "rgb(76, 174, 240)",
    });
  });

  //Ayam------------------------------------------------
  $(".ayam").click(function () {
    $(this).css({
      background: "url('images/ayam.jpeg')",
      "background-size": "cover",
    });
  });
  $(".ayam").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/ayam.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".ayam").mouseover(function () {
    $(this).css({
      background: "rgb(76, 174, 240)",
    });
  });

  //Anjing
  $(".anjing").click(function () {
    $(this).css({
      background: "url('images/anjing.jpg')",
      "background-size": "cover",
    });
  });
  $(".anjing").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/anjing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".anjing").mouseover(function () {
    $(this).css({
      background: "rgb(76, 174, 240)",
    });
  });

  //Burung------------------------------------------------
  $(".burung").click(function () {
    $(this).css({
      background: "url('images/burung.jpg')",
      "background-size": "cover",
    });
  });
  $(".burung").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/burung.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".burung").mouseover(function () {
    $(this).css({
      background: "rgb(76, 174, 240)",
    });
  });
});
