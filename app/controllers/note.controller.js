
// // Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {
// };
// Find a single note with a noteId

exports.getTweet=(req,res)=>{
    var Twit = require('twit')
    var twitterStream = [];
    var client = new Twit({
      consumer_key: '5rJqrIdkg7DZEypqC1htVH718',
      consumer_secret: 'AXqOvaURBCkrmVe2Xtc48eXOlCaJUXCgMrVTaLvJEAIYuNhHzY',
      access_token: '797128020612022272-Xb0tZXyy9vgbUUfzOEYWqVUfXvOxej0',
      access_token_secret: 'iEyWcEAgxM6JBwT8Ghh6PIWrigd1eUOgj6MO0MFpLGZ2o'
    });
    client.get('search/tweets', { q: '#'+req.params.noteId+' since:'+ req.params.Dates, count: 10 }, function(err, reply) {
        //console.log(reply.statuses[0].quoted_status);
        for (var i = 0; i<reply.statuses.length; i++) {
            var content = {
                keyword : req.params.noteId,
                user : reply.statuses[i].user.name,
                tweet : reply.statuses[i].text
            }
            twitterStream.push(content);
        };
        res.json( {"TweetData": twitterStream});
    })
    // client.get('statuses/filter', { track: '#'+ req.params.noteId, language: 'en' }, function(err, reply) {
    //     res.json( {"TweetData": reply});
    // })
    
}

// exports.getTweet = (req, res) => {
// var express = require('express');
// //Twitter
// var Twitter = require('twitter');
//     console.log('method called', req.params.noteId);
//     var twitterStream = [];
//     var client = new Twitter({
//       consumer_key: '5rJqrIdkg7DZEypqC1htVH718',
//       consumer_secret: 'AXqOvaURBCkrmVe2Xtc48eXOlCaJUXCgMrVTaLvJEAIYuNhHzY',
//       access_token_key: '797128020612022272-Xb0tZXyy9vgbUUfzOEYWqVUfXvOxej0',
//       access_token_secret: 'iEyWcEAgxM6JBwT8Ghh6PIWrigd1eUOgj6MO0MFpLGZ2o'
//     });
//     var keyword = req.params.noteId;
//     var stream = client.stream('statuses/filter', {track: keyword});
//      console.log('method called', stream);
//     stream.on('data', function(event) {
        

//         var tweet = event.text;
//         var user = event.user.name;
//         var content = {
//             keyword : keyword,
//             user : user,
//             tweet : tweet
//         }
//         console.log("Keyword is ::>> " + keyword);
//         console.log("Tweeted by ::>>" + event.user.name);
//         console.log("Tweet is ::>>" + event.text );
//         console.log('Details added successfully');
//         twitterStream.push(content);
//         if(twitterStream.length == 10){
//             stream.destroy();
//         }
//     });

//     stream.on('error', function(error) {
//         console.log('stream error');
//         throw error;
//     }); 
//     res.json( {"TweetData": twitterStream});
// };