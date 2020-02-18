var clickCnt = 0;
document.addEventListener("DOMContentLoaded", function(){
  var container = document.querySelector('.container');
  var intro = document.querySelector('.intro_wrap');
  var flowChart = document.querySelector('#flowChart');

  function fadeInAndScroll() {
    flowChart.style.opacity="1";
    var cnt = 0;
    var lastY = flowChart.offsetTop;

    function repeat() {
      cnt += 20;
      window.scrollTo(0, cnt);
      var moveId = requestAnimationFrame(repeat);
      console.log("aaa")
      if(lastY <= cnt) {
        cancelAnimationFrame(moveId);
        return;
      }
    }

    repeat();
  }

  // 오프닝 삭제후 본격적인 화면 로딩
  function actAfterOpening(){
    if(intro["parentNode"]) intro.parentNode.removeChild(intro);

    container.style.display="block";
    console.log("bbb");

    setTimeout(function() {
      fadeInAndScroll();
    }, 9000);
  }

  setTimeout(function() {
    if(clickCnt===0)  actAfterOpening() // 스킵 클릭 안한 경우
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
        clickCnt++;
        return actAfterOpening();
      case "introduce":
      case "skill":
      case "portfiolio":
        return toggleSection(e.target.id);
      case "VTRIMG":
        return document.querySelectorAll('.outer_dim').forEach(function(v){ v.style.display="none"});
      case "lang":
        return changeLanguage(lang);
      default:
        break;
    }
    switch (e.target.className) {
      case "img_vtr":
      case "img_kth":
      case "img_wac":
      case "img_uiux":
      case "outer_dim":
        return document.querySelectorAll('.outer_dim').forEach(function(v){ v.style.display="none"});
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

function changeLanguage() {
  var navText = document.querySelectorAll('nav.top_menu > ul > li');
  if(lang.type === "KR") {
    lang = langEN;
  } else {
    lang = langKR;
  }
  navText.forEach(function(v, i){ v.innerText=lang.nav[i]});
  
  // CMD
  document.querySelector('.cmd_sec .cmd_top').innerText=lang.introduce.cmdTit;
  document.querySelectorAll('#cmdTitle .ch').forEach(function(v, i){ v.innerText=lang.introduce.cmd[i]});
  // IT Life Flow Chart
  document.querySelector('#flowChart h2').innerText=lang.introduce.title;
  document.querySelectorAll('#flowChart li').forEach(function(v, i){ 
    if(v.childElementCount === 0){
      v.innerText=lang.introduce.flow[i];
    } else{
      if(v.firstElementChild.tagName === "A"){
        v.firstElementChild.innerText=lang.introduce.flow[i];
      } else if(v.firstElementChild.tagName === "DIV") {
        v.firstElementChild.innerText=lang.introduce.flow[i];
      }
    }  
  });
  // Skill
  // Web
  document.querySelectorAll('.skill_sec .web dl').forEach(function(v, i){ 
    v.querySelector('dt').innerText=lang.skillWeb[i].tit;
    v.querySelectorAll('dd').forEach(function(_v, _i){ 
      _v.innerHTML=lang.skillWeb[i].line[_i];
    });
  });
  // ETC
  document.querySelectorAll('.skill_sec .etc dl').forEach(function(v, i){ 
    v.querySelector('dt').innerText=lang.skillETC[i].tit;
    v.querySelectorAll('dd').forEach(function(_v, _i){ 
      _v.innerHTML=lang.skillETC[i].line[_i];
    });
  });
  // Portfiolio
  document.querySelectorAll('.portfiolio_sec .flat_box li').forEach(function(v, i){ 
    v.querySelector('.hover_sec h1').innerText=lang.portfiolio[i].tit;
    v.querySelector('.hover_sec p').innerText=lang.portfiolio[i].txt;
  });
}