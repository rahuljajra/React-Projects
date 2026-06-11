import React, {useState, useEffect} from "react";

const Maincontainer = () => {

    const [video, setVideo] = useState([]);

    useEffect(() => {
        VideoList();
    }, []);

    const VideoList = async () => {

    }
    return(
        <div className="col-span-10 px-4">
            Maincontainer
        </div>
    )
}

export default Maincontainer;

  