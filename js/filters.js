'use strict';

eventsApp.filter('addingSomeString', AddingSomeString);

function AddingSomeString() {
    return function(input, pre, post) {
        console.log(pre);
        console.log(post);
        var before = pre || '*';
        var after = post || '&';

        return before + input + after;
    };
}


eventsApp.filter('dificultyImage', DificultyImage);

function DificultyImage() {
    return function(input) {
        switch (input) {
        	case 0:
                return "<img src='img/zero.png'>";
            case 1:
                return "<img src='img/one.png'>";
            case 2:
                return "<img src='img/two.png'>";
            case 3:
                return "<img src='img/three.png'>";
            case 4:
                return "<img src='img/four.png'>";
            default:
                return "NOT FOUND";
        }
    };
}



eventsApp.filter('dificultyImageFileName', DificultyImageFileName);

function DificultyImageFileName() {
    return function(input) {
        switch (input) {
        	case 0:
                return "img/zero.png";
            case 1:
                return "img/one.png";
            case 2:
                return "img/two.png";
            case 3:
                return "img/three.png";
            case 4:
                return "img/four.png";
            default:
                return "NOT FOUND";
        }
    };
}


