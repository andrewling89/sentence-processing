# Sentence Processing Application
This is an application for encoding and decoding sentences.

Sentences are encoded using the following logic:
* For each letter in the word:
** Determine the position of the letter relative to the end of the word. For example in *Encode*, *E* is in position *6*, *n* is in position *5*, etc.
** Shift the letter forward by x letters, where x is the position of the letter determined above. If you get to Z/z, start back at A/a.

Available at Github repo: https://github.com/andrewling89/sentence-processing