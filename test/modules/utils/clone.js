define([ 'utils/clone' ], function ( clone ) {

	'use strict';

	return function () {

		module( 'clone');

		test( 'clone returns on functions and new Primitive() objects', function ( t ) {
			var val;
			t.equal( val = function () {}, clone ( val ) );
			t.equal( val = new Boolean(true), clone( val ) );
			t.equal( val = new Number(4), clone( val ) );
			t.equal( val = new String('wat?'), clone( val ) );
		});

		test( 'clone clones Date objects properly', function ( t ) {
			var val = new Date(),
				cVal = clone ( val );

			cVal.setFullYear( 2010 );

			t.equal( val.getFullYear() , new Date().getFullYear() );
		});

		test( 'clone clones RegExp objects properly', function ( t ) {
			var val = /^.$/i,
				cVal = clone ( val );

			t.equal( val.toString() , cVal.toString() );

			// doesn't work in Phantom https://github.com/ariya/phantomjs/issues/11494
			if ( !/phantomjs/i.test( window.navigator.userAgent ) ) {
				t.notEqual( val, cVal );
			}
		});
	};

});
