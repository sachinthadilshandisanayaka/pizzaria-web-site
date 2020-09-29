// SE-2017-007
window.onscroll = function(){
    scrollFunction()
    };
    function scrollFunction()
    {
    if( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 )
    {
          document.getElementById("header-menu").style.paddingTop = "0px";
          document.getElementById("header-menu").style.backgroundColor = "#34495E";
          document.getElementById("header-menu").style.boxShadow = "2px 2px 5px black";
        //   document.getElementById("scrolltopButton").style.display = "block";
    }
    else{
          document.getElementById("header-menu").style.paddingTop = "20px";
          document.getElementById("header-menu").style.backgroundColor = "";
          document.getElementById("header-menu").style.boxShadow = "0 0 0 black";
        //   document.getElementById("scrolltopButton").style.display = "none";
        }

    }

function getValues() {

}
function PickorDeliver(value) {
  var name = "ee";
  if(value == 1) {
    document.getElementById("delivery-address").style.display="none";
    document.getElementById("same-billing").style.display = "none";
  } 
  if ( value == 2 ) {
    document.getElementById("delivery-address").style.display="block";
    document.getElementById("same-billing").style.display = "block";
    //  alert(`hellow ${name}\nbin`);
    var inputTag = document.getElementsByTagName("INPUT");
  // alert(inputTag.length);
  }
}
function checkMothod(value) {
  if ( value == 1 ) {
    document.getElementById("paymet-info").style.display="none";
  }
  if ( value == 2 ) {
    document.getElementById("paymet-info").style.display="block";
  }
}
function addressMatch(value) {
  if ( value == 1 ) {
      document.getElementById("right-address").value = document.getElementById("left-address").value;
      document.getElementById("right-suburb").value = document.getElementById("left-suburb").value;
      document.getElementById("right-postcode").value = document.getElementById("left-postcode").value;
  }
  if ( value == 2 ) {
    document.getElementById("right-address").value = "";
    document.getElementById("right-suburb").value = "";
    document.getElementById("right-postcode").value = "";
  }
}

// function submitFunction(){
  
//   var inputTag = document.getElementsByTagName("INPUT");
//   var i;
  
//   // alert(inputTag[0].value);
//   for ( i = 0; i < 3; i++ ) {
//       if ( !inputTag[i].checkValidity() ) {
//         alert("char");
//       }
//       else {
//         alert("success!!");
//       }
//   }
// }
