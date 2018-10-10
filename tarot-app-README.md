This app provides indexes of the various types of cards in a deck of tarot cards.
The deck is divided into several sections: Major Arcana and Minor Arcana, and then the Minor Arcana is further divided into the four suits, Wands, Swords, Cups, and Pentacles/Discs.

# Getting Started

To run this Api
```git clone <repo url>```

```
cd <repo name>```
```
npm install
```
```
npm start```

# Purpose

This app is meant to offer a descriptive profile on each individual card in a tarot deck.  The landing page should offer several indexes of cards, and when a card is clicked on, it should take the user to that card's profile, which should include an image of that particular card.  It may also be helpful to include a search bar, so that if the user knows the name of a specific card for which they are seeking information, they can enter that in the search bar, and that will take them directly to that card's profile.

# Routes:

Get: ```/api/cards```
This will send a request to the database and will return an array of every card in the deck.
Get: ```/api/card/:card_id```
This will send a request to the database and will return the profile of a particular card, specified by ID.

Post: ```/api/cards```
This will send a request to the database to create a new card.  There are several fields that must be sent along with this request, and they are as follows:
```type: String,
name_short: String,
name: String,
value: String,
value_int: Number,
meaning_up: String,
meaning_rev: String,
desc: String```

Delete: ```/api/cards```
This will send a request to the database to delete an individual card.  The card's id must be included in the call.

# Card Profiles:


```type: String,
name_short: String,
name: String,
value: String,
value_int: Number,
meaning_up: String,
meaning_rev: String,
desc: String```
