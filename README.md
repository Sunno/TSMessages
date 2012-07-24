TSMessages
==========

A very simple jquery plugin for showing messages in a top bar

<pre>Usage:
	$.TSMessage(message[, options]);

Options:
	type: error|confirm if bgcolor is set, this setting will be ignore. This will show green background if confirm and red if error. Default='confirm'
	bgcolor' : background color, if not set it will use green (108A0A) for confirm and red (D61313) for error. Default='None'
	fontsize': name say it so :) Default='2em'
	fontcolor: of course, color of the font. Default='#fff'
	padding': distance between words and message border. Default='0.5em'
	delay: time in miliseconds that message bar will wait to slideup. Default=3000.
</pre>