import './features.css'

function Features ({ icon, title, text }) {
    return ( 
        <div className='feature-item'>
            {icon && <img src={icon} alt="Chat Icon" class="feature-icon" />}
            {title && <h3 className='feature-item-title'>{title}</h3>}
            {text && <p>{text}</p>}
        </div>
     );
}

export default Features ;