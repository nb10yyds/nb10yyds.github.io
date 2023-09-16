/* 当用户单击图标时，在向 topnav 添加和删除“responsive”响应类之间切换 */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }