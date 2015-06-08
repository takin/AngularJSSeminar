(function(r,io){

	'use strict';

	var socket = io.connect("http://192.168.43.211:8000");
	
	r.initialize({
		transition:'default',
		keyboard: false,
		controls: false,
		progress: false,
		dependencies: [ 
			{ src: 'components/reveal.js/plugin/tagcloud/tagcloud.js'},
			{ src: 'components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
		]
	});

	socket.on('slidechanged', function(slide){
		r.slide(slide.h, slide.v, slide.f);
	});
})(Reveal,io);