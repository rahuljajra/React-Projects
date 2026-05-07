import React from "react";


class UserClass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    async componentDidMount() {
        // Api call this method
        const data =  await fetch("https://dummyjson.com/users");
        const json = await data.json();

        console.log(json.users);
    }

    componentWillUnmount() {
        // unmount means for example somthing is going on the page if we move to other page so it will discard on going functionality
    }
    render() {
        const {name, location} = this.props
        const {count} = this.state
        return(
            <>
                <h1>Class based component</h1>
                <p>{count}</p>
                <button onClick={() => {
                    this.setState ({
                        count: this.state.count + 1
                    })
                }}>
                Increase Button
                </button>
                <p>{name}</p>
                <p>{location}</p>
            </>
        )
    }
}

export default UserClass;

// componentDidMount
// componentDidUpdate
// componentWillUnmount