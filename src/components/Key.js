//----- React Components ---------/
import React, { Component } from 'react';

export class ThreeKeyGroup extends Component {

	render() {

		let { notes, onTouch } = this.props;
		let whiteNotes = notes.whiteKeys.map((el) => el);
		let blackNotes = notes.blackKeys.map((el) => el);

		return (
			<React.Fragment>
					<svg viewBox='0 0 100 200' className='keySectionThree'>
						<g fill="none" fillRule="evenodd" stroke="#1E1D1C">
							<g pointerEvents="visible" onClick={() => onTouch(whiteNotes[0])}>
								<path
									d="M1.009 1v113.023c-.14 3.813 1.392 5.72 4.598 5.72h22.037c2.34-.023 3.51-1.93 3.51-5.72V85.129v-10.41c.073-2.562-1.097-3.843-3.51-3.843h-5.477V1H1.009z"
									id="Left-Key"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(whiteNotes[1])}>
								<path
									d="M60.367 119.734H37.104c-2.07.126-3.104-1.076-3.104-3.604V74.247c-.023-2.299 1.461-3.448 4.451-3.448h4.781V1h11.96v69.799h6.413c1.737.441 2.606 1.381 2.606 2.819v42.512c.019 2.403-1.065 3.604-3.25 3.604h-.594z"
									id="Middle-Key"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(blackNotes[0])}>
							<path
								d="M24.5 1v65.424c.02 1.34.62 2.015 1.8 2.028 1.18.013 5.33.013 12.453 0 1.165-.047 1.747-.723 1.747-2.028V1h-16z"
								id="Black-Key-Left"
								fill="#1E1D1C"
							/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(blackNotes[1])}>
							<path
								d="M57.5 1v65.424c.02 1.34.62 2.015 1.8 2.028 1.18.013 5.33.013 12.453 0 1.165-.047 1.747-.723 1.747-2.028V1h-16z"
								id="Black-Key-Right"
								fill="#1E1D1C"
							/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(whiteNotes[2])}>
								<path
									d="M67.009 1v113.023c-.14 3.813 1.392 5.72 4.598 5.72h22.037c2.34-.023 3.51-1.93 3.51-5.72V85.129v-10.41c.073-2.562-1.097-3.843-3.51-3.843h-5.477V1H67.009z"
									id="Right-Key"
									transform="matrix(-1 0 0 1 164.157 0)"
								/>
							</g>
						</g>
					</svg>
			</React.Fragment>
		)
	}
}

export class FourKeyGroup extends Component {

	render() {

		let { notes, onTouch } = this.props;
		let whiteNotes = notes.whiteKeys.map((el) => el);
		let blackNotes = notes.blackKeys.map((el) => el);

		return (
			<React.Fragment>
					<svg viewBox='0 0 135 200' className='keySectionFour'>
						<g id="Page-1" fill="none" fillRule="evenodd" stroke="#1E1D1C">
							<g pointerEvents="visible" onClick={() => onTouch(whiteNotes[0])}>
								<path
									d="M1.009 1v113.023c-.14 3.813 1.392 5.72 4.598 5.72h22.037c2.34-.023 3.51-1.93 3.51-5.72V85.129v-10.41c.073-2.562-1.097-3.843-3.51-3.843h-5.477V1H1.009z"
									id="Left-Key"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(whiteNotes[1])}>
								<path
									d="M60.367 119.734H37.104c-2.07.126-3.104-1.076-3.104-3.604V74.247c-.023-2.299 1.461-3.448 4.451-3.448h4.781V1h11.96v69.799h6.413c1.737.441 2.606 1.381 2.606 2.819v42.512c.019 2.403-1.065 3.604-3.25 3.604h-.594z"
									id="Middle-Key-Left"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(whiteNotes[2])}>
								<path
									d="M93.367 119.734H70.104c-2.07.126-3.104-1.076-3.104-3.604V74.247c-.023-2.299 1.461-3.448 4.451-3.448h4.781V1h11.96v69.799h6.413c1.737.441 2.606 1.381 2.606 2.819v42.512c.019 2.403-1.065 3.604-3.25 3.604h-.594z"
									id="Middle-Key-Right"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(blackNotes[0])}>
								<path
									d="M24.5 1v65.424c.02 1.34.62 2.015 1.8 2.028 1.18.013 5.33.013 12.453 0 1.165-.047 1.747-.723 1.747-2.028V1h-16z"
									id="Black-Key-Left"
									fill="#1E1D1C"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(blackNotes[1])}>
								<path
									d="M57.5 1v65.424c.02 1.34.62 2.015 1.8 2.028 1.18.013 5.33.013 12.453 0 1.165-.047 1.747-.723 1.747-2.028V1h-16z"
									id="Black-Key-Middle"
									fill="#1E1D1C"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(blackNotes[2])}>
								<path
									d="M91 1v65.424c.02 1.34.62 2.015 1.8 2.028 1.18.013 5.33.013 12.453 0 1.165-.047 1.747-.723 1.747-2.028V1H91z"
									id="Black-Key-Right"
									fill="#1E1D1C"
								/>
							</g>
							<g pointerEvents="visible" onClick={() => onTouch(whiteNotes[3])}>
								<path
									d="M101.009 1v113.023c-.14 3.813 1.392 5.72 4.598 5.72h22.037c2.34-.023 3.51-1.93 3.51-5.72V85.129v-10.41c.073-2.562-1.097-3.843-3.51-3.843h-5.477V1h-21.158z"
									id="Right-Key"
									transform="matrix(-1 0 0 1 232.157 0)"
								/>
							</g>
						</g>
					</svg>
			 </React.Fragment>
		)
	}
}