import React, { useCallback } from 'react'
import ReactDOM from 'react-dom';

class Library extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            FileList: []
        }

        this.GetTheListOfFiles()
    }

    render() {
        let element = this.state.FileList.map(function (i) {
            return (
                <div classNane="row">
                    <div classNane="col-md-12" key={"object" + i}>
                        {i}
                    </div>
                </div>
            );
        })
        
        return (
            <div>
                <button type="button" className="btn btn-success btn-block" onClick={(event) => this.GetTheListOfFiles()}>Refresh</button>
                List of Files in S3
                <div id="MusicListContainer">
                    {element}
                </div>
            </div>
        );
    }

    GetTheListOfFiles() {
        fetch("http://localhost:3000/api/assets/listFilesFromS3")
            // The response
            .then(response => {
                return response.json()
            })

            // The response body
            .then(response => {
                // initiliase the empty array
                var FileList = [];

                // add into array for every entry in the JSON dictionary
                for (var NumberOfFiles = 0; NumberOfFiles < response.Contents.length; NumberOfFiles++) {
                    FileList.push(response.Contents[NumberOfFiles].Key);
                }

                // Set State
                this.state = {
                    FileList: FileList
                }

                // Since set state doesn't work
                // The HTML we want to add
                let elementWithoutSetState = FileList.map(function (i) {
                    return (
                        <div classNane="row">
                            <div classNane="col-md-12" key={"object" + i}>
                                {i}
                            </div>
                        </div>
                    );
                })

                // The ReactDOM replace command
                ReactDOM.render(elementWithoutSetState, document.getElementById('MusicListContainer'));
            }
        );
    }
}

export default Library;