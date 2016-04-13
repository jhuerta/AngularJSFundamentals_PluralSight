'use strict';

describe('DificultyImageFileName', DificultyImageFileNameTest);

function DificultyImageFileNameTest() {
    
    beforeEach(module('eventsApp'));

    it('should return img/zero.png file name when given a 0', injectedFunctionForTestingGettingParameters);

    // Important to append FILTER TO THE VARIABLE
    function injectedFunctionForTestingGettingParameters()  {inject(['dificultyImageFileNameFilter', DificultyImageFileNameFilterTest]);}

    function DificultyImageFileNameFilterTest(filter)
    {
        var expected = "img/zero.png";
        var actual = filter(0);

        expect(actual).toEqual(expected);
    }
}