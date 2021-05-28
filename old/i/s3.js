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
if (w < 817) {
i[2].style.width=(w-18)+"px";
} else {
i[2].style.width="800px";
}
}