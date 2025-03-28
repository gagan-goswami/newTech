//  top button  //

$(document).ready(function () {
  $(".top").hide(0);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn(200);
    } else {
      $(".top").fadeOut(300);
    }
  });
  $(".top").click(function () {
    event.preventDefault();

    $("html , body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// sticky menu bar //

function menuSticky() {
  if ($(".is-sticky-on").length > 0) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 250) {
        $(".is-sticky-on").addClass("is-sticky-menu");
      } else {
        $(".is-sticky-on").removeClass("is-sticky-menu");
      }
    });
  }
}
menuSticky();

AOS.init();

// portfolio tab filters //

$(".owl-filter-bar").on("click", ".item", function (e) {
  e.preventDefault();
  var $item = $(this);
  var filter = $item.data("owl-filter");
  $(".owl-filter-bar .item").removeClass("active");
  $item.addClass("active");
  if (filter === "*") {
    $(".filter-item").show();
  } else {
    $(".filter-item").hide();
    $(filter).show();
  }
  owl.trigger("refresh.owl.carousel");
});

// counter //

$(document).ready(function () {
  $(".counter-value").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 5000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// testimonial

$(".slider-1").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplayHoverPause: true,
  dot: true,
  responsive: {
    0: {
      items: 2,
    },
    767: {
      items: 4,
    },
    991: {
      items: 5,
    },
  },
});

// team

$(".slider-2").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  margin: 12,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>',
  ],
  navClass: ["owl-prev", "owl-next"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 3,
    },
    991: {
      items: 4,
    },
  },
});

// testimonial //

$(".slider-3").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  margin: 12,
  nav: false,
  dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 3,
    },
  },
});

AOS.init();

// JavaScript
function playVideo() {
  // JavaScript
  class VideoModalManager {
    constructor() {
      this.init();
    }
    init() {
      $(".video-btn").click(function () {
        const $videoSrc = $(this).data("src");
        $(".modal").data("videoSrc", $videoSrc);
      });
      $(".modal").on("shown.bs.modal", function (e) {
        const $videoSrc = $(this).data("videoSrc");
        console.log("Video Source in modal:", $videoSrc); // Debugging
        $(this)
          .find("#video")
          .attr("src", $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
      });
      $(".modal").on("hide.bs.modal", function (e) {
        $(this).find("#video").attr("src", "");
      });
    }
  }
  // Initialize the VideoModalManager
  const videoModalManager = new VideoModalManager();
}

playVideo(); // Show popup when page loads
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("popupForm").style.display = "flex";
  }, 100);
});

// Close popup function
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// Show popup when page loads
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("popupForm").style.display = "flex";
  }, 100);
});

// Close popup function
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// Form submission handler
document
  .getElementById("mainPopupForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("popupName").value;
    const email = document.getElementById("popupEmail").value;
    const phone = document.getElementById("popupPhone").value;

    // Validate required fields
    if (!name || !email) {
      alert("Please fill in all required fields (Name and Email)");
      return;
    }

    // Format the WhatsApp message
    const whatsappMessage =
      `New Contact Form Submission:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `${phone ? `Phone: ${phone}` : ""}\n`;

    // Create WhatsApp URL with Indian country code (91)
    const whatsappUrl = `https://wa.me/918767827759?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Close the popup
    closePopup();

    // Reset the form
    e.target.reset();
  });

// Close popup when clicking outside the form
document.getElementById("popupForm").addEventListener("click", function (e) {
  if (e.target === this) {
    closePopup();
  }
});
