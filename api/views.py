from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import tweepy
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
import time


try:
    import json
except ImportError:
    import simplejson as json

# Create your views here.
# This will return a list of books


#
#    def on_status(self, status):
#        print(status.text)
#
#    def on_error(self, status):
#        print(status)

@api_view(["GET"])
def mysite(request):
    books = ["Pro Python", "Fluent Python", "Speaking javascript", "The Go programming language"]
    
    Secrets = ""

    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True, compression=True)
    
    a = []
    phrase = 'Modi'
    tweets = api.search(q=phrase, lang = "en")
    for i in tweets:
        a.append(i._json['text'])

    class MyStreamListener(tweepy.StreamListener):
        def on_data(self, data):
            temp = json.loads(data)
            a.append(temp["text"])
            print(temp["text"])
    
    myStreamListener = MyStreamListener()
    myStream = tweepy.Stream(auth = api.auth, listener=myStreamListener)
    myStream.filter(track=[phrase], is_async=True)
    time.sleep(5)
    
    return Response(status=status.HTTP_200_OK, data={"data": a})
