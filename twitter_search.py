try:
    import json
except ImportError:
    import simplejson as json

# Import the tweepy library
import tweepy

from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

# Variables that contains the user credentials to access Twitter API
ACCESS_TOKEN = 'mykey'
ACCESS_SECRET = 'mykeyE'
CONSUMER_KEY = 'mykey'
CONSUMER_SECRET = 'mykey'

# Setup tweepy to authenticate with Twitter credentials:

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)

api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True, compression=True)

#tweets = api.search(q="Diego Costa", lang = "en")
tweets = tweepy.Cursor(api.search, q='Diego Costa', count = 200)

#for t in tweets.items(200):
#    print(t)

#user = api.get_user('iamribhavjain')
#print (user.screen_name)
#print (user.followers_count)
#for friend in user.friends():
#    print (friend.screen_name)

a = []
#for t in tweets:
#    print(t.text)


#print("--------------------------------------------------")
#public_tweets = api.home_timeline()
#for tweet in public_tweets:
#   print (tweet.text)

#
#for status in tweets.items():
#    print (status._json)["statuses"]

for status in tweepy.Cursor(api.home_timeline).items(20):
    print(status._json)
#    print(status)

