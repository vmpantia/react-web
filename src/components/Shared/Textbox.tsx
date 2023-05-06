type Props = {
    name:string;
    label:string;
    value:string;
    placeholder:string;
    onTextChangedHandler: () => void;
}

const Textbox = (props:Props) => {
    const {name, label, value, placeholder, onTextChangedHandler} = props;
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}:</label>
        <input type="text" 
               placeholder={placeholder}
               name={name}
               value ={value}
               onChange={onTextChangedHandler}/>
    </div>  
  )
}

export default Textbox;