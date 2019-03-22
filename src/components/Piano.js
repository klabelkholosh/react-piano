//----- React Components ---------/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//----- My Components ---------/
import { LeftKey, MiddleKey, RightKey, BlackKey, ThreeKeyGroup, FourKeyGroup } from './Key';
import soundsArr from './Sounds.js';

class Piano extends Component {

	components = {
		threeKey: ThreeKeyGroup,
		fourKey: FourKeyGroup
	}

	// play the note by matching the key string (eg. C#) and the 'tone' (middle or high)
	playNote = noteObj => {
		let audio = new Audio();
		try {
			audio.src = soundsArr.find(
					(el) => 
						String(el.note).toLowerCase() === String(noteObj.note).toLowerCase() &&
						String(el.tone).toLowerCase() === String(noteObj.tone).toLowerCase()
			).soundfile;
			audio.play();

		// tried to make the error messages a little more obvious
		} catch (error) {
			if (error.message === "Cannot read property 'soundfile' of undefined") {
				console.log('The note supplied doesn\'t match a known note. Use letters between A and G, followed by the # (sharp) sign if neccessary.');
			} else if (error.message === "Cannot read property 'note' of undefined") {
				console.log('There weren\'t enough notes supplied to match this section of piano, eg. three white notes are needed for a threeKey section.');
			} else {
				console.log(error.message);
			}
		}
		
	}

	render() {

		return (
			<div className='piano'>
				{
					this.props.keyConfig.map((el) => {
						let ConfName = this.components[el.type];
						return <ConfName 
							notes={el.keys}
							onTouch={this.playNote}
						/>
					})
				}
				
			</div>
		)
	}
}

Piano.propTypes = {
	keyConfig: PropTypes.array
}

Piano.defaultProps = {
	keyConfig: [
		{
			type : 'threeKey',
			keys : {
				whiteKeys: [
					{ 
						'note' : 'C',
						'tone' : 'middle'
					},
					{ 
						'note' : 'D',
						'tone' : 'middle'
					},
					{ 
						'note' : 'E',
						'tone' : 'middle'
					}		
				],
				blackKeys: [
					{ 
						'note' : 'C#',
						'tone' : 'middle'
					},
					{ 
						'note' : 'D#',
						'tone' : 'middle'
					}
				]
			}
		},
		{
			type : 'fourKey',
			keys : {
				whiteKeys: [
					{ 
						'note' : 'F',
						'tone' : 'middle'
					},
					{ 
						'note' : 'G',
						'tone' : 'middle'
					},
					{ 
						'note' : 'A',
						'tone' : 'middle'
					},
					{ 
						'note' : 'B',
						'tone' : 'middle'
					}
				],
				blackKeys: [
					{ 
						'note' : 'F#',
						'tone' : 'middle'
					},
					{ 
						'note' : 'G#',
						'tone' : 'middle'
					},
					{ 
						'note' : 'A#',
						'tone' : 'middle'
					}
				]
			}
		},
		{
			type : 'threeKey',
			keys : {
				whiteKeys: [
					{ 
						'note' : 'C',
						'tone' : 'high'
					},
					{ 
						'note' : 'D',
						'tone' : 'high'
					},
					{ 
						'note' : 'E',
						'tone' : 'high'
					}
				],
				blackKeys: [
					{ 
						'note' : 'C#',
						'tone' : 'high'
					},
					{ 
						'note' : 'D#',
						'tone' : 'high'
					}
				]
			}
		},
		{
			type : 'fourKey',
			keys : {
				whiteKeys: [
					{ 
						'note' : 'F',
						'tone' : 'high'
					},
					{ 
						'note' : 'G',
						'tone' : 'high'
					},
					{ 
						'note' : 'A',
						'tone' : 'high'
					},
					{ 
						'note' : 'B',
						'tone' : 'high'
					}
				],
				blackKeys: [
					{ 
						'note' : 'F#',
						'tone' : 'high'
					},
					{ 
						'note' : 'G#',
						'tone' : 'high'
					},
					{ 
						'note' : 'A#',
						'tone' : 'high'
					}
				]
			}
		}
	]
}

export default Piano;