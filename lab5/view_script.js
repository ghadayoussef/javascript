
var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.has('id')); // true
// console.log(urlParams.get('id')); // "edit"
elementId = urlParams.get('id');
let url = "https://reqres.in/api/users/?id="+elementId;
let method = 'GET';
let xhrItem = new XMLHttpRequest();
console.log(method);
xhrItem.open(method, url);
xhrItem.onerror = (err) =>{
    console.error(err);
}
xhrItem.onload = (res) =>{
    if(xhrItem.status == 200){
        let user = JSON.parse(xhrItem.response);
        console.log("id",user.data['id']);
        const DIV = document.createElement('div');
        DIV.innerHTML = user.data['id'];
        const IMG = document.createElement("img");
        IMG.setAttribute("src", user.data['avatar']);
        IMG.setAttribute("width", 100);
        IMG.setAttribute("height", 100);  
        DIV.appendChild(IMG);
        document.body.appendChild(DIV);
            
    }
}
xhrItem.send();