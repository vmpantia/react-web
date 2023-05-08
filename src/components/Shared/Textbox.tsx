type Props = {
    name:string;
    label:string;
    value:string;
    placeholder:string;
    onChangedHandler: (e:any) => void;
}

const TextBox = (props:Props) => {
    const {name, label, value, placeholder, onChangedHandler} = props;
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}:</label>
        <input type="text" 
               placeholder={placeholder}
               name={name}
               value ={value}
               onChange={(e) => onChangedHandler(e)}/>
    </div>  
  )
}

export default TextBox;