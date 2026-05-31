import './Teacher.css'

interface Teacher {
    name: string;
    surname: string;
    avatar_url?: string;
    lessons_done?: number;
    rating?: number;
    price_per_hour?: number;
    languages: string[];
    lesson_info?: string;
    conditions?: string[];
    levels?: string[];
}
interface TeacherProps {
    teacher: Teacher;
}

function Teacher({ teacher }: TeacherProps) {
    const { name, surname, avatar_url, lessons_done, rating, price_per_hour, languages, lesson_info, conditions, levels } = teacher;
    return (
        <>
            <section className="teacher_card">
                <div className="teacher_logo">
                    <img src={avatar_url} alt={name} className="teacher_avata" />
                </div>
                <div className="teacher_info">
                    <div className="teacher_details">
                        <div>
                            <p>Languages</p>
                            <h2>{name} {surname}</h2>
                        </div>
                        <ul className="teacher_stats">
                            <li>Lessoans online</li>
                            <li>Lessoans done:<span>{lessons_done}</span></li>
                            <li>Rating:<span>{rating}</span></li>
                            <li>Price / 1 hour: <span>${price_per_hour}</span></li>
                        </ul>
                    </div>
                    
                    <ul>
                        <li><span>Speaks:</span> {languages.join(', ')}</li>
                        <li><span>Lesson info:</span>{lesson_info}</li>
                        <li><span>Conditions:</span> {conditions?.map((condition, index) => (
                            <span key={index}>{condition}</span>
                        ))}</li>
                    </ul>
                    <a>Read more</a>
                    <ul>
                        {levels?.map((level, index) => (
                            <li key={index}>{level}</li>
                        ))}
                    </ul>
                </div>
                
            </section>
        </>
    )               

}         

export default Teacher