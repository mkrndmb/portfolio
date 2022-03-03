import './projects.css'
import homestop from './homestop.png'
import garbage from './garbage.png'
import sto from './sto.png'

export function Projects() {
   
    return(
        <div id='work' className='projects'>
            <h2>Some Things I’ve Built</h2>
            <div className='proj-content'>
                <div className='proj1'>
                    <p className='outline'>Practice Project</p>
                    <h3>Stories</h3>
                    <div className='desc'>A Full Stack web application where user can share their
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
                <img className='img2' src={sto} alt='hs' />
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
                    <p className='outline'>FY Engineering Project</p>
                    <h3>Waste Management System</h3>
                    <div className='desc'>Web based application which monitors level of garbage and keeps track of it. Also provide mailing system to the authority ,a QA corner for registered people. </div>
                    <ul className='list list3'>
                        <li>Python/Flask</li>
                        <li>Firebase</li>
                        <li>MySQL</li>
                        <li>Raspberry Pi 3</li>
                    </ul>
                    <div className='links'>
                        <div></div>
                        <div><a target='_blank' href='https://github.com/mkrndmb'>https://github.com/mkrndmb
</a></div>
                    </div>
                </div>
                <div className='proje-img'>
                <img className='img2' src={garbage} alt='hs' />
                </div>
                
            </div>
        </div>
    )
};
