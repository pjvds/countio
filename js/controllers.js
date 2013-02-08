function TrackCtrl($scope) {
	$scope.track = {
        'name' : 'beer',
        'currentPeriod' : {
            'name' : 'todays',
            'count' : 5
        }};
	
	$scope.count = function(inc) {
		var track = $scope.track;
		track.currentPeriod.count += inc;
	}
    
    $scope.flipCharacters = function(track) {
        var chars = [];
        
        var count = track.currentPeriod.count;
        var countString = count.toString();
        var len = countString.length;

        for (var i = 0; i < 3-len; i++){
            chars.push('0');
        }

        for (var i = 0; i < len; i++) {
            chars.push(countString[i]);
        }
        
        return chars;
	}
}