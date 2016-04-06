eventsApp.factory('sampleCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('cacheName', {capacity: 3});
  }]);