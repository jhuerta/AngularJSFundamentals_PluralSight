'use strict';

eventsApp.controller('CacheSampleController', ['$scope', 'sampleCache',CacheSampleController]);

function CacheSampleController(scope, cache)
{
	scope.addToCache = AddToCache;
	scope.readFromCache = ReadFromcache;
	scope.getCacheStats = GetCacheStats;

	function AddToCache(key, value)
	{
		cache.put(key, value);
		console.log("cache size: " + cache.info().size);

	}

	function ReadFromcache(key)
	{
		//console.log("read from key: " + key);
		//console.log("retrieved value: " + cache.get(key));
		return cache.get(key);		
	}

	function GetCacheStats()
	{
		//console.log("cache info" + cache.info());
		return cache.info();
	}

}