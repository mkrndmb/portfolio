import './projects.css'
import homestop from './homestop.png'

export function Projects() {
   
    return(
        <div id='work' className='projects'>
            <h2>Some Things I’ve Built</h2>
            <div className='proj-content'>
                <div className='proj1'>
                    <p className='outline'>Practice Project</p>
                    <h3>Stories</h3>
                    <div className='desc'>Built a Full Stack web application where user can share their
Travel stories. It allows user to create, update, delete their
profile and posts ; Also allows user and category wise posts
filtering.</div>
                    <ul className='list'>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                    <div className='links'>
                        <div></div>
                        <div><a target='_blank' href='https://github.com/mkrndmb/stories'>https://github.com/mkrndmb/stories
</a></div>
                    </div>
                </div>
                <div className='proje-img'>
                    IMage
                </div>
                
                <div className='proj2'>
                    <p className='outline'>Practice Project</p>
                    <h3>Homestop</h3>
                    <div className='desc'>An E-commerce shopping app built using React , redux ,
reselect , Firebase. Used Firebase auth and GAP for user
authentication. Also used firebase for storing collections</div>
                    <ul className='list'>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Firebase</li>
                        <li>Reselct</li>
                    </ul>
                    <div className='links'>
                        <div></div>
                        <div><a target='_blank' href='https://github.com/mkrndmb/e-comm'>https://github.com/mkrndmb/e-comm</a>
</div>
                    </div>
                </div>
                <div className='proje-img two'>
                    <img className='img2' src={homestop} alt='hs' />
                </div>

                <div className='proj1' style={{marginTop:'130px'}}>
                    <p className='outline'>Practice Project</p>
                    <h3>TRAVEL COMPANION</h3>
                    <div className='desc'>Travel Advisor app to get info on nearby restaurants, hotels,
attractions based on location. </div>
                    <ul className='list list3'>
                        <li>React</li>
                        <li>Travel advisor API</li>
                        <li>@react-google-maps/api</li>
                    </ul>
                    <div className='links'>
                        <div></div>
                        <div><a target='_blank' href='https://github.com/mkrndmb/travel-companion'>https://github.com/mkrndmb/travel-companion
</a></div>
                    </div>
                </div>
                <div className='proje-img'>
                    IMage
                </div>
                
            </div>
        </div>
    )
};
