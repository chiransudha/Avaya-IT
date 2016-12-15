'use strict';

//const WIT_TOKEN = process.env.WIT_TOKEN 
const WIT_TOKEN = '2K55AESJLR4RLXRBMZKDAHRPLIHWK6FC'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAPSW2GqS8MBAONGbkk8wjrmKdXx5SLWm0UrkaQDQLwXqmg1DHGgdpR9BPU6gpV8dZBqFOqkGsV1MR2vkp6p9biDpGEn9ZBy1cFlR6wlLM1HYxTErTmVI2O5pfWXlJeissDSpUwW4tOHlUsmwGCwfBhzfZBBZCwX0QQiv2zLXgZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'Avaya_IT'

module.exports = {
  WIT_TOKEN: '2K55AESJLR4RLXRBMZKDAHRPLIHWK6FC',
  FB_PAGE_TOKEN: 'EAAPSW2GqS8MBAONGbkk8wjrmKdXx5SLWm0UrkaQDQLwXqmg1DHGgdpR9BPU6gpV8dZBqFOqkGsV1MR2vkp6p9biDpGEn9ZBy1cFlR6wlLM1HYxTErTmVI2O5pfWXlJeissDSpUwW4tOHlUsmwGCwfBhzfZBBZCwX0QQiv2zLXgZDZD',
  FB_VERIFY_TOKEN: 'Avaya_IT',
}