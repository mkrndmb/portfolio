import './contact.css'

export function Contact({useElementOnScreen}) {
    const [ref,isVisible] = useElementOnScreen({
        root:null,
        rootMargin:'0px',
        threshold: 1
        })
    return(
        <div id='contact' className={`contact ${isVisible ? `contact-show` : ``}` }>
            <h1 >What's Next?</h1>
            <div className='cc'>Get In Touch</div>
            <p className='cd'>Hi , I’m currently looking for new opportunities, reach out to me in my inbox. Whether you have a question or want to give feedback, Please feel free to mail me !</p>
            <div className='sayhello' ref={ref}><a href='mailto:imakrandb@gmail.com' target='_blank' rel="noopener noreferrer">Say Hello</a></div>
        </div>
    )
};
