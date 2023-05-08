type Props = {
    name:string;
    label:string;
    value:string;
    placeholder:string;
    onChangedHandler: (e:any) => void;
}

const TextArea = (props:Props) => {
    const {name, label, value, placeholder, onChangedHandler} = props;
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}:</label>
        <textarea rows={5}
                  placeholder={placeholder}
                  name={name}
                  value ={value}
                  onChange={(e) => onChangedHandler(e)}/>
    </div>  
  )
}

export default TextArea;
