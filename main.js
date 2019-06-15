$.ajax({
    type: "POST",
    url: "https://sandbox-api.brewerydb.com/v2/",
    data: {
      api_key: "7dee30f5ce5e4bcd151612aef261a3d5"
    },
    success: function(data) {
      console.log(data);
      //do something when request is successfull
    },
    dataType: "json"
  });