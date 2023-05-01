function init(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()

gsap.to("#page2 img",{
   rotate:-15,
   scrollTrigger:{
      scroller:"#main",
      trigger:"#page2 img",
      start:"top 80%",
      scrub:3
   }
})

gsap.to("#main", {
  backgroundColor: "#111",
  scrollTrigger: {
      scroller: "#main",
      trigger: "#page2",
      start: "top -100%",
      end: "top -100%",
      // markers: true,
      scrub: 3
  }
})

var overlay = document.querySelector("#overlay")
var iscroll = document.querySelector("#scroll")

overlay.addEventListener("mouseenter",function(){
   iscroll.style.scale = 1;
})
overlay.addEventListener("mouseleave",function(){
   iscroll.style.scale = 0;
})
overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = `${dets.x-45}px`;
    iscroll.style.top = `${dets.y-38}px`;                                              
})

var page3 = document.querySelector("#page3")
var scroll1 = document.querySelector("#scroll1")

page3.addEventListener("mouseenter",function(){
  scroll1.style.opacity = 1
})
page3.addEventListener("mouseleave",function(){
  scroll1.style.opacity = 0
})
page3.addEventListener("mousemove",function(ee){
  scroll1.style.left = `${ee.x}px`
  scroll1.style.top = `${ee.y}px`
})

$('#page1 h1').textillate({
  in: {
      effect: 'fadeInUp',
      delayScale: 1,
  }
});

gsap.from("#page2 h1", {
  duration: 0.5,
  onStart: function () {
      $('#page2 h1').textillate({
          in: {
              effect: 'bounceIn',
              delayScale: 0.5,
          }
      });
  },
  scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      start: "top 90%"
  }
})

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -200%",
      scrub: true,
  }
})

tl.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#111",

})

tl.to("#nav", {
  color: "#111",
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})

// Make a timeline again to change color of nav and svg to white

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top -340%",
      end: "top -340%",
      scrub: true,
  }
})
tl2.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#fff",

})
tl2.to("#nav", {
  color: "#fff",
  background: "linear-gradient(#000000d5,#00000089,#00000000)",
})

// Make a timeline to pin svg and change color of nav to black
var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -140%",
      scrub: true,
  }
})

tl.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#111",

})


tl.to("#nav", {
  color: "#111",
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})

// Make a timeline again to change color of nav and svg to white

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top -340%",
      end: "top -340%",
      scrub: true,
  }
})
tl2.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#fff",

})
tl2.to("#nav", {
  color: "#fff",
  background: "linear-gradient(#000000d5,#00000089,#00000000)",
})


document.querySelector("#page4").addEventListener("mousemove", function (dets) {
  document.querySelector("#page4>img").style.left = (dets.x)+ "px"
  document.querySelector("#page4>img").style.top = (dets.y) + "px"
  document.querySelector("#page4>button").style.left = (dets.x + 50) + "px"
  document.querySelector("#page4>button").style.top = (dets.y + 200) + "px"
})

var elem = document.querySelectorAll("#elem")
elem.forEach(function(e){
   var a = e.getAttribute("data-img")
   e.addEventListener("mousemove",function(){
    document.querySelector("#page4>img").setAttribute("src",a)
   })
})

gsap.to("#page5", {
  scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top -25%",
      end: "top -100%",
      scrub: true,
      pin: true,
      // markers: true
  }
})
gsap.from("#div-2",{
  y:500,
  scrollTrigger:{
      trigger:"#div-2",
      scroller:"#main",
      start:"top 80%",
      end:"top 50%",
      scrub:2,
      markers:true
  }
})

var scroll3 = document.querySelector("#scroll3")
var page8 = document.querySelector("#page8")

page8.addEventListener("mouseenter",function(){
  scroll3.style.opacity = 1
})
page8.addEventListener("mouseleave",function(){
  scroll3.style.opacity = 0
})
page8.addEventListener("mousemove",function(dets){
  scroll3.style.left = `${dets.x+ 40}px`
  scroll3.style.top = `${dets.y-35}px`
})
var btn = document.querySelector("#page9 #btn")
var button1 = document.querySelector("#btn button")
var white = document.querySelector(".white")
btn.addEventListener("mouseenter",function(){
  white.style.top = "0%"
  button1.style.color = "#111"
})
btn.addEventListener("mouseleave",function(){
  white.style.top = "100%"
  button1.style.color = "#fff"
})
var btn1 = document.querySelector("#btn1")
var button = document.querySelector("#btn1 button")
var white1 = document.querySelector(".white1")
btn1.addEventListener("mouseenter",function(){
  white1.style.top = "0%"
  button.style.color = "#111"
})
btn1.addEventListener("mouseleave",function(){
  white1.style.top = "100%"
  button.style.color = "#fff"
})
var button3 = document.querySelector(".nav-bar button")
var white2 = document.querySelector(".white2")
button3.addEventListener("mouseenter",function(){
  white2.style.top = "0%"
  button3.style.color = "#fff"
})
button3.addEventListener("mouseleave",function(){
  white2.style.top = "100%"
  button3.style.color = "#111"
})

var scroll4 = document.querySelector("#scroll4")
var part1 = document.querySelector(".half-prt1")


part1.addEventListener("mousemove",function(dets){

  scroll4.style.opacity = `1`
  scroll4.style.left = `${dets.x-70}px`
  scroll4.style.top = `${dets.y-55}px`
})
part1.addEventListener("mouseleave",function(){
  scroll4.style.opacity = `0`
})
var scroll5 = document.querySelector("#scroll5")
var part2 = document.querySelector(".half-prt2")


part2.addEventListener("mousemove",function(dets){
  scroll5.style.left = `${dets.x}px`
  scroll5.style.top = `${dets.y}px`
})
// part2.addEventListener("mouseleave",function(){
//   scroll5.style.opacity = 0
// })

document.querySelector("#nav i").addEventListener("click",function(){
  document.querySelector("#full-scr").style.top = "0vh"
})
document.querySelector("#full-scr i").addEventListener("click",function(){
  document.querySelector("#full-scr").style.top = "-100vh"
})