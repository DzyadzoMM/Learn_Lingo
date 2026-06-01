import './Teacher.css'
import heartSvg from '../../assets/heart.svg';

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
    levels: string[];
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
                    <img src={avatar_url} alt={name} className="teacher_avatar" />
                </div>
                <div className="teacher_info">
                    <div className="teacher_details">
                        <div>
                            <p className='language_text'>Languages</p>
                            <h2 className="teacher_name">{name} {surname}</h2>
                        </div>
                        <div className="teacher_stats_container">
                            <ul className="teacher_stats">
                            <li>Lessoans online</li>
                            <li>Lessoans done:<span>{lessons_done}</span></li>
                            <li>Rating:<span>{rating}</span></li>
                            <li>Price / 1 hour: <span>${price_per_hour}</span></li>
                        </ul>
                         <img 
                            src={heartSvg} 
                            alt="LearnLingo Logo" 
                            width={20} 
                            height={20} 
                        />
                        </div>
                    </div>
                    
                    <ul>
                        <li className='info_text'>Speaks:<span className='span_speaks'>{languages.join(', ')}</span> </li>
                        <li className='info_text'>Lesson info:<span className='span_info_text'>{lesson_info}</span></li>
                        <li className='info_text'>Conditions: <span className='span_info_text'>{conditions?.join(', ')}</span> </li>
                    </ul>
                    <a className='read_more_button'>Read more</a>
                    <ul className="teacher_levels">
                        {levels.map((level, index) => (
                            <li className='teacher_levels_item' key={index}>{level}</li>
                        ))}
                    </ul>
                </div>
                
            </section>
        </>
    )               

}         

export default Teacher