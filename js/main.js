document.addEventListener("DOMContentLoaded", function(){
  var container = document.querySelector('.container');
  var intro = document.querySelector('.intro_wrap');
  
  // 오프닝 삭제후 본격적인 화면 로딩
  function actAfterOpening(){
    if(intro["parentNode"]) intro.parentNode.removeChild(intro);
    container.style.display="block";
  }

  setTimeout(function() {
    actAfterOpening();
  }, 6000);

  // 테스트할때 오프닝 안뜨게 하려고 만들어놓은 소스
  // intro.style.display="none";
  // container.style.display="block";

  function toggleSection(target) {
    var arr_sec = [
      document.querySelector('.introduce_sec'),
      document.querySelector('.skill_sec'),
      document.querySelector('.portfiolio_sec'),
    ];
    document.querySelectorAll('.top_menu li').forEach(function(v, i){
      v.classList.remove('on');
    });
    document.getElementById(target).classList.add('on');
    arr_sec.forEach(function(v,i){
      v.style.display="none";
    });
    document.querySelector("."+target+"_sec").style.display="block";
  }
  
  toggleSection("introduce");

  // 프록시 이벤트
  document.addEventListener("click", function(e){
    console.log(e.target.id, e.target.className)
    switch (e.target.id) {
      case "skip":
        return actAfterOpening();
      case "introduce":
      case "skill":
      case "portfiolio":
        return toggleSection(e.target.id);
      case "VTRIMG":
        return document.querySelectorAll('.outer_dim').forEach(v => v.style.display="none");
      default:
        break;
    }
    switch (e.target.className) {
      case "img_vtr":
      case "img_kth":
      case "img_wac":
      case "img_uiux":
      case "outer_dim":
        return document.querySelectorAll('.outer_dim').forEach(v => v.style.display="none");
      default:
        break;
    }
  });
});
function showtargetImg(obj) {
  var parent = document.querySelector(obj.parent);
  parent.querySelector(".outer_dim").style.display="block";
  parent.querySelector(".outer_dim " + obj.img1).style.display="none";
  parent.querySelector(".outer_dim " + obj.img2).style.display="inline-block";

}
function showVTR() {
  var obj = {
    parent: '.myinfo_sec',
    img1: '.img_kth',
    img2: '.img_vtr',
  }
  showtargetImg(obj);
}
function showKTH() {
  var obj = {
    parent: '.myinfo_sec',
    img1: '.img_vtr',
    img2: '.img_kth',
  }
  showtargetImg(obj);
}
function showWac() {
  var obj = {
    parent: '.skill_sec',
    img1: '.img_uiux',
    img2: '.img_wac',
  }
  showtargetImg(obj);
}
function showUiUx() {
  var obj = {
    parent: '.skill_sec',
    img1: '.img_wac',
    img2: '.img_uiux',
  }
  showtargetImg(obj);
}