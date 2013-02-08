function TrackCtrl($scope) {
	$scope.active = { 'name' : 'beer', 'count' : 5, 'counts' : [
		  	{ 'date' : new Date('2012-03-5T23:51:32.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-4T07:12:11.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-3T22:00:44.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-2T20:39:07.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-1T08:05:22.031Z'), 'inc' : 1 }
	] };
	$scope.tracks = [
		{ 'name' : 'beer', 'count' : 5, 'counts' : [
		  	{ 'date' : new Date('2012-03-5T23:51:32.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-4T07:12:11.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-3T22:00:44.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-2T20:39:07.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-1T08:05:22.031Z'), 'inc' : 1 }
	] },
		{ 'name' : 'cofee', 'count' : 4, 'counts' : [
		  	{ 'date' : new Date('2012-03-5T23:51:32.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-4T07:12:11.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-3T22:00:44.031Z'), 'inc' : 1 },
		  	{ 'date' : new Date('2012-03-2T20:39:07.031Z'), 'inc' : 1 }
		 ]}];
	
	$scope.count = function(inc) {
		var active = $scope.active;
		active.count += inc;
        
        active.counts[0].date = new Date();
		active.counts.push({'date' : new Date(), 'inc' : inc});
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