sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'apppad/test/integration/FirstJourney',
		'apppad/test/integration/pages/HeadMain'
    ],
    function(JourneyRunner, opaJourney, HeadMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('apppad') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheHeadMain: HeadMain
                }
            },
            opaJourney.run
        );
    }
);