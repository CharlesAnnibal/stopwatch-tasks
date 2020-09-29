const notificationService = () => {
    console.log("current permission:", Notification.permission)
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        //var notification = new Notification("Hi there!");
        //console.log(notification)
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hi there!");
            }
        });
    }
}

export const askPermissionNotification = (fnSuccess, fnFailed)=>{
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                fnSuccess()
            }else{
                fnFailed()
            }
        });
        return false;
    }

    fnSuccess()
}
