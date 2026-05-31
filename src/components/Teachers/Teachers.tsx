import Teacher from '../Teacher/Teacher'
import teacherData from './teachers.json'

console.log(teacherData)

function Teachers() {
  

  return (
    <>
    <ul>
        {teacherData.map((teacherData) => (
            <li>
                <Teacher teacher={teacherData} />
            </li>
        ))}
    </ul>
    </>
  );
}

export default Teachers
