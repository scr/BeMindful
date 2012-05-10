(function() {
     var notification;

     function myTimer() {
	 if (notification)
	     notification.cancel();
	     
	 notification = webkitNotifications.createNotification(
	     "http://www.siyli.org/wp-content/themes/siy/images/search_yourself.jpg",
	     "Please Be Mindful",
	     "Take a few moments to close your eyes and do mindful focus on something such as your breathing, the feel of your keyboard, the sounds in the room, etc.");

	 notification.onclose = setMyTimer;
	 notification.show();
	 setMyCancelTimer();
     }

     function myCancelTimer() {
	 delete notification.onclose;
	 notification.cancel();
     }

     function setMyCancelTimer() {
	 setTimeout(myCancelTimer, 5000);
     }

     function setMyTimer() {
	 var baseTime = Number(localStorage['baseTime'] || 1000);
	 var randomTime = Number(localStorage['randomTime'] || 1000);

	 setTimeout(myTimer, baseTime + randomTime * Math.random());
     }

     setMyTimer();
 })(this);