import Select from 'react-select'


const Dropdown = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className="form-input">
            <Select className="basic-single"
                    classNamePrefix="select"
                    defaultValue={options[0]}
                    name="color"
                    options={options} />
        </div>  
    );
}

export default Dropdown;