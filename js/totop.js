function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(obj, cls) {
    if (!hasClass(obj, cls)) obj.className += " " + cls;
}
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s+|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
window.onscroll = function() {
  var totop = document.getElementById('totop');
  var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
  var logoImg = document.getElementsByClassName("logoImg")[0]
  var name = document.getElementById('hidden')

  var logoImgLeft = parseInt(window.getComputedStyle(logoImg).marginLeft)
  console.log(logoImgLeft)
  if (document.body.clientWidth < 500 && logoImgLeft > 10) {
    logoImg.style.transform = 'translate(' + (document.body.clientWidth/2 -24 - scroll) + 'px,0)'
  }
  if (scroll >= 300) {
    addClass(totop,"show");
    //totop.classList.add("show");
  } else {
    removeClass(totop,"show");
    removeClass(totop,"launch");
    //totop.classList.remove("show", "launch");
  }
};
function gotoTop(aSpeed, time) {
  aSpeed = aSpeed || 0.1;
  time = time || 10;
  var totop = document.getElementById('totop');
  var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
  var speeding = 1 + aSpeed;
  window.scrollTo(0, Math.floor(scroll / speeding));
  if (scroll > 0) {
    var run = "gotoTop(" + aSpeed + ", " + time + ")";
    window.setTimeout(run, time);
  }
}
totop.onclick = function() {
  var totop = document.getElementById('totop');
  gotoTop(0.1, 20);
  addClass(totop,"launch");
  //totop.classList.add('launch');
  return false;
};

(function(){
  var name = document.getElementById('hidden');
  var opacity = 1;
  var sign = true;
  var holdOn = setInterval(function(){
      if(opacity>0.98){
        sign = true;
        
      } else if(opacity<0.65)
        sign = false
      sign ? opacity -= 0.0266667 : opacity += 0.0266667;
      name.style.opacity = opacity;
      name.style.textShadow = '0px 0px ' + Math.pow(20,opacity) + 'px #fff';
  },100)
})();