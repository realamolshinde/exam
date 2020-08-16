function subf()
{
    let c=document.querySelector("#inid").value;
    let c1=document.querySelector("#inid1").value;
    let s=document.querySelector("#box").cloneNode(true);
    s.children[0].innerHTML=c;
    s.children[1].innerHTML=c1;

    let b=document.querySelector("#box1");
    let b1=document.querySelector("#box2");
    b.insertBefore(s,b.firstChild);
    b1.insertBefore(s,b1.firstChild);
    document.querySelector("#inid").value="";
    document.querySelector("#inid1").value="";


}