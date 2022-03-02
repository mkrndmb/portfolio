import './header.css'

export function Header() {
    return (
        <div className='header'>
            <h1>Hi, my name is</h1>
            <div className='header1'>Makarand.</div>
            <div className='header2'>I build things for the web.</div>
            <div className='para'>I’m a Full-Stack Developer specializing in building exceptional digital experiences. Recently, I was working as a Database   
            Developer and Admin at<span className='spann'>Tata Consultancy Services Ltd.</span>.</div>
            <a className='checkout-button' href='/my22.pdf' target='_blank' rel="noopener noreferrer" download>Resume here</a>
        </div>
    )
};
