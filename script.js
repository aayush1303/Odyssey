function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locoScroll();

function cursorEffect() {
    var page1Content = document.querySelector('#page1-content');
    var cursor = document.querySelector('#cursor');

    page1Content.addEventListener('mousemove', function () {
        gsap.to(cursor, { duration: 0.2, x: event.clientX, y: event.clientY });
    })

    page1Content.addEventListener('mouseenter', function () {
        gsap.to(cursor, { duration: 0.2, scale: 1 });
    })

    page1Content.addEventListener('mouseleave', function () {
        gsap.to(cursor, { duration: 0.2, scale: 0 });
    })
}
cursorEffect();

function page2Animation() {
  gsap.to('.custom-heading', {
      y: 0,
      opacity:1,
      ease: Expo.easeInOut,
      duration:2,
      scrollTrigger: {
          trigger: '#page2',
          scroller: '#main',
          start: 'top 75%',
          end: 'top 45%',
          toggleActions: 'play none none reset',
          markers: true, // Optional: For debugging, shows trigger area
      }
  });

  gsap.to('.time', {
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#page2',
        scroller: '#main',
        start: 'top 75%',
        end: 'top 45%',
        toggleActions: 'play none none reset',
        markers: true, // Optional: For debugging, shows trigger area
    }
});
gsap.to('.paragraph', {
  y: 0,
  opacity: 1,
  ease: Expo.easeInOut,
  duration: 3,
  stagger: 0.5,
  scrollTrigger: {
      trigger: '#page2',
      scroller: '#main',
      start: 'top 75%',
      end: 'top 45%',
      toggleActions: 'play none none reset',
      markers: true, // Optional: For debugging, shows trigger area
  }
});
gsap.to('.hr', {
  opacity: 1,
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 0.2,
  width:'90%',
  scrollTrigger: {
      trigger: '#page2',
      scroller: '#main',
      start: 'top 75%',
      end: 'top 45%',
      toggleActions: 'play none none reset',
      markers: true, // Optional: For debugging, shows trigger area
  }
});
}

page2Animation();

function page4Animation() {

  gsap.to('.custom-heading2', {
    y: 0,
    opacity:1,
    ease: Expo.easeInOut,
    duration:2,
    scrollTrigger: {
        trigger: '#page4',
        scroller: '#main',
        start: 'top 75%',
        end: 'top 45%',
        toggleActions: 'play none none reset',
        markers: true, // Optional: For debugging, shows trigger area
    }
});

gsap.to('.hr2', {
  opacity: 1,
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 0.2,
  width:'90%',
  scrollTrigger: {
      trigger: '#page4',
      scroller: '#main',
      start: 'top 75%',
      end: 'top 45%',
      toggleActions: 'play none none reset',
      markers: true, // Optional: For debugging, shows trigger area
  }
});

}

page4Animation();

function page5Animation() {
  
    gsap.to('.footer-end', {
      y: 0,
      opacity:1,
      ease: Expo.easeInOut,
      duration:2,
      scrollTrigger: {
          trigger: '#page5',
          scroller: '#main',
          start: 'top 65%',
          end: 'top 7%',
          toggleActions: 'play none none reset',
          markers: true, // Optional: For debugging, shows trigger area
      }
  });
}

page5Animation();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, // Keep autoplay after user interaction
    },
    speed: 1000, // Adjust slide speed (1 second per slide)
    effect: 'slide', // Use slide effect for continuous sliding
  });