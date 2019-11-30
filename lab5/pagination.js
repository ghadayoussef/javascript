var current_page = 1;
var records_per_page = 6;
const PREV_BTN = document.getElementById("btn_prev");
const NEXT_BTN = document.getElementById("btn_next");
getPrevUsers = (e)=>{
    oldPageNo = pageNo;
    pageNoPrev = e.target.getAttribute('page-no');
    console.log("prev page",pageNoPrev);
    document.body.innerHTML = "";
    url = URL+pageNoPrev;
    xhr.open(METHOD,url);
    xhr.send();
    xhr.onerror = (err) =>{
        console.error(err);
    }
    xhr.onload = (res) =>{
         if(xhr.status == 200){
            const RES = JSON.parse(xhr.response);
            RES.data.forEach(element => {
            console.log("element id",element.id)
            var DIV = document.createElement('div');
            DIV.innerHTML = element.id;
            DIV.setAttribute('div-id',element.id);

            var firstName = document.createElement('p');
            firstName.innerHTML = element.first_name;
            DIV.appendChild(firstName);
            var lastName = document.createElement('p');
            lastName.innerHTML = element.last_name;
            DIV.appendChild(lastName);
            
            var x = document.createElement("img");
            x.setAttribute("src", element.avatar);
            x.setAttribute("width", 100);
            x.setAttribute("height", 100);  
            DIV.appendChild(x);
            
            var btnView = document.createElement("button");
            btnView.setAttribute('data-id', element.id);
            btnView.innerHTML = "View";

            var btnDelete = document.createElement("button");
            btnDelete.setAttribute('element-id', element.id);            
            btnDelete.innerHTML = "Delete";            
            DIV.appendChild(btnView);
            DIV.appendChild(btnDelete);

            document.body.appendChild(DIV);
            }
        );
            var BTN_NEXT = document.createElement("button");
            BTN_NEXT.innerHTML = "Next";           
            if (pageNo == 2) {
                BTN_NEXT.style.visibility = "hidden";
            } else {
                BTN_NEXT.style.visibility = "visible";
            }
            document.body.appendChild(BTN_NEXT);

            var BTN_PREV = document.createElement("button");
            BTN_PREV.innerHTML = "Previous";
            
            if (pageNo == 1) {
                BTN_PREV.style.visibility = "hidden";
            } else {
                BTN_PREV.style.visibility = "visible";
            }
            document.body.appendChild(BTN_PREV);
            pageNo++;
            BTN_PREV.setAttribute('page-no',oldPageNo);
            //console.log("prev page fl users",pageNo-1);
            
            BTN_NEXT.addEventListener('click',getUsers);
            BTN_PREV.addEventListener('click',getPrevUsers);
        }

            //changePage(1,RES.per_page,RES.data,RES.total_pages);


}
}





getUsers = (e)=>{
    oldPageNo = pageNo;
    console.log("old page no",oldPageNo);
    if(pageNo > 2) return;
    document.body.innerHTML = "";
    url = URL+pageNo;
    xhr.open(METHOD,url);
    xhr.send();
    xhr.onerror = (err) =>{
        console.error(err);
    }
    xhr.onload = (res) =>{
         if(xhr.status == 200){
            const RES = JSON.parse(xhr.response);
            RES.data.forEach(element => {
            console.log("element id",element.id)
            var DIV = document.createElement('div');
            DIV.innerHTML = element.id;
            DIV.setAttribute('div-id',element.id);

            var firstName = document.createElement('p');
            firstName.innerHTML = element.first_name;
            DIV.appendChild(firstName);
            var lastName = document.createElement('p');
            lastName.innerHTML = element.last_name;
            DIV.appendChild(lastName);
            
            var x = document.createElement("img");
            x.setAttribute("src", element.avatar);
            x.setAttribute("width", 100);
            x.setAttribute("height", 100);  
            DIV.appendChild(x);
            
            var btnView = document.createElement("button");
            btnView.setAttribute('data-id', element.id);
            btnView.innerHTML = "View";

            var btnDelete = document.createElement("button");
            btnDelete.setAttribute('element-id', element.id);            
            btnDelete.innerHTML = "Delete";            
            DIV.appendChild(btnView);
            DIV.appendChild(btnDelete);

            document.body.appendChild(DIV);
            }
        );
        


            var BTN_NEXT = document.createElement("button");
            BTN_NEXT.innerHTML = "Next";           
            if (pageNo == 2) {
                BTN_NEXT.style.visibility = "hidden";
            } else {
                BTN_NEXT.style.visibility = "visible";
            }
            document.body.appendChild(BTN_NEXT);

            var BTN_PREV = document.createElement("button");
            BTN_PREV.innerHTML = "Previous";
            BTN_PREV.setAttribute('page-no', oldPageNo);
            if (pageNo == 1) {
                BTN_PREV.style.visibility = "hidden";
            } else {
                BTN_PREV.style.visibility = "visible";
            }
            document.body.appendChild(BTN_PREV);
            pageNo++;
            
            BTN_NEXT.addEventListener('click',getUsers);
            BTN_PREV.addEventListener('click',getPrevUsers);
        }

            //changePage(1,RES.per_page,RES.data,RES.total_pages);


}
}
var pageNo = 1;
var xhr = new XMLHttpRequest();
const URL = "https://reqres.in/api/users?page=";
const METHOD = 'GET';
getUsers();
// window.onload = function() { 
      
//         }
    
