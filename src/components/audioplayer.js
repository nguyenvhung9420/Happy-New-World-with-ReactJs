import './audioplayer.css'

import React, {useCallback} from 'react'

import ReactAudioPlayer from "react-audio-player";

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            audioFiles: []
        }
    }
    
    render() {
        return (
            // upload any audio file into container/happy-new-world-audio-files
            // and replace the path in src file accordingly
            <ReactAudioPlayer style={{width: "100%"}}
                // src="https://happy-new-world-audios-files.s3-ap-southeast-1.amazonaws.com/simon/G-Eazy+-+I+Wanna+Rock+(Official+Video)+ft_1572038411021.+Gunna"
                src="http://localhost:3000/api/containers/happy-new-world-audios-files/download/G-Eazy%2B-%2BI%2BWanna%2BRock%2B(Official%2BVideo)%2Bft_1572038411021.%2BGunna.mp3"
                autoPlay
                controls
                />
        );
    }

}

export default AudioPlayer;