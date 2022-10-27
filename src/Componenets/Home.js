
import { Link } from 'react-router-dom';



const Home = () => {
   
    return (
        <div >
            
            <h1 className='text-9xl text-black text-center font-bold'>Welcome to our Website Dev Edu!!!</h1>
            
            <p className='text-black text-center font-semibold mt-12'>
                Here you can learn about programming related courses like Python.R <br /> and Software DevelopmentFundamentals of Java Programming and many more |<br />
                We dont provide free courses .There are lots of free sources in the internet <br />
                but you dont get the guideline with those free courses . thus most of the people who starts     <br />fails for not  getting proper guideline. Our expert team will provide you world class guideline and <br />our helpline will open for 24/7 <br />whenever you need you can contact us <br />so hurry up and enroll in our course with thousand others
            </p>
            <div className='flex justify-center mt-10 pb-4'>
                <Link to={'/register'} > <button className='bg-blue-400 px-6 rounded text-white hover:text-black hover:bg-lime-600 py-3 mr-6'>Register now</button></Link> <Link to={'/login'}><p className='hover:text-green-900 mt-3'> already have an account?</p></Link>
            </div>
        </div>
    );
};

export default Home;