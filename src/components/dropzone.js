import './dropzone.css';

import React, { useCallback } from 'react'
import ReactDOM from 'react-dom';

import axios from "axios";

class Dropzone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFiles: null
        }


    }
    
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form method="post" action="#" id="#">
                            <div className="form-group files">
                                <label>Upload Your File </label>
                                <input type="file" className="form-control" multiple onChange={(event) => this.onChangeHandler(event)} />
                            </div>

                            <button type="button" className="btn btn-success btn-block" onClick={(event) => this.onClickHandler(event)}>Upload</button>
                        </form>
                    </div>
                </div>
                <div id="MusicDescriptionField">
                </div>

            </div>
        );
    }

    onChangeHandler(event) {
        // the file has to be the audio file but let's just stick with mp4 for now.

        this.setState({
            selectedFiles: event.target.files,
            loaded: 0
        })

        // Do the function
        this.DisplayMusicNameList(event.target.files)

        
        
    }

    // Display the list of all the music selected for upload
    // this is done by changing the div id 'MusicDescriptionField' using ReactDOM
    DisplayMusicNameList(EventTargetFiles) {
        // Promise (chain 1), put into array
        var someFunction = function () {
            return new Promise(function (resolve, reject) {

                // initiliase the empty array
                var MusicList = [];

                // add into array for every entry in the JSON dictionary
                for (var NumberOfFiles = 0; NumberOfFiles < EventTargetFiles.length; NumberOfFiles++) {
                    MusicList.push(EventTargetFiles[NumberOfFiles].name);
                }

                // if true, always do the promise
                // another way to do this is promoise without the reject
                // function (resolve, reject)
                // into
                // function (resolve)
                if (true) {
                    resolve({ MusicList });
                } else {
                    reject(Error("It broke"));
                }
            });
        }

        // Promise (chain 2), change the music name
        someFunction().then(function (PassedJSONArray) {
            //console.log(PassedJSONArray.MusicList)

            // The HTML we want to add
            let element = PassedJSONArray.MusicList.map(function (i) {
                return (
                    <div classNane="row">
                        <div classNane="col-md-12" key={"object" + i}>
                            {i}
                        </div>
                    </div>
                );
            })

            // The ReactDOM replace command
            ReactDOM.render(element, document.getElementById('MusicDescriptionField'));

        }, function (error) {
            console.log('promise error');
        });
    };


    onClickHandler(event) {
        var file_num = 0;
        for(var x=0; x<this.state.selectedFiles.length; x++) {
            const data = new FormData()
            data.append('file', this.state.selectedFiles[x]);
            axios.post('http://localhost:3000/api/assets/upload', data, {})
            .then(res => {
                console.log(res.statusText);
                if (res.statusText == 'OK') {
                    console.log('file ' + (file_num + 1) + 'uploaded')
                }
            })
        }

        
    }


} 

export default Dropzone;