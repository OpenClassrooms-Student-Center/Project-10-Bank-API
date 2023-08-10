import './button.css'

const Button = ({ text, className, onClick, type }) => {
    return ( 
        <button className={className} onClick={onClick} type={type} >{text}</button>
     );
}

export default Button ;