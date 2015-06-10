(function(r,io){

	'use strict';

	var socket = io.connect("http://localhost:8000");
	
	r.initialize({
		transition:'default',
		keyboard: false,
		controls: false,
		progress: false,
		height: 800,
		dependencies: [ 
			{ src: 'components/reveal.js/plugin/tagcloud/tagcloud.js'},
			{ src: 'components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
		]
	});

	socket.on('slidechanged', function(slide){
		r.slide(slide.h, slide.v, slide.f);
	});
})(Reveal,io);