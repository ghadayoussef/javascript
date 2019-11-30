function viewUser(e){
    console.log("eventtttt",e.target.getAttribute('data-id'));
    let elementId = e.target.getAttribute('data-id');
    window.location.href = "view.html?id="+elementId;
    
        
        
}
function deleteUser(e){
    var elementId = e.target.getAttribute('element-id');
    var parent = e.target.parentNode;    
    var confirmation = confirm("Do you want to delete this user??");
    if(confirmation == 1){
        parent.remove();
        let url = "https://reqres.in/api/users?id="+elementId;
        //let url ="https://reqres.in/api/users?id=1"
        let method = 'DELETE';
        let xhrDelete = new XMLHttpRequest();
        xhrDelete.open(method, url);
        xhrDelete.onerror = (err) =>{
            console.error(err);
        }
        xhrDelete.onload = (res) =>{
            var users = JSON.stringify(xhrDelete.response);            
            if(xhrDelete.status == 204){
                console.log("response",xhrDelete.response)
                
                //console.log("da5aaalllll");                
                console.table("users fter delete",users);
                console.log("user only ",users);
                console.log("user data",users.data);
                
            }
            else {
                console.error("users before delete",users);
            }
        }
        xhrDelete.send();
        
        
        // xhrDelete.open(METHOD)

    }
    //if()
}
let renderUsers = ()=>{
    const URL = "https://reqres.in/api/users";
    const METHOD = 'GET';
    
    let xhr = new XMLHttpRequest();
    xhr.open(METHOD,URL);
    xhr.send();
     //console.log(xhr.send());
    xhr.onerror = (err) =>{
        console.error(err);
    }
     xhr.onload = (res) =>{
         if(xhr.status == 200){
            console.log("h",typeof(xhr.response));
            const RES = JSON.parse(xhr.response);
            console.log("t",typeof(RES));
            console.log("r",RES.data);
            console.log("tt",RES.data[0]);
            console.log("pages ",RES.total);
            RES.data.forEach(element => {

                console.log(element)
                console.log(element.id)
                const DIV = document.createElement('div');
                DIV.innerHTML = element.id;
                DIV.setAttribute('div-id',element.id)
                //DIV.innerHTML = 
                
                var x = document.createElement("img");
                x.setAttribute("src", element.avatar);
                x.setAttribute("width", 100);
                x.setAttribute("height", 100);  
                DIV.appendChild(x);
                var btnView = document.createElement("button");
                btnView.setAttribute('data-id', element.id);
                
                //btnDelete.setAttribute('div-id',)

                var btnDelete = document.createElement("button");
                btnDelete.setAttribute('element-id', element.id);
                btnView.innerHTML = "View";
                btnDelete.innerHTML = "Delete";
                DIV.appendChild(btnView);
                DIV.appendChild(btnDelete);
                document.body.appendChild(DIV);
                btnView.addEventListener('click',viewUser);
                btnDelete.addEventListener('click',deleteUser);
                



                

            });

            return RES;
         }

         
        }
        

}
renderUsers();