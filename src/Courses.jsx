import Course from "./Course"


const Courses = ({courses,removeCourse}) => {
    console.log(courses)
  return (
    <div className="courseMainDiv">
        <div>
            <h1>Kurslarım</h1>
        </div>
        <div className="cardDiv">
            {
                courses.map((course)=>{
                    return(
                        <Course key={course.id} {...course} removeOneCourse={removeCourse}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Courses