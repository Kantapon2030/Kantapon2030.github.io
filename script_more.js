const ig_logo = document.getElementById("ig_logo");
console.log(ig_logo)
ig_logo.addEventListener('click', function() {
  alert('Go to My instagram page.');
  window.open("https://www.instagram.com/kantapon_020/","_blank");
});

const fb_logo = document.getElementById("fb_logo");
console.log(fb_logo)
fb_logo.addEventListener('click', function() {
    alert("Go to My facebook page.");
    window.open('https://www.facebook.com/kantapon21342',"_blank");
})