document.addEventListener("DOMContentLoaded", function() {
  var lazyImagesScroll = [].slice.call(document.querySelectorAll("img.lazy"));
  var activeLazyImage = false;

  const lazyLoad = function() {
    if (activeLazyImage === false) {
      activeLazyImage = true;

      setTimeout(function() {
        lazyImagesScroll.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;

            lazyImage.classList.remove("lazy");

            lazyImagesScroll = lazyImagesScroll.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImagesScroll.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        activeLazyImage = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});
