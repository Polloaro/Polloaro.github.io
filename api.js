$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0].picture.medium);

        $('<img />', {
            src: data.results[0].picture.large
        }).appendTo('#avatar');

        $('#name').append(data.results[0].name.first);
        $('#last-name').append(data.results[0].name.last);
        
        $('#age').append(data.results[0].dob.age);

        $('#location-street-number').append(data.results[0].location.street.number);
        $('#location-street-name').append(data.results[0].location.street.name);
        $('#location-city').append(data.results[0].location.city);
        $('#location-state').append(data.results[0].location.state);

        $('#phone').append(data.results[0].phone);
        
        $('#email').append(data.results[0].email);
  }
});

