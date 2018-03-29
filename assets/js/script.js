
function randombg(){
  var random= Math.floor(Math.random() * 18) + 0;
  var bigSize = ["url('assets/img/img1.jpg')",
                 "url('assets/img/img2.jpg')",
                 "url('assets/img/img3.jpg')",
                 "url('assets/img/img4.jpg')",
                 "url('assets/img/img5.jpg')",
                 "url('assets/img/img6.jpg')",
                 "url('assets/img/img7.jpg')",
                 "url('assets/img/img8.jpg')",
                 "url('assets/img/img9.jpg')",
                 "url('assets/img/img10.jpg')",
                 "url('assets/img/img11.jpg')",
                 "url('assets/img/img12.jpg')",
                 "url('assets/img/img13.jpg')",
                 "url('assets/img/img14.jpg')",
                 "url('assets/img/img15.jpg')",
                 "url('assets/img/img16.jpg')",
                 "url('assets/img/img17.jpg')",
                 "url('assets/img/img18.jpg')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}
