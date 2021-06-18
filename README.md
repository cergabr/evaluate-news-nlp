# Evaluate a News Article with Natural Language Processing
Project for Udacity Nanodegree Program - Front End Web Developer

## Table of Contents

* [Overwiew](#overview)
* [Description](#description)
* [Example](#example)
* [Tools](#tools)
* [Attributions](#attributions)


## Overview
The aim of this project is to create an asynchronous web app that uses Web API after form submission to analyze the input text and dynamically update the UI with results. 


## Description
The app takes input data from user then validate user data onblur to display errors and again on form submission to verify required fields. If form is succesfully validated the app retrieve text sentiment analysis from https://www.meaningcloud.com/ API, then process data from to display the analysis results in a human-readable output.


## Example

Input text (lang en):

"Chess
From Wikipedia, the free encyclopedia

Chess is a recreational and competitive board game played between two players. It is sometimes called Western or international chess to distinguish it from related games such as xiangqi. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from similar, much older games of Indian and Persian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide at home, in clubs, online, by correspondence, and in tournaments.

Chess is an abstract strategy game and involves no hidden information. It is played on a square chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player (one controlling the white pieces, the other controlling the black pieces) controls sixteen pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The object of the game is to checkmate the opponent's king, whereby the king is under immediate attack (in "check") and there is no way for it to escape. There are also several ways a game can end in a draw.

Organized chess arose in the 19th century. Chess competition today is governed internationally by FIDE (International Chess Federation). The first universally recognized World Chess Champion, Wilhelm Steinitz, claimed his title in 1886; Magnus Carlsen is the current World Champion. A huge body of chess theory has developed since the game's inception. Aspects of art are found in chess composition; and chess in its turn influenced Western culture and art and has connections with other fields such as mathematics, computer science, and psychology.

One of the goals of early computer scientists was to create a chess-playing machine. In 1997, Deep Blue became the first computer to beat the reigning World Champion in a match when it defeated Garry Kasparov. Today's chess engines are significantly stronger than even the best human players, and have deeply influenced the development of chess theory."

Output:
"Subjectivity: subjective
Agreement: disagreement
Irony: nonironic
Analysis confidence: 86%"


## Tools
Tools used in this project:
- Npm
- Node.js (w/ Express)
- Webpack (w/ loaders & plugins)
- Babel
- Sass
- Service workers
- Jest (JavaScript Testing Framework)


## Attributions
- Logo is made from https://it.freelogodesign.org/
