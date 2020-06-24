$(document).ready(function () {
  const auto = true;
  const intervalTime = 8000;
  let slideInterval;

  $("#next").click(function () {
    nextSlide();
  });

  $("#prev").click(function () {
    prevSlide();
  });

  const nextSlide = () => {
    const current = $(".active-slide");
    current.removeClass("active-slide");

    if (current.next().length != 0) {
      current.next().addClass("active-slide");
    } else {
      $(".slide:first-child").addClass("active-slide");
    }

    setTimeout(() => current.removeClass("active-slide"));
  };

  const prevSlide = () => {
    const current = $(".active-slide");
    //Remove current class
    current.removeClass("active-slide");
    //Check for previous slide
    if (current.prev().length != 0) {
      //Add active-slide to previous slide
      current.prev().addClass("active-slide");
    } else {
      //Add current to last slide
      $(".slide:last-child").addClass("active-slide");
    }

    setTimeout(() => current.removeClass("active-slide"));
  };

  //Auto slide
  if (auto) {
    //Run next slide at interval
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  $(".btn-add-to-cart").click(function () {
    $("#slide-cart").addClass("show-cart");
  });

  $("#cart-close").click(function () {
    $("#slide-cart").removeClass("show-cart");
  });

  $("#show-cat").click(function () {
    $(".nav-sub-menu").toggleClass("show-cat");
  });

  $("#myBtn").click(function () {
    $("#myModal").css("display", "block");
  });

  $("#closeModal").click(function () {
    $("#myModal").css("display", "none");
  });

  $(window).click(function (e) {
    if ($(e.target).is("#myModal")) {
      $("#myModal").css("display", "none");
    }
  });

  $(".all-imgs img").click(function () {
    let imgSrc = $(this).attr("src");
    $(this).addClass("active-img").siblings().removeClass("active-img");
    $("#main-img").css("background-image", `url('${imgSrc}')`);
  });

  $("#main-img").mousemove(function (e) {
    let width = $(this).width();
    let height = $(this).height();

    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    let posX = (mouseX / width) * 100;
    let posY = (mouseY / height) * 100;

    $(this).css("background-position", `${posX}% ${posY}%`);
  });

  $("#main-img").mouseout(function (e) {
    $(this).css("background-position", "center");

    //console.log(e);
  });
});
