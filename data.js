  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8bOyeVHh1frtus7dH_JPYsfHFfPulIu8",
    authDomain: "aura-77f8f.firebaseapp.com",
    databaseURL: "https://aura-77f8f.firebaseio.com",
    projectId: "aura-77f8f",
    storageBucket: "aura-77f8f.appspot.com",
    messagingSenderId: "651818152870"
  };

  firebase.initializeApp(config);
  var database = firebase.database();
  
//   Initial Values
  var globalCounter = 11,
    topPlaylist = "gangsta",
    selectedPlaylist = "gangsta",
    currentPlaylist = null;

//  Song Playlists
    playlists = [
        happy = {
            songsOne : "ayay",
            timesPlayed : 0,
        },
        sad = {
            songsOne : "ayay",
            timesPlayed : 1,
        },
        angry = {
            songsOne : "ayay",
            timesPlayed : 2,
        },
        love = {
            songsOne : "ayay",
            timesPlayed : 3,
        },
        fine = {
            songsOne : "ayay",
            timesPlayed : 4,
        },
        sleepy = {
            songsOne : "ayay",
            timesPlayed : 5,
        },
        motivated = {
            songsOne : "ayay",
            timesPlayed : 6,
        },
        depressed = {
            songsOne : "ayay",
            timesPlayed : 7,
        },
        femme = {
            songsOne : "ayay",
            timesPlayed : 8,
        },
        party = {
            songsOne : "ayay",
            timesPlayed : 9,
        },
        beyonce = {
            songsOne : "ayay",
            timesPlayed : 10,
        },
        intellectual = {
            songsOne : "ayay",
            timesPlayed : 11,
        },
        calm = {
            songsOne : "ayay",
            timesPlayed : 12,
        },
        artistic = {
            songsOne : "ayay",
            timesPlayed : 13,
        },
        heartbreak = {
            songsOne : "ayay",
            timesPlayed : 14,       
        },
        gangsta = {
            name: "gangsta",
            songsOne : "ayay",
            timesPlayed : 15,
        }
    ];

    findName = function(selectedPlaylist){
        for(var i = 0; i < playlists.length; i++){
            if (playlists[i].name === selectedPlaylist)
            return playlists[i];
        }
        return null;
    };

    database.ref().on("value", function(snapshot) {

        if (snapshot.child("globalCounter").exists() && snapshot.child("topPlaylist").exists()) {

            globalCounter = snapshot.val().globalCounter;
            topPlaylist = snapshot.val().topPlaylist;

            console.log(snapshot.val().globalCounter);
            console.log(snapshot.val().topPlaylist);
        }
        else{
            console.log(globalCounter);
            console.log(topPlaylist);
        }
    });

//Will read buttons data-attribute of name and use it to know which playlist has been selected to play 

$(document).on('click', '#gangsta', function() {

    selectedPlaylist = $(this).data('name');
    console.log(selectedPlaylist);

    currentPlaylist = findName(selectedPlaylist);
    console.log(currentPlaylist);

    currentPlaylist.timesPlayed ++;

    var playlistCount = currentPlaylist.timesPlayed; 

    if (playlistCount > globalCounter){

        alert("new favorite mood");

        database.ref().set({
            globalCounter: playlistCount,
            topPlaylist : currentPlaylist
        });
    }

    event.preventDefault();
});
