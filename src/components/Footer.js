import { useState } from 'react';

const Footer = (props) => {
    const [ newForm, setNewForm ] = useState('');

    const handleChange = (event) => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPeople(newForm);
    };


    return (
        <div className="footer">
            <h2>Contact Me</h2>
            <form className="inputs" onSubmit={handleSubmit}>
                <input 
                    className="input"
                    placeholder="Name"
                    onChange={handleChange} 
                    name="name"
                    type="text" 
                />
                <input 
                    className="input"
                    placeholder="Email"
                    onChange={handleChange} 
                    name="title"
                    type="text" 
                />
                <textarea 
                    className="textarea"
                    placeholder="Send a message!"
                    onChange={handleChange} 
                    name="image"
                    type="text" 
                />
                <input className="button" type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Footer;