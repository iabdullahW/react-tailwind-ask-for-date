
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const DoYouWannaGoOut = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const nextPage = () => {
        // Redirect to the "Yeeeyyyy" page
        navigate('/yeeeyyyy'); // Use navigate function to redirect
    };

    const moveButton = () => {
        // Logic to move the 'No' button randomly
        const noButton = document.getElementById('noButton');
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    };

    return (
        <div className="flex justify-center items-center h-screen bg-pink-300">
            <div className="container text-center">
                <h1 className="text-white font-bold text-4xl mb-8">Do you wanna go out with me?</h1>
                <div className="gif_container mb-8">
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration" />
                </div>
                <div className="buttons ">
                    <button className="btn mr-4 bg-pink-500 rounded px-2 border border-white text-white hover:bg-pink-600 focus:outline-none focus:border-pink-700 focus:ring focus:ring-pink-300 active:bg-pink-700 " onClick={nextPage}>Yes</button>
                    <button id="noButton" className="btn bg-pink-400 rounded px-2 border border-gray-700 " onMouseOver={moveButton} onClick={moveButton}>No</button>
                </div>
            </div>
        </div>
    );
};

export default DoYouWannaGoOut;
