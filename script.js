function vam(n)
{
    document.getElementById("submit").addEventListener("click",function()
    {
        document.getElementById("main").style.visibility="hidden";
        document.getElementById("order").classList.add("visible")
        document.getElementById("order").classList.add("newoutput");
        document.getElementById("eshwar").innerHTML=n;
    });    
}