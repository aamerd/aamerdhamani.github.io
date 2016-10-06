function l() {
var w=window.innerWidth;
var s=(w-18)/3;
var d=document.getElementsByTagName("div")[0];
var i=document.getElementsByTagName("img");
var t=document.getElementsByClassName("t");
var x;
if (w < 1200) {
d.style.width=(w-18)+"px";
i[1].style.width=(w-18)+"px";
for (x = 0; x < t.length; x++) {
t[x].style.width = (s-10)+"px";
}
} else {
d.style.width="1182px";
i[1].style.width="1182px";
for (x = 0; x < t.length; x++) {
t[x].style.width = "384px";
}
}
}