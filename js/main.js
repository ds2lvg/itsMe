document.addEventListener("DOMContentLoaded", function(){
  // 오프닝 제거
  var container = document.querySelector('.container');
  var intro = document.querySelector('.intro_wrap');
  
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
  
  function removeIntro() {
    setTimeout(function() {
      if(intro) intro.parentNode.removeChild(intro);
      container.style.display="block"
    }, 6000);
  }

  // 코딩을 위해 인트로 가림
  removeIntro();
  // intro.style.display="none";
  // container.style.display="block";
  
  toggleSection("introduce");

  // 프록시 이벤트
  document.addEventListener("click", function(e){
    console.log(e.target.id)
    switch (e.target.id) {
      case "introduce":
      case "skill":
      case "portfiolio":
        toggleSection(e.target.id);
        break;
      case "showVTR":
        document.querySelector('.outer_dim').style.display="block";
        break;
      case "VTRIMG":
        document.querySelector('.outer_dim').style.display="none";
        break;
      default:
        break;
    }
  });
});