function TrackCtrl($scope) {
	$scope.track = { 'name' : 'beer', 'count' : 5, 'counts' : [
		  	{ 'date' : new Date('2012-03-5T23:51:32.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-4T07:12:11.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-3T22:00:44.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-2T20:39:07.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-1T08:05:22.031Z'), 'inc' : 1 }
	] };
	
	$scope.count = function(inc) {
		var track = $scope.track;
		track.count += inc;
        
        track.counts[0].date = new Date();
		track.counts.push({'date' : new Date(), 'inc' : inc});
	}
    
    $scope.flipCharacters = function(count) {
        var chars = [];
        
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