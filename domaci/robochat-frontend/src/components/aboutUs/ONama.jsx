import React, { useState } from 'react';
import './ONama.css'; 

const ONama = () => {
    const telefon = "+3816544321";
    const email = "robochatAI@gmail.com";

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className='o-nama-stranica'>
        <div className="o-nama">
            <h1>About us</h1>
            <p> Welcome to RoboChat, where innovation meets conversation,
                 and artificial intelligence (AI) becomes your virtual companion.
                  At RoboChat, we redefine the way you engage with technology, offering
                   a seamless and intelligent chat experience that goes beyond the ordinary.</p>

                   <h2>🚀 Explore the Future of Communication:</h2>
                   <p>RoboChat is not just an app; it's a glimpse into the future of
                     communication. Our cutting-edge AI technology allows you to interact
                      with a virtual assistant that learns and adapts to your preferences,
                       providing personalized and dynamic conversations.</p>

                       <h2>🌐 Global Knowledge at Your Fingertips:</h2>
                       <p>Powered by a vast knowledge base, RoboChat harnesses
                         the power of artificial intelligence to provide you with
                          instant information on a wide range of topics. 
                          From answering general queries to offering in-depth insights,
                           RoboChat is your go-to source for knowledge.</p>

                           <h2>💬 Converse Naturally, Anytime, Anywhere:</h2>
                           <p>Say goodbye to rigid interactions. RoboChat is designed
                             to understand and respond to your natural language, making
                              conversations feel authentic and engaging. Whether you're
                               seeking assistance, information, or simply want to chat,
                                RoboChat is here 24/7, ready to engage in intelligent discussions.</p>

                                <h2>🤖 Constantly Evolving Intelligence:</h2>
                                <p>At RoboChat, we believe in staying ahead
                                     of the curve. Our AI constantly evolves
                                      through machine learning, ensuring that
                                       your experience becomes more refined with
                                        each interaction. It's not just a virtual
                                         assistant; it's a companion that grows alongside you.</p>

                                         <h2>🎉 Join the Conversation Revolution:</h2>
                                         <p>Embark on a journey into the future of
                                             communication with RoboChat. Revolutionize
                                              the way you interact with technology,
                                               explore a world of knowledge, and
                                                experience conversations that are
                                                 not only intelligent but also delightful.</p>

                                                 <p>Ready to be part of the conversation
                                                     revolution? Welcome to RoboChat
                                                      – where the future of AI meet
                                                       the art of conversation!</p>
            <button onClick={toggleModal}>Show contact information</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <img className='logo2'  src="https://i.ibb.co/LJyZC4v/pozdrav.png" alt="logo" border="0"/>
                        <h3>Contact information:</h3>
                        <p>📞 Telephone: {telefon}</p>
                        <p>📩 Email: {email}</p>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default ONama;