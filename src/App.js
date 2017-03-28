import React from "react";
import { debounce } from "lodash";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import "getbase/dist/css/styles.css";
// import api from "./api";
import api from "./api/fake";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
        this.searchVideo("coca cola");
    }

    searchVideo(term) {
        api.get(term).then((response)=> {
            this.setState({
                videos: response.data.list.item,
            });
        });
    }

    render() {
        const searchVideo = debounce((term) => this.searchVideo(term), 2000);

        return (
            <div>
                <SearchBar onSearch={ (term) => searchVideo(term) }/>
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}
export default App;
