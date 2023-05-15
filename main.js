var Name = document.getElementById("name")
var email = document.getElementById("em")
var pass = document.getElementById("pass")
var send = document.getElementById("send")
var signIn = document.getElementById("in")
var p = document.getElementById("p")


var arr = []


if (localStorage.getItem("users") !== null) {
    var newobj = JSON.parse(localStorage.getItem("users"))
    send.addEventListener("click", function (e) {
        for (var i = 0; i < newobj.length; i++){
            if (email.value === newobj[i].Email) {
                p.style.display = "block"
                p.innerHTML = "email is here already"
                e.preventDefault()

                localStorage.removeItem(newobj.length)
            }
    }
    })
}

send.addEventListener("click", function (e) {
    var nv = false
    var ev = false
    var pv = false

    if (Name.value !== ""&& email.value !== "" && pass.value !== "") {
        nv = true
        ev = true
        pv = true

        var obj = {
            Name: Name.value,
            Email: email.value,
            Pass: pass.value
        }
    arr.push(obj)
        localStorage.setItem("users", JSON.stringify(arr))
        console.log("done");




    } else {
        e.preventDefault()
        p.style.display = "block"
        p.innerHTML = "all inputes is required"
        console.log("off");
        
    }
})

signIn.addEventListener("click", function (e) {
    Name.style.display = "none"
    send.value = "Sign in"
e.preventDefault()


})