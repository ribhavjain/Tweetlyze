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
ACCESS_TOKEN = '2840198630-s9nJrXr5r3fJ3v3bstTRRALB3qgMmZfNMsuqc7W'
ACCESS_SECRET = '50HJbIpkOvH7Y9AMiuNaH2GeVKm2TZV2Js0mOweyM3ouE'
CONSUMER_KEY = 'K7A7ACKrsuDhONvqeMTiX52T8'
CONSUMER_SECRET = 'cZSL0A4dvFoUTDg8Stqk5eEHmcqOspy6KgXBtdCCAY3tkptiTy'

# Setup tweepy to authenticate with Twitter credentials:

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)

api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True, compression=True)

#tweets = tweepy.Cursor(api.search, q='#Virat', count = 1)

tweets = api.search(q="arg1", lang = "en")

#user = api.get_user('iamribhavjain')
#print (user.screen_name)
#print (user.followers_count)
#for friend in user.friends():
#    print (friend.screen_name)

a = []
#for t in tweets:
#    print(t)

class StdOutListener(StreamListener):
    def on_data(self, data):
        print (data)
        a.append(1)
        if(len(a)>1):
            return False
        else:
            return True
    
    def on_error(self, status):
        print (status)


if __name__ == '__main__':
    l = StdOutListener()
stream = Stream(auth, l)
stream.filter(track=['Trump'])

# public_tweets = api.home_timeline()
# for tweet in public_tweets:
#   print (tweet.text)

#
#for abc in a:
#    print(abc)

#for status in tweets.items():
#    print (status._json)["statuses"]

    # for status in tweepy.Cursor(api.home_timeline).items(200):
# print(status._json)

