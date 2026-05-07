import UserClass from "./UserClass";

const About = () => {
    return(
        <div className="about-wrapper container">
            <h2>This is about us page</h2>
            <UserClass name={"Rahul"} location={"Bikaner"} />
        </div>
    )
}

export default About;