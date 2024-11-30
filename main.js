
/*---setInterval
let count=0
let intervalId=setInterval(function(){
    console.log(count++)
    if(count==5)
    {
        clearInterval(intervalId)
    }
},1000)
-----*/

/*----setTimeout
setTimeout(function(){
    console.log("code to be executed")
    console.log("1")
    console.log("2")
},1000)
----*/

/*----realtime example1
let a=document.getElementById("count"),time=setInterval(getCounter,3000)
function getCounter()
{
    if(a.textContent>=20)
    {
        a.textContent=20
        clearInterval(time)
    }
    else
    {
        a.textContent++
    }
}
-----*/

function a(tagId,maxCount,speed)
{
    let b=0
    function counter()
    {

        document.getElementById(tagId).innerHTML=b
        b++
    }
    let countDelay=setInterval(counter,speed)
    function totalTime()
    {
        clearInterval(countDelay)
    }
    let totalPeriod=speed*(maxCount)
    setTimeout(totalTime,totalPeriod)
}

a("partners",500,10jj)