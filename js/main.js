document.addEventListener("DOMContentLoaded", function(){
  var container = document.querySelector('.container');
  var intro = document.querySelector('.intro_wrap');
  
  // 오프닝 삭제후 본격적인 화면 로딩
  function actAfterOpening(){
    if(intro) intro.parentNode.removeChild(intro);
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
        return document.querySelector('.outer_dim').style.display="none";  
      default:
        break;
    }
    switch (e.target.className) {
      case "img_vtr":
      case "img_kth":
      case "outer_dim":
        return document.querySelector('.outer_dim').style.display="none";
      default:
        break;
    }
  });
});
function showVTR() {
  document.querySelector('.outer_dim').style.display="block";
  document.querySelector('.outer_dim .img_kth').style.display="none";
  document.querySelector('.outer_dim .img_vtr').style.display="inline-block";
}
function showKTH() {
  document.querySelector('.outer_dim').style.display="block";
  document.querySelector('.outer_dim .img_vtr').style.display="none";
  document.querySelector('.outer_dim .img_kth').style.display="inline-block";
}