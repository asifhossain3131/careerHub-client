import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Home.css'

const Home = () => {
    return (
        <>
        <Header></Header>
            <div className="min-h-[calc(100vh-120px)] bg-gray-200">
                <img className="homeImg  min-h-screen lg:w-3/5" src="https://www.tierpoint.com/wp-content/uploads/2022/05/8-IT-Professional-Career-Development-Tips-in-a-Managed-Services-World_blog.jpg" alt="" />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;