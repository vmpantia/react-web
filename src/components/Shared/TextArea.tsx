type Props = {
    name:string;
    label:string;
    value:string;
    placeholder:string;
    onTextChangedHandler: () => void;
}

const TextArea = (props:Props) => {
    const {name, label, value, placeholder, onTextChangedHandler} = props;
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}:</label>
        <textarea rows={5}
                  placeholder={placeholder}
                  name={name}
                  value ={value}
                  onChange={onTextChangedHandler}/>
    </div>  
  )
}

export default TextArea;
