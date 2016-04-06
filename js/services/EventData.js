eventsApp.factory('eventData', EventData);

function EventData() {
    return {
        event: {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Padre Claret, 9 8K',
                city: 'Aranda de Duero',
                province: 'CP.: 09400, Burgos',
            },
            imageURL: 'img/angularjs-logo.png',
            sessions: [{
                name: 'Directives Masterclass',
                creatorName: 'Spud Webb',
                level: 'basic',
                upVoteCount: 0,
                dificulty: 0
            }, {
                name: 'Scopes for fun and profit',
                creatorName: 'Larry Bird',
                level: 'easy',
                upVoteCount: 0,
                dificulty: 1
            }, {
                name: 'Well behaved controllers',
                creatorName: 'Mdddddddddddd',
                level: 'high',
                upVoteCount: 0,
                dificulty: 1
            }, {
                name: 'aaaaaaaaaaaaaaa',
                creatorName: 'eeeeeeeee',
                level: 'high',
                upVoteCount: 0,
                dificulty: 0
            }, {
                name: 'bbbbbbbbbb',
                creatorName: 'cccccc',
                level: 'high',
                upVoteCount: 0,
                dificulty: 2
            }]
        }
    };
}