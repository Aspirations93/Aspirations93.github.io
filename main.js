$.ajax({
    type: "GET",
    url: "https://developers.zomato.com/api/v2.1",
    data: {
      api_key: "5b8db0ae65a8f3bb4e2c4f6294364c23"
    },
    success: function(data) {
      console.log(data);
      //do something when request is successfull
    },
    dataType: "json"
  });

  fetch('https://developers.zomato.com/api/v2.1')
   .then(function (response) {
       return response.json();
   })
   .then(function (myJson) {
       // this is where you use the data coming in
       console.log(JSON.stringify(myJson));
   });

