tylerDurden.js
==============

Do you wish you could be just like Tyler Durden from Fight Club and splice single frames of pornography into films at the movie theater? Well...you probably won't ever be able to do that. But, what you can do is use this nifty little jQuery plugin to splice in obscene images to divs on your website. Customize the options to suit your needs and let Project Mayhem unfold on your site.
<p>

How To Use
----------
After including tylerDurden.js in your site you can apply it like so:
<br>
`$('body').tylerDurden({
    imageUrl: 'a link to a must un-polite image'
});`

Feel free to swap out the "body" with any dom element of your chosing that supports background images.

Options
-------
All options have default values but you'll want to set the below on your own.<br>

minTime: lower bound of the random time window for splicing the image in milliseconds<br>
maxTime: upper bound of the random time window for splicing the image in milliseconds<br>
exposureTime: how long to show the image in milliseconds<br>
repeat: true or false value for repeating the splice<br>
imageUrl: the url of the image to be spliced<br>