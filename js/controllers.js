function TrackCtrl($scope) {
	$scope.active = { 'name' : 'beer', 'count' : 5, 'counts' : [
		  	{ 'date' : '2012-03-5T23:51:32.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-4T07:12:11.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-3T22:00:44.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-2T20:39:07.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-1T08:05:22.031Z', 'inc' : 1 }
	] };
	$scope.tracks = [
		{ 'name' : 'beer', 'count' : 5, 'counts' : [
		  	{ 'date' : '2012-03-5T23:51:32.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-4T07:12:11.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-3T22:00:44.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-2T20:39:07.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-1T08:05:22.031Z', 'inc' : 1 }
	] },
		{ 'name' : 'cofee', 'count' : 4, 'counts' : [
		  	{ 'date' : '2012-03-5T23:51:32.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-4T07:12:11.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-3T22:00:44.031Z', 'inc' : 1 },
		  	{ 'date' : '2012-03-2T20:39:07.031Z', 'inc' : 1 }
		 ]}];
	
	$scope.count = function(inc) {
		var active = $scope.active;
		active.count += inc;
		active.counts.push({'data' : new Date(), 'inc' : inc});
	}
}