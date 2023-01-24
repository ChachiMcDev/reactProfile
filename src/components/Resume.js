

const Resume = () => {

    return (
        <div className="grid grid-cols-4">

            <div id='header' className="col-span-4 text-center"><h1 className="text-6xl">CHARLES NELSON</h1></div>
            <div className="col-span-4 text-center" id='sub-header'><h3 className="text-xl">SOFTWARE DEVELOPER</h3></div>


            <div className="col-span-1 border-solid border-2" id='contact'><h3 className="text-xl">CONTACT</h3></div>
            <div className="col-span-3 border-solid border-2" id='profile'><h3 className="text-xl">PROFILE</h3></div>
            <div className="col-span-1 row-span-1 border-solid border-2" id='skills'><h3 className="text-xl">SKILLS</h3></div>

            <div className="col-span-3 row-span-2 border-solid border-2" id='experience'><h3 className="text-xl">EXPERIENCE</h3></div>
            <div className="col-span-1 row-span-1 border-solid border-2" id='education'><h3 className="text-xl">EDUCATION</h3></div>

        </div>
    )
}

export default Resume