
function randombg(){
  var random= Math.floor(Math.random() * 23) + 0;
  var bigSize = ["url('assets/img/bg/img1.jpg')",
                 "url('assets/img/bg/img2.jpg')",
                 "url('assets/img/bg/img3.jpg')",
                 "url('assets/img/bg/img4.jpg')",
                 "url('assets/img/bg/img5.jpg')",
                 "url('assets/img/bg/img6.jpg')",
                 "url('assets/img/bg/img7.jpg')",
                 "url('assets/img/bg/img8.jpg')",
                 "url('assets/img/bg/img9.jpg')",
                 "url('assets/img/bg/img10.jpg')",
                 "url('assets/img/bg/img11.jpg')",
                 "url('assets/img/bg/img12.jpg')",
                 "url('assets/img/bg/img13.jpg')",
                 "url('assets/img/bg/img14.jpg')",
                 "url('assets/img/bg/img15.jpg')",
                 "url('assets/img/bg/img16.jpg')",
                 "url('assets/img/bg/img17.jpg')",
                 "url('assets/img/bg/img18.jpg')",
                 "url('assets/img/bg/img19.png')",
                 "url('assets/img/bg/img20.png')",
                 "url('assets/img/bg/img21.png')",
                 "url('assets/img/bg/img22.png')",
                 "url('assets/img/bg/img23.jpg')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}
