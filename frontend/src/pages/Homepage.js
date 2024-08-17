import React, { useContext, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { colorContext } from '../context/ColorModeContext';


const Homepage = () => {
  const [authModal, ShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('Login');

  const { dark, setDark } = useContext(colorContext);

  const darkModeHandler = () => {
    setDark(!dark);
    localStorage.setItem("theme", dark);
    document.body.classList.toggle('dark');
  }


  const showModal = () => {
    ShowAuthModal((prevState) => prevState === true ? false : true);
  }

  const handleAuthMode = () => {
    setAuthMode((prevState) => prevState === 'Login' ? 'Sign up' : 'Login');
  }

  return ( 
    <div class='container' className='m-auto p-5 max-w-[1200px] w-[90%]'>

      <header className='flex items-center justify-between flex-wrap py-5 sm:flex-col sm:items-start'>

        <div class='logo' className='flex items-center text-white text-[24px] font-bold'>

          <img class='logo-icon' className='w-[30px] h-[30px] mr-2.5 rounded-full bg-gradient-45 from-[#726bff] to-[#57b6fe] object-cover' />
          <img src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png" className='w-[50px]' alt="BookAI Logo" />
          BookAI
        </div>

        <nav className='flex items-center flex-wrap sm:mt-5'>
          <a href="#" className='text-white cursor-pointer font-light ml-5 sm:mr-5 sm:my-2.5 sm:ml-0 
                                  transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                  decoration-solid no-underline hover:text-[#8a2be2]'>Features</a>

          <a href="#" className='text-white cursor-pointer font-light ml-5 sm:mr-5 sm:my-2.5 sm:ml-0 
                                  transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                  decoration-solid no-underline hover:text-[#8a2be2]'>How It Works</a>

          <a href="#" className='text-white cursor-pointer font-light ml-5 sm:mr-5 sm:my-2.5 sm:ml-0 
                                  transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                  decoration-solid no-underline hover:text-[#8a2be2]'>Roadmap</a>

          <a href="#" className='text-white cursor-pointer font-light ml-5 sm:mr-5 sm:my-2.5 sm:ml-0 
                                  transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                  decoration-solid no-underline hover:text-[#8a2be2]'>API</a>

          <a href="#" className='text-white cursor-pointer font-light ml-5 sm:mr-5 sm:my-2.5 sm:ml-0 
                                  transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                  decoration-solid no-underline hover:text-[#8a2be2]'>Price</a>

          <a href="#" className='text-white cursor-pointer font-light ml-5 sm:mr-5 sm:my-2.5 sm:ml-0 
                                  transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                  decoration-solid no-underline hover:text-[#8a2be2]'>Models</a>

          <a id='darkMode-button' className='text-white cursor-pointer font-light ml-5 sm:mr-5 sm:my-2.5 sm:ml-0 
                                              transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                              decoration-solid no-underline hover:text-[#8a2be2]'
            onClick={darkModeHandler}>{dark && <FaMoon />}{!dark && <FaSun />}</a>

          <a id="auth-button" className='block text-white cursor-pointer font-light ml-5 py-2.5 px-5 rounded-[4px] sm:mr-5 sm:my-2.5 sm:ml-0 
                                          transition ease-in-out duration-300 delay-0 decoration-white decoration-auto 
                                          decoration-solid no-underline bg-gradient-45 from-[#726bff] to-[#57b6fe]'
            onClick={showModal}>Login / Sign Up</a>
        </nav>


      </header>

      <div id='authModal' class='modal' className={`${authModal === true ? 'block' : 'hidden'} fixed left-[0px] top-[0px] z-[1000] 
                                                    w-full h-full text-white bg-black/[0.4] overflow-auto`}>

        <div class='modal-content' className='shadow-md block mx-auto my-[10%] max-w-[400px] w-[90%] p-[30px] rounded-[8px] bg-[#fefefe] text-white'>

          <span class="close" className='block cursor-pointer float-right text-[24px] font-bold text-black transition ease-in-out duration-300 delay-0'
            onClick={showModal}>x</span>

          <h2 id='formTitle' className='block text-[24px] font-bold mb-[20px] text-center text-black'>{authMode}</h2>

          <form id="authForm" className='flex flex-col gap-y-[15px] gap-x-[15px]'>
            <input type="email" id="email" placeholder="Email" required
              className='appearance-auto inline-block outline-none p-[12px] bg-white border-[0.8px] border-solid border-[#ddd] 
                                  rounded-[4px] tracking-normal normal-case text-[16px] text-[fieldtext] text-start indent-0 cursor-text 
                                  font-normal font-[Arial] focus:border-[#8a2be2]'/>

            <input type="password" id="password" placeholder="Password" required
              className='appearance-auto inline-block outline-none p-[12px] bg-white border-[0.8px] border-solid border-[#ddd] 
                                rounded-[4px] tracking-normal normal-case text-[16px] text-black text-start indent-0 cursor-text 
                                font-normal font-[Arial] focus:border-[#8a2be2]' />

            <input type="password" id="confirmPassword" placeholder="Confirm Password" required
              className={`appearance-auto ${authMode === 'Sign up' ? 'inline-block' : 'hidden'} outline-none p-[12px] bg-white border-[0.8px] 
                                  border-solid border-[#ddd] rounded-[4px] tracking-normal normal-case text-[16px] text-black text-start indent-0 cursor-text 
                                  font-normal font-[Arial] focus:border-[#8a2be2]`} />

            <button type="submit" id="submitButton" className='appearance-auto inline-block ps-[6px] pe-[6px] py-[1px] bg-[buttonface] 
                                                                border-[outset] border-[buttonborder] tracking-normal normal-case text-[buttontext] indent-0 
                                                                text-center cursor-default hover:bg-gradient-45 hover:from-[#726bff] hover:to-[#57b6fe] 
                                                                hover:text-white'>{authMode}</button>
          </form>

          <div class="switch-link" id="switchLink" className='mt-[15px] text-center text-[#4f46e5] cursor-pointer transition ease duration-300 delay-0 hover:underline'
            onClick={handleAuthMode}>{authMode === 'Login' ? "Don't have an account? Sign up" : "Already have an account? Login"}</div>

        </div>

      </div>

      <section class="hero" className='block relative z-[1] text-center pt-[80px]  pr-0 pb-0 pl-[20px]'>
        <h1 className='block text-[48px] xs:text-[36px] mb-[20px] leading-tight font-bold text-white '>
          Explore the Possibilities of
          <span class="highlight" className='relative bg-gradient-45 from-[#8a2be2] to-[#4b0082] bg-clip-text bg-scroll bg-white bg-origin-padding 
                                              bg-repeat bg-auto text-transparent after:content-[""] after:absolute after:left-0 
                                              after:bottom-[-5px] after:w-full after:h-[3px] after:bg-gradient-45 after:from-[#726bff] 
                                              after:to-[#57b6fe]' > AI Book Writing</span> with BookAI
        </h1>
        <p class="subtitle" className='block text-[18px] max-w-[550px] mx-auto mt-0 mb-[40px] text-[#b3b3b3] dark:text-gray-600'>
          Unleash the power of AI to create captivating books in minutes.
          Download, Distribute wherever you want. Generate unlimited free books
        </p>
        <a href="/playgrounds" class="cta" className='inline-block mr-1 bg-gradient-45 from-[#726bff] to-[#57b6fe] text-white rounded-[30px] cursor-pointer 
                                            py-[12px] px-[30px] font-semibold no-underline transition duration-300 delay-0 ease-in-out 
                                            hover:-translate-y-1'>Get Started</a>
        <a href="#" class="cta" className='inline-block bg-gradient-45 from-[#726bff] to-[#57b6fe] text-white rounded-[30px] cursor-pointer 
                                            py-[12px] px-[30px] font-semibold no-underline transition duration-300 delay-0 ease-in-out 
                                            hover:-translate-y-1'>Get API Access</a>
        <br />
        <br />
        <p style={{ color: 'yellow' }} className='block'><span>Attention:</span>TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
      </section>

      <footer className='block mt-[80px] text-center py-5 px-0 border-t-[1px] border-t-solid border-t-white/[0.1] dark:border-t-white/[0.5]'>
        <p className='block'>© 2024 BookAI. All rights reserved.</p>
        <div className='block'>
          <a href="#" className='text-[#b3b3b3] dark:text-gray-600 my-0 mx-2.5 no-underline transition ease-in-out duration-300 delay-0'>Terms of Service</a>
          <a href="#" className='text-[#b3b3b3] dark:text-gray-600 my-0 mx-2.5 no-underline transition ease-in-out duration-300 delay-0'>Privacy Policy</a>
          <a href="#" className='text-[#b3b3b3] dark:text-gray-600 my-0 mx-2.5 no-underline transition ease-in-out duration-300 delay-0'>Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

export default Homepage;
