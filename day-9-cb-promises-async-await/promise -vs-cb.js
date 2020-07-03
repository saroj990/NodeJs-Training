
(function() {
  getUser(function(err, user) {
   if(err)  {
     // deal with it
     console.log("err");
   } else {
     let { id } = user;
   
     getSubscriptions(id, function(err, subscriptions) {
       if(err)  {
         // deal with it
         console.log("err");
       } else {
         console.log("subscriptions", subscriptions);
          deleteSubscription(subId, function(err, status) {
           if(err) {
             console.log("err");
           } else {
             console.log("status: ", status);
           }
          }) 
       }
     });
   }
  });
})();

getUser()
.then(function(id) {
  return getSubscriptions(id);
}).then(function(subscriptions){
  deleteSubscription(subscriptions[0].id);
}).then(function(status) {
  console.log("status :", status);
}).catch(function(err) {
  console.log(err)
});




























