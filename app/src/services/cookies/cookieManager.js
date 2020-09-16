export function getCookieByName(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    console.log("--"+ca+"--")
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
            console.log(c)
        }
        if (c.indexOf(name) == 0) {
            /*GET ONLY THE DATA JSON, WITHOUT THE INDEX*/
            
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function getAllTasksFromCookie(){
    let taskArray = []
    let decodedCookie = decodeURIComponent(document.cookie);
    let completeCookies = decodedCookie.split(';');
    for (let i = 0; i < completeCookies.length; i++) {
        let cookie = completeCookies[i]
        let cookieindex = cookie.substring(0,cookie.indexOf("="))
        
        let cookieData = (cookieindex.indexOf("task-") !== -1 ? cookie.substring(cookie.indexOf("=")+1, cookie.length) : "")
        console.log(cookieData)
        if(cookieData.length > 0)
        taskArray.push(JSON.parse(cookieData)) 
    }
    
    return taskArray;
}

export function createCookie(name, data){
    console.log("entrou",name)
    document.cookie = `${name}=${data};`;
}


export function deleteCookieByName(name) {
    console.log("tentando deletar", name)
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}