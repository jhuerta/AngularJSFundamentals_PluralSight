'use strict';

eventsApp.filter('addingSomeString', AddingSomeString );

function AddingSomeString()
{
	return function(input,pre, post)
	{
		console.log(pre);
		console.log(post);
		var before = pre || '*';
		var after = post || '&';

		return  before+ input + after;
	}
}