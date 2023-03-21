import './style.css'
import { init_animation } from './stars';


document.querySelector('#app').innerHTML = `
  <nav role="navigation" id="NavBar">
    <ul role="list">
      <li><a href="#about">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
        </svg>
      Home
      </a></li>
        <li><a href="#technologies">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
        </svg>
      Technologies</a></li>
      <li><a href="#contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>
      Contact</a></li>
    </ul>
  </nav>
    <section class="bg-null" id="about">
        <div class="title-card">
            <h3 role="heading" class="mb-0" >Hi, I'm</h3>
            <h1 role="heading" class="mt-0 mb-0">Korben</h1>
            <h3 role="heading">A Backend / Full Stack Software Engineer</h3>
            <hr/>
            <h3 role="heading">
            I'm passionate about delivering high performance software solutions
            driven by customer requirements.
            </h3>

        </div>
        <h2 class="footer">Scroll for more ⬇️</h2>
    </section>
    <div class="divider waves1"></div>
    <section class="bg-blue" id="technologies">
      <div class="custom-shape-divider-top-1665044587">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
      <h1 role="heading">Technologies</h1>
      <div class="tech-holder animate-on-scroll">
        <div class="tech">
          <img alt="C Sharp logo" onclick="show_blurb(0)" class="logo" src="csharp.svg"/>
          <img alt="JavaScript Logo" onclick="show_blurb(1)" class="logo vanilla" src="javascript.svg"/>
          <img alt="Java logo" onclick="show_blurb(2)" class="logo java" src="java.svg"/>
          <img alt="Python logo" onclick="show_blurb(3)" class="logo python" src="python.svg"/>
          <img alt="CPlusPlus logo" onclick="show_blurb(4)" class="logo cpp" src="cpp.svg"/>
        </div>
        <div class="card blurbs" id="tech-blurb">
          <div id="blurb-default" class="blurb">
            <h1 role="heading">Select a technology to see what I've built with it.</h1>
          </div>
          <div hidden class="blurb">
            <h1 role="heading">C# / ASP.net core</h1>
            <ul role="list">
              <li class="border-gradient border-gradient-purple">
                <h2 class="">Casino Asset Management Software</h2>
                <p>
                  An all-in-one casino device management solution capable of interfacing with
                  Networked roulette wheels, card shoes, and more!
                </p>
              </li>
              <li class="border-gradient border-gradient-purple">
                <h2 class="">Casino Device Firmware Flasher</h2>
                <p>
                  An application to flash firmware to a casino device.
                  Includes checksum detection for GLI compliance.
                </p>
              </li>
              <li class="border-gradient border-gradient-purple">
                <h2 class="">Malware Scanning Tool</h2>
                <p>
                  A tool I developed with 3 peers as part of my final year university project.
                  Features YARA-based rule scanning and SHA256 hash matching. Backed by a SQLite database.
                </p>
              </li>
              <li class="border-gradient border-gradient-purple">
                <h2 class="">Phillips Hue Lighting App</h2>
                <p>
                  An app I wrote to change the colour of the lights in the home.
                  Features "red alert" and "disco" modes along with custom colour selection.
                </p>
              </li>
              <li class="border-gradient border-gradient-purple">
                <h2 class="">Alarm System Homepage</h2>
                <p>
                  A frontend for my custom computer vision powered room alarm system.
                  Featuring security live view, recordings, and more.
                </p>
              </li>
              <li class="border-gradient border-gradient-purple">
                <h2 class="">Game Log Analysis</h2>
                <p>
                  A simple Xamarin / WPF application I developed to help analyse proprietary log
                  files from my game project. Features keyword highlighting, search, and more.
                </p>
              </li>
            </ul>
          </div>
          <div hidden class="blurb">
          <h1 role="heading">JavaScript</h1>
            <ul role="list">
              <li class="border-gradient border-gradient-yellow">
                <h2 class="">Personal portfolio site</h2>
                <p>
                  This website is built using Vite.js, a popular JavaScript framework for web development.
                </p>
              </li>
              <li class="border-gradient border-gradient-yellow">
                <h2 class="">Live Casino Security</h2>
                <p>
                  A realtime security footage viewer for Roulette Tables, connected to a backend I wrote
                  using C#.
                </p>
              </li>
              <li class="border-gradient border-gradient-yellow">
                <h2 class="">Security Recording Viewer</h2>
                <p>
                  A playback system to view recorded casino security footage, connected to a backend
                  I wrote using C#. Features chronological logging, filtering and event categorisation.
                </p>
              </li>
              <li class="border-gradient border-gradient-yellow">
                <h2 class="">3D Object Viewer</h2>
                <p>
                  A simple object viewer, accepting both GLTF and GLB model files.
                  Built using three.js.
                </p>
              </li>
            </ul>
          </div>
          <div hidden class="blurb">
            <h1 role="heading">Java</h1>
            <ul role="list">
              <li class="border-gradient border-gradient-red">
                <h2 class="">NHS Patient Interface App</h2>
                <p>
                  A simple healthcare portal for NHS patients developed as groupwork in my second year of university.
                  Built with JavaFX, backed with a mySQL database.
                </p>
              </li>
              <li class="border-gradient border-gradient-red">
                <h2 class="">Hitbox Design Tool</h2>
                <p>
                  A graphical hitbox designer for my ongoing game project, NSV13's 
                  bespoke physics engine developed in partnership with myself and another developer.
                </p>
              </li>
              <li class="border-gradient border-gradient-red">
                <h2 class="">2d Sidescroller</h2>
                <p>
                  A simple 2d sidescroller game I developed while I was learning to code in High School.
                  Features simplified physics and endless gameplay, with assets designed by myself. 
                </p>
              </li>
            </ul>
          </div>
          <div hidden class="blurb">
            <h1 role="heading">Python</h1>
            <ul role="list">
              <li class="border-gradient border-gradient-yellow-blue">
              <h2 class="">Natural Language Processing</h2>
              <p>
                As part of my university degree, I wrote several scripts using numPY, pandas and 
                nltk to perform natural language processing on university research statements.
              </p>
              </li>
              <li class="border-gradient border-gradient-yellow-blue">
              <h2 class="">OpenCV Object Detection</h2>
              <p>
                While researching openCV with C++, I created a simple YOLO object detector with openCV + python.
                The detector can classify basic entities like computer monitors, humans and more.
                
              </p>
              </li>
            </ul>
          </div>
          <div hidden class="blurb">
              <h1 role="heading">C++</h1>
              <ul role="list">
                <li class="border-gradient border-gradient-blue">
                  <h2 class="">Roulette Wheel Detector</h2>
                  <p>
                    An application I produced which can identify winning numbers in roulette.
                    Written with openCV, it also features hand / foreign object detection as well as 
                    automatic region of interest detection.
                  </p>
                </li>
                <li class="border-gradient border-gradient-blue">
                  <h2 class="">RTSP Stream Decoder</h2>
                  <p>
                    A library I wrote which can decode incoming RTSP stream packets from
                    networked security cameras. Built with libFFMPEG, multiple types of
                    RTSP transport layer are supported.
                  </p>
                </li>
              </ul>

          </div>
        </div>  
      
      </div>


      <div class="curve"></div>
    </section>
    <div class="divider steps1"></div>
    <section class="bg-purple" id="contact">
    <div class="card blurb animate-on-scroll contact-details">
      <h1 role="heading" class="mt-0 mb-0 ">Get in touch</h1>
      <hr/>
      <ul class="pl-0">
        <li class="border-gradient border-gradient-purple">
          <a target="blank" class="text-white" href="mailto:kmabbs2000@gmail.com">
            <h2 class="">Email</h2>
            <svg alt="Email icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
          </a>
        </li>
        <li class="border-gradient border-gradient-purple">
          <a target="blank" class="text-white" href="https://github.com/Kmc2000">
            <h2 class="">GitHub</h2>
            <img alt="GitHub logo" src="github-mark-white.svg" style="width:32px;height:32px"/>
          </a>
        </li>
      </ul>

    </div>
    <div class="footer">
      <i class="pb-0 pt-0">
      I'm committed to providing a website that is accessible to the widest possible audience. 
      </i>
      <br/>
      <i class="pb-0 pt-0">
        Please email me if you encounter any issues that impact your ability to enjoy this site.
      </i>
    </div>
    </section>

`

init_animation();

const navbar = document.querySelector('#NavBar');
let _top = navbar.offsetTop;
//Function to stick the navbar to the top of the screen, for ease of navigation.
function sticky_navbar() {
  if (window.scrollY >= _top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', sticky_navbar);

let elementsArray = document.querySelectorAll(".animate-on-scroll");

function animate_on_scroll() {
  for (let i = 0; i < elementsArray.length; i++) {
      let x = elementsArray[i]
      let distance = x.getBoundingClientRect().top - window.innerHeight;
      if (distance < 0) {
          x.classList.add("active");
      } 
      else {
          x.classList.remove("active");
      }
  }
}
animate_on_scroll();
window.addEventListener('scroll', animate_on_scroll ); 