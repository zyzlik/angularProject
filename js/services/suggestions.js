app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [
            {
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: [{body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsam neque impedit assumenda, explicabo quae nemo alias nihil natus quam enim quidem', upVotes: 2}],
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: [{body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsam neque impedit assumenda, explicabo quae nemo alias nihil natus quam enim quidem', upVotes: 6}],
            },
            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 7,
                comments: [{body: 'Good idea!', upVotes: 1}, {body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsam neque impedit assumenda, explicabo quae nemo alias nihil natus quam enim quidem', upVotes: 8}],
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 3,
                comments: [],
            },
        ]
    };
    
    return demoSuggestions;
    }]);
