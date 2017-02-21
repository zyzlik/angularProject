app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.addComment = function() {
        if (!$scope.body || $scope.body === '') {
            return;
        }

        $scope.post.comments.push({body: $scope.body, upVotes: 0});
        $scope.body = '';
    }
    $scope.commentUpVote = function(comment) {
        comment.upVotes += 1;
    }
}])