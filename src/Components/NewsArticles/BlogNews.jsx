
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const BlogNews = ({ blog }) => {
    const { id, imgUrl1, title, date } = blog;
    return (
        <div className='space-y-5 '>
            <div className='overflow-hidden rounded-3xl'>
                <Link to={`/blogDetails/${id}`}>
                    <img className='w-full h-68 hover:scale-110 transition-all duration-500 ' src={imgUrl1} alt="" />
                </Link>
            </div>
            <div className='flex gap-5'>
                <p>{date}</p>
                <p>5 min read</p>
            </div>
            <Link to={`/blogDetails/${id}`}>
                <p className='text-2xl font-outfit hover:underline duration-500 transition-all cursor-pointer'>{title}</p>
            </Link>

            <Link to={`/blogDetails/${id}`}>
                <button className="btn-text-primary mt-5">Read More<FaArrowRight /></button>
            </Link>
        </div>
    )
}

export default BlogNews