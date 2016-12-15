'use strict';

//const WIT_TOKEN = process.env.WIT_TOKEN 
const WIT_TOKEN = 'OFXZWS2KJSJHXCHVKEQQVICRTDFH54MB'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAZAPYFF5jZAEBAOruj5MsVFxq2BujCRY50U7My2gdgTIxLbNRZCwBZAOknM25HMpAxpZAX7cJv14BZAPjzVT7bYmt21et4uZCrODScuwgHEHLxxIaBaoGmdwfCMNQ6xEZALx3xL9NXISwEM9EOuqJTW0muaUg5cOhaclCtMciH5MQZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: 'OFXZWS2KJSJHXCHVKEQQVICRTDFH54MB',
  FB_PAGE_TOKEN: 'EAAZAPYFF5jZAEBAOruj5MsVFxq2BujCRY50U7My2gdgTIxLbNRZCwBZAOknM25HMpAxpZAX7cJv14BZAPjzVT7bYmt21et4uZCrODScuwgHEHLxxIaBaoGmdwfCMNQ6xEZALx3xL9NXISwEM9EOuqJTW0muaUg5cOhaclCtMciH5MQZDZD',
  FB_VERIFY_TOKEN: 'just_do_it',
}