/* ======================= FOOD TRUCK DATA =================*/

var tacosElTajinData = ["Tacos El Tajin", "11am - 2pm", "Mexican", "Cash or Cards", "Tacos and Burritos"];
var cheeseWizardsData = ["Cheese Wizards", "11am - 2pm", "Cash, Cards & Level Up", "Grilled Cheese Magic", "http://www.facebook.com/CheeseWizards", "https://twitter.com/CheeseWizards", "http://wizardsofcheese.com/"]
var thaiUUpData = ["Thai-U-Up", "11am - 2pm", "Thai", "Cash Only", "Thai Food", "", "https://twitter.com/thaiuup", "http://thaiuup.com/"]

/* ======================= END FOOD TRUCK DATA =================*/

/* ======================= DETERMINE DAY OF WEEK =================*/

var mondayTrucks = [tacosElTajinData[0], cheeseWizardsData[0], thaiUUpData[0]];

 /* ======================= DETERMINE DAY OF WEEK =================*/
  var d=new Date();
  var weekday=new Array(7);
  weekday[0]="Sunday";
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Saturday";

  var today = weekday[d.getDay()];

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(47.621104, -122.337170),
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  var tacosElTajin = function() {
      //assign coordinates
      var tet = new google.maps.LatLng(47.623406, -122.335743);

      //create marker on map
      var tetMarker = new google.maps.Marker({
          position: tet,
          map: map,
          animation: google.maps.Animation.DROP,
          title: tacosElTajinData[0]
      });

      //create info window content
      var tetcontentString = '<h1>' + tacosElTajinData[0] + '</h1>' + '<h2>' + tacosElTajinData[1] + '</h2>' + '<ul>' + '<li>' + tacosElTajinData[2] + '</li>' + '<li>' + tacosElTajinData[3] + '</li>' + '<li>' + tacosElTajinData[4] + '</li>' + '</ul>';

      //put content into info window
      var tetinfowindow = new google.maps.InfoWindow({
          content: tetcontentString
      });

      //show info window on click
      google.maps.event.addListener(tetMarker, 'click', function() {
          tetinfowindow.open(map,tetMarker);
      });
  }

  var cheeseWizards = function() {
      //assign coordinates
      var cw = new google.maps.LatLng(47.623284, -122.338468);

      //create marker on map
      var cwMarker = new google.maps.Marker({
          position: cw,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Cheese Wizards"
      });

      //create info window content
      var cwcontentString = '<p>Cheese Wizards</p>';

      //put content into info window
      var cwinfowindow = new google.maps.InfoWindow({
          content: cwcontentString
      });

      //show info window on click
      google.maps.event.addListener(cwMarker, 'click', function() {
          cwinfowindow.open(map,cwMarker);
      });
  };

  var thaiUUp = function () {
      //assign coordinates
      var tuu = new google.maps.LatLng(47.623181, -122.334933);

      //create marker on map
      var tuuMarker = new google.maps.Marker({
          position: tuu,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Thai-U-Up"
      });

      //create info window content
      var tuucontentString = '<p>Thai-U-Up</p>';

      //put content into info window
      var tuuinfowindow = new google.maps.InfoWindow({
          content: tuucontentString
      });

      //show info window on click
      google.maps.event.addListener(tuuMarker, 'click', function() {
          tuuinfowindow.open(map,tuuMarker);
      });
  }

  var contigo = function() {

      //assign coordinates
      var contigo = new google.maps.LatLng(47.622044,-122.338444);

      //create marker on map
      var contigoMarker = new google.maps.Marker({
          position: contigo,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Contigo"
      });

      //create info window content
      var contigocontentString = '<p>Contigo</p>';

      //put content into info window
      var contigoinfowindow = new google.maps.InfoWindow({
          content: contigocontentString
      });

      //show info window on click
      google.maps.event.addListener(contigoMarker, 'click', function() {
          contigoinfowindow.open(map,contigoMarker);
      });
  };

  var djungOnWheels = function() {

      //assign coordinates
      var djung = new google.maps.LatLng(47.623311, -122.335828);

      //create marker on map
      var djungMarker = new google.maps.Marker({
          position: djung,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Djung on Wheels"
      });

      //create info window content
      var djungcontentString = '<p>Djung on Wheels</p>';

      //put content into info window
      var djunginfowindow = new google.maps.InfoWindow({
          content: djungcontentString
      });

      //show info window on click
      google.maps.event.addListener(djungMarker, 'click', function() {
          djunginfowindow.open(map,djungMarker);
      });
  };

  var hotDogKing = function() {

      //assign coordinates
      var hdk = new google.maps.LatLng(47.622388, -122.338439);

      //create marker on map
      var hdkMarker = new google.maps.Marker({
          position: hdk,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Hot Dog King"
      });

      //create info window content
      var hdkcontentString = '<p>Hot Dog King</p>';

      //put content into info window
      var hdkinfowindow = new google.maps.InfoWindow({
          content: hdkcontentString
      });

      //show info window on click
      google.maps.event.addListener(hdkMarker, 'click', function() {
          hdkinfowindow.open(map,hdkMarker);
      });
  };

  var jemilsBigEasy = function() {

      //assign coordinates
      var jemils = new google.maps.LatLng(47.623228, -122.337140);

      //create marker on map
      var jemilsMarker = new google.maps.Marker({
          position: jemils,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Jemil's Big Easy"
      });

      //create info window content
      var jemilscontentString = "<p>Jemil's Big Easy</p>";

      //put content into info window
      var jemilsinfowindow = new google.maps.InfoWindow({
          content: jemilscontentString
      });

      //show info window on click
      google.maps.event.addListener(jemilsMarker, 'click', function() {
          jemilsinfowindow.open(map,jemilsMarker);
      });
  };

  var marination = function() {

      //assign coordinates
      var marination = new google.maps.LatLng(47.621132, -122.331707);

      //create marker on map
      var marinationMarker = new google.maps.Marker({
          position: marination,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Marination"
      });

      //create info window content
      var marinationcontentString = "<p>Marination</p>";

      //put content into info window
      var marinationinfowindow = new google.maps.InfoWindow({
          content: marinationcontentString
      });

      //show info window on click
      google.maps.event.addListener(marinationMarker, 'click', function() {
          marinationinfowindow.open(map,marinationMarker);
      });
  };

  var nowMakeMeASandwich = function () {

      //assign coordinates
      var nmmas = new google.maps.LatLng(47.620879, -122.337159);

      //create marker on map
      var nmmasMarker = new google.maps.Marker({
          position: nmmas,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Now Make Me A Sandwich"
      });

      //create info window content
      var nmmascontentString = "<p>Now Make Me A Sandwich</p>";

      //put content into info window
      var nmmasinfowindow = new google.maps.InfoWindow({
          content: nmmascontentString
      });

      //show info window on click
      google.maps.event.addListener(nmmasMarker, 'click', function() {
          nmmasinfowindow.open(map,nmmasMarker);
      });
  };

  var raneyBrothersBBQ = function () {

      //assign coordinates
      var raney = new google.maps.LatLng(47.622047, -122.338443);

      //create marker on map
      var raneyMarker = new google.maps.Marker({
          position: raney,
          map: map,
          animation: google.maps.Animation.DROP,
          title:"Raney Brothers BBQ"
      });

      //create info window content
      var raneycontentString = "<p>Raney Brothers BBQ</p>";

      //put content into info window
      var raneyinfowindow = new google.maps.InfoWindow({
          content: raneycontentString
      });

      //show info window on click
      google.maps.event.addListener(raneyMarker, 'click', function() {
          raneyinfowindow.open(map,raneyMarker);
      });
  };

  var bingOfFire = function() {

    //assign coordinates
    var bing = new google.maps.LatLng(47.622036, -122.335562);

    //create marker on map
    var bingMarker = new google.maps.Marker({
        position: bing,
        map: map,
        animation: google.maps.Animation.DROP,
        title:"Bing of Fire"
    });

    //create info window content
    var bingcontentString = "<p>Bing of Fire</p>";

    //put content into info window
    var binginfowindow = new google.maps.InfoWindow({
        content: bingcontentString
    });

    //show info window on click
    google.maps.event.addListener(bingMarker, 'click', function() {
        binginfowindow.open(map,bingMarker);
    });
  };

  var whereYaAt = function () {

    //assign coordinates
    var wya = new google.maps.LatLng(47.617099, -122.338921);

    //create marker on map
    var wyaMarker = new google.maps.Marker({
        position: wya,
        map: map,
        animation: google.maps.Animation.DROP,
        title:"Where Ya At"
    });

    //create info window content
    var wyacontentString = "<p>Where Ya At</p>";

    //put content into info window
    var wyainfowindow = new google.maps.InfoWindow({
        content: wyacontentString
    });

    //show info window on click
    google.maps.event.addListener(wyaMarker, 'click', function() {
        wyainfowindow.open(map,wyaMarker);
    });
  };

  var boxNatureSushi = function() {

    //assign coordinates
    var bns = new google.maps.LatLng(47.621262, -122.335862);

    //create marker on map
    var bnsMarker = new google.maps.Marker({
        position: bns,
        map: map,
        animation: google.maps.Animation.DROP,
        title:"Box Nature Sushi"
    });

    //create info window content
    var bnscontentString = "<p>Box Nature Sushi</p>";

    //put content into info window
    var bnsinfowindow = new google.maps.InfoWindow({
        content: bnscontentString
    });

    //show info window on click
    google.maps.event.addListener(bnsMarker, 'click', function() {
        bnsinfowindow.open(map,bnsMarker);
    });
  };

  var howPickleGotOutOfAJam = function() {

    //assign coordinates
    var picklejam = new google.maps.LatLng(47.622020, -122.335841);

    //create marker on map
    var picklejamMarker = new google.maps.Marker({
        position: picklejam,
        map: map,
        animation: google.maps.Animation.DROP,
        title:"How Pickle Got Out of a Jam"
    });

    //create info window content
    var picklejamcontentString = "<p>How Pickle Got Out of a Jam</p>";

    //put content into info window
    var picklejaminfowindow = new google.maps.InfoWindow({
        content: picklejamcontentString
    });

    //show info window on click
    google.maps.event.addListener(picklejamMarker, 'click', function() {
        picklejaminfowindow.open(map,picklejamMarker);
    });
  };

  var iLoveMyGff = function() {

    //assign coordinates
    var lovegff = new google.maps.LatLng(47.623209, -122.336368);

    //create marker on map
    var lovegffMarker = new google.maps.Marker({
        position: lovegff,
        map: map,
        animation: google.maps.Animation.DROP,
        title:"I Love My GFF"
    });

    //create info window content
    var lovegffcontentString = "<p>I Love My GFF</p>";

    //put content into info window
    var lovegffinfowindow = new google.maps.InfoWindow({
        content: lovegffcontentString
    });

    //show info window on click
    google.maps.event.addListener(lovegffMarker, 'click', function() {
        lovegffinfowindow.open(map,lovegffMarker);
    });
  };

  /* ======================= BUTTON FUNCTIONS =================*/

  //monday button clicked
  function monday (){
    tacosElTajin();
    cheeseWizards();
    thaiUUp();
    contigo();
    djungOnWheels();
    hotDogKing();
    jemilsBigEasy();
    marination();
    nowMakeMeASandwich();
    raneyBrothersBBQ();
    bingOfFire();
    whereYaAt();
    boxNatureSushi();
    howPickleGotOutOfAJam();
    iLoveMyGff();
  };

  var tuesday = function(){
    tacosElTajin();
    hotDogKing();
    boxNatureSushi();
    iLoveMyGff();
  };
  var wednesday = function(){
    tacosElTajin();
    djungOnWheels();
    hotDogKing();
    jemilsBigEasy();
    nowMakeMeASandwich();
    raneyBrothersBBQ();
    boxNatureSushi();
    iLoveMyGff();
  };
  var thursday = function(){
    tacosElTajin();
    cheeseWizards();
    hotDogKing();
    bingOfFire();
    boxNatureSushi();
    iLoveMyGff();
  };
  var friday = function(){
    tacosElTajin();
    thaiUUp();
    contigo();
    djungOnWheels();
    hotDogKing();
    nowMakeMeASandwich();
    boxNatureSushi();
    howPickleGotOutOfAJam();
    iLoveMyGff();
  };


  if (today === "Sunday") {
    monday();
  };

  if (today === "Monday") {
    monday();
  };

  if (today === "Tuesday") {
    tuesday();
  };

  if (today === "Wednesday") {
    wednesday();
  };

  if (today === "Thursday") {
    thursday();
  };

  if (today === "Friday") {
    friday();
  };

  if (today === "Saturday") {
    monday();
  };

  /* ======================= DAY OF WEEK =================*/

  /* ======================= DAY OF WEEK GREETING =================*/
  $('#day-greeting').text("Happy" + " " + today + "!");

  /* ======================= NUMBER OF TRUCKS TODAY =================*/

  $('#number-trucks').text("There are " + mondayTrucks.length + " trucks" + " in your area today!");

  /* ======================= LIST OF TRUCKS TODAY =================*/
  for (i=0; i<mondayTrucks.length; i++) {
    $('#trucks-list').append('<li>' + mondayTrucks[i] + '</li>');
  }

  /* ======================= SHOW CURRENT LOCATION =================*/
  var blueDot = 'img/blue-dot.png'

  var myloc = new google.maps.Marker({
      map: map,
      title: "It's you, mothafucka!",
      icon: blueDot,
      animation: google.maps.Animation.DROP
  });

  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
      var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      myloc.setPosition(me);
  }, function(error) {
      console.log("geolocation error");
  });

};




function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
