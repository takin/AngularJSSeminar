(function(r,io){

	'use strict';

	var socket = io.connect("http://localhost:8000");
	

	function getNextSlide(){
		
		return {
			h: r.getIndices().h,
			v: r.getIndices().v,
			f: r.getIndices().f || 0
		}
	};

	function listener(event){
		socket.emit('slidechanged',getNextSlide());
	};

	r.initialize({
		transition:'convex',
		touch:true,
		history:true,
		height: 800,
		controls: false,
		progress: false,
		hideAddressBar: true,
		dependencies: [
			{ src: 'components/reveal.js/plugin/tagcloud/tagcloud.js'},
			{ src: 'components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
		]
	});

	r.addEventListener('slidechanged', listener);
	r.addEventListener('fragmentshown', listener);
	r.addEventListener('fragmenthidden', listener);
})(Reveal,io);