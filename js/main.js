document.addEventListener("DOMContentLoaded", function(){
  // 오프닝 제거
  var cmd = document.querySelector('.container');
  var intro = document.querySelector('.intro_wrap');
  function removeIntro() {
    setTimeout(() => {
      if(intro) intro.remove();
      cmd.style.display="block"
    }, 6000);
  }

  // 코딩을 위해 인트로 가림
  // removeIntro();
  intro.style.display="none";
  cmd.style.display="block";
  
  // 프록시 이벤트
  document.addEventListener("click", function(e){
    switch (e.target.id) {
      case "introduce":
        document.querySelector('.cmd_sec').style.display="block";
        break;
      case "skill":
        document.querySelector('.cmd_sec').style.display="none";
        break;
      case "portfiolio":
        
        break;
    
      default:
        break;
    }
  });
});