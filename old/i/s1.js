function l() {
var w=window.innerWidth;
var d=document.getElementsByTagName("div")[0];
var i=document.getElementsByTagName("img");
if (w < 1200) {
d.style.width=(w-18)+"px";
i[1].style.width=(w-18)+"px";
} else {
d.style.width="1182px";
i[1].style.width="1182px";
}
}