try:
    import json
except ImportError:
    import simplejson as json

import pandas as pd
import matplotlib.pyplot as plt

tweets_filename = 'twitter_stream_200tweets.txt'
tweets_file = open(tweets_filename, "r")
tweets_data = []

for line in tweets_file:
    try:
        tweet = json.loads(line)
        tweets_data.append(tweet)
    except:
        continue

print(len(tweets_data))
tweets = pd.DataFrame()

wordmap = {}

haha = []
for i in range(0, len(tweets_data)):
    try:
        temp = (tweets_data[i]['text']).split(' ')
        for j in range(0, len(temp)):
            haha.append(temp[j])
    except:
        continue

# ((tweets_data[i])['text'])
for i in range(0, len(haha)):
    try:
        wordmap[haha[i]] = wordmap[haha[i]] + 1
    except:
        wordmap[haha[i]] = 1
maxarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

basic = ['of', 'with', 'the', 'at', 'RT', 'a', 'to', 'in', 'that', 'is', 'and', ' ', 'for', 'on', 'I', 'you', 'are', 'have', 'will', 'about', 'from', 'this', 'that', 'This', 'they', 'your', 'when', 'what', 'their']
for i in wordmap:
    if(wordmap[i] > maxarray[0] and i not in basic and len(i)>3):
        maxarray[0] = wordmap[i]
        maxarray = sorted(maxarray)

print(maxarray)
for i in wordmap:
    if(wordmap[i] in maxarray and i not in basic and len(i)>3):
        print(i)

#fname = 'letstry.pdf'
##tweets['text'] = map(lambda tweet: tweet['text'], tweets_data)
#tweets['country'] = map(lambda tweet: tweet['location'] if tweet['location'] != None else None, tweets_data)
#
#tweets_by_country = tweets['country'].value_counts()
#
#fig, ax = plt.subplots()
#ax.tick_params(axis='x', labelsize=15)
#ax.tick_params(axis='y', labelsize=15)
#ax.set_xlabel('Countries', fontsize=15)
#ax.set_ylabel('Number of tweets' , fontsize=15)
#ax.set_title('Top 5 countries', fontsize=5, fontweight='bold')
#tweets_by_country[:5].plot(ax=ax, kind='bar', color='red')
#
#plt.savefig(fname)


