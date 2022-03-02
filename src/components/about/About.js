import './about.css'


export function About({useElementOnScreen}) {
    const [ref,isVisible] = useElementOnScreen({
        root:null,
        rootMargin:'0px',
        threshold: 0.3
        })
    return(
        <div id='about' className={`about ${isVisible ? `about-show` : ``}` }>
            <h2>About Me</h2>
            <div className='about-content'>
                {isVisible ? console.log('visible') : console.log('not visible')}
                <div className='info' ref={ref}>
                    <p className='para'>Hello! My name is Makarand and I enjoy creating things that live on the internet. My interest in web development started back in college days when i was creating/cloning website templates in HTML & CSS!</p>
                    <p className='para'>Later, I got interest in Javascript and React when i came across amazing web development community over internet while i was working in TCS and started building interactive projects to learn and gain some hands on experience. Eventually, decided to become part of it.</p>
                    <p className='para p3'>Here are a few technologies I’ve been working with recently :</p>
                    <ul>
                        <li>Javascript (ES6+)</li>
                        <li>React | Redux</li>
                        <li>Node.js | Express</li>
                        <li>TypeScript</li>
                        <li>React Native</li>
                    </ul>
                </div>
                <div className='about-img'>
                    <img src='/sa.png' alt='about.jpg'/>
                </div>
            </div>
        </div>
    )
};
