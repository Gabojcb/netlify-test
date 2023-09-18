import * as React from 'react';

export /*bundle*/
function View(): JSX.Element {
	function tuckIn(arr1, arr2) {
		const resultArr = []
		const newArr = [arr1[0], ...arr2, arr1[1]];
		return newArr;
	} 

	const output = tuckIn([1, 455, 49], [39, 53, 1]); 
	return (
		<div className='page__container'>
			<h1>
				My first page using BeyondJS with <span className='beyond'>React</span>!
			</h1>
			<section>

			<p>{output}</p>
			</section>
		</div>
	);
}
