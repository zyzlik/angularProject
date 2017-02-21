app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
    $scope.header = "Suggestion Box";
    $scope.headerImg = 'http://www.jenrise.com/wp-content/uploads/2016/07/idea.png'
    $scope.posts = suggestions.posts;
    $scope.addSuggestion = function() {
        if(!$scope.title || $scope.title === '') {
            return;
        }

        $scope.posts.push({
            title: $scope.title,
            upvotes: 0,
            comments: []
        });

        $scope.title = '';
    };
    $scope.upVote = function(post) {
        post.upvotes += 1;
    }
}]);