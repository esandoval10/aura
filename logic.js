var happy = [],  //PLt1JKPbhDoObzEaQuyp-cml5C1ajeSyPp
    angry = [], //PLt1JKPbhDoOaM04RFYG7TODvW1zaTUEnZ
    love  = [], // PLt1JKPbhDoObeWgrfkeV3Yqe8TL93dpU7
    fine  = [], //PLt1JKPbhDoObdw0UK9I8ZOnSEFSTIk5fz
    sleepy = [], //PLt1JKPbhDoObCF3_2XLM013utylmXmPa8
    motivated = [], //PLt1JKPbhDoOZnQ_tKH1UQtid7sbUBgy3S
    depressed = [], //PLt1JKPbhDoObXSMz7lH9Itj3yFAWCz7xd
    femme  = [], //PLt1JKPbhDoOaL_FhPnCacLDQlG7F5YxJf
    party  = [], //PLt1JKPbhDoOZwp-LuVeLlkKZRywx2AwCA
    beyonce  = [], //PLt1JKPbhDoObo1zpGwalf_pVkn0pDf6P0
    intellectual  = [], //PLt1JKPbhDoObaf_uzak9s_ymjaHSuftZa
    heartbreak  = [], //PLt1JKPbhDoOZmWN6FHUm5Xx2_UCSlXLeX
    calm  = [], //PLt1JKPbhDoOaUmmNMQzgo3cbwtcsBCKxf
    stupid  = [], //
    gangsta  = [];

   // API Youtube Key: AIzaSyAiDoR2x6rBEIn78HFNDOqt9k8KZkEVpYg

   // api ajax: 
   
  //  https://www.googleapis.com/youtube/v3/search?key=AIzaSyAiDoR2x6rBEIn78HFNDOqt9k8KZkEVpYg&topicId=/m/04rlf&part=snippet&type=video&videoEmbeddable=true&q=(${""})

   var queryURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true";

   $.ajax({
    url: queryURL, 
    method: "GET"
    }).done(function(response){

      for (var i = 0; i < playlist; i++) {    

        var displayDiv = $("<div>");
        displayDiv.addClass("holder");
    
        var image = $("<img>");
      }
 
        $("#displayVideos").append(displayDiv);
    });

     // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
 
        }
      });
    }

    // After the API loads, call a function to enable the search box. 

    function handleAPILoaded() {
      $('#search-button').attr('disabled', false);
    }

    // Search for a specified string. 

    function search() {
      var q = $('#query').val();
      var request = gapi.client.youtube.search.list({
        q:q, 
      });

      request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
    
      });
    }



    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];

    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();

      
        if (q === "happy") {
          player.loadPlaylist({playlist: ['PLt1JKPbhDoObzEaQuyp-cml5C1ajeSyPp']});

        if (q === "angry") {
          player.loadPlaylist({playlist: ['PLt1JKPbhDoOaM04RFYG7TODvW1zaTUEnZ']});
        
        if (q === "love") {
          player.loadPlaylist({playlist: ['PLt1JKPbhDoObeWgrfkeV3Yqe8TL93dpU7']});

        if (q === "fine") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoObdw0UK9I8ZOnSEFSTIk5fz']});
        
        if (q === "sleepy") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoObCF3_2XLM013utylmXmPa8']});
        
        if (q === "motivated") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoOZnQ_tKH1UQtid7sbUBgy3S']});
        
        if (q === "depressed") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoObXSMz7lH9Itj3yFAWCz7xd']});

        if (q === "femme") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoOaL_FhPnCacLDQlG7F5YxJf']});

        if (q === "party") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoOZwp-LuVeLlkKZRywx2AwCA']});

        if (q === "beyonce") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoObo1zpGwalf_pVkn0pDf6P0']});

        if (q === "intellectual") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoObaf_uzak9s_ymjaHSuftZa']});

        if (q === "heartbreak") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoOZmWN6FHUm5Xx2_UCSlXLeX']});

        if (q === "calm") {
            player.loadPlaylist({playlist: ['PLt1JKPbhDoOaUmmNMQzgo3cbwtcsBCKxf']});

    }

    };

