import '//cdn.jsdelivr.net/npm/prebid.js@latest/dist/not-for-prod/prebid.js'
import pbjs from 'prebid.js';
import 'prebid.js/modules/adtelligentBidAdapter';

var div_1_sizes = [
  [300, 250],
  [300, 600]
];

const adUnits = [
  {
  code: 'test-div',
  mediaTypes:{
      banner:{
          sizes: div_1_sizes
      }
  },
  bids: [{
    bidder: 'adtelligent',
    params: {
      aid: 350975
    }
  }]
}
];



wondow.pbjs = window.pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        bidsBackHandler: function(result) {
         const bid = result[adUnits[0].code].bids[0];
          const doc = document
          pbjs.renderAd(doc, bid.adId,{});
        },
        timeout: 2000
    });
});
