import { useState } from 'react';
import './ContactForm.scss'

export function ContactForm({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
    number: '',
});

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    reset();
  };

 const reset = () => {
    setState({ name: '', number: '' });
  };

      return (
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={state.name}
          />
        </label>
        <label className="label">
          Number
          <input
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={state.number}
            onChange={handleChange}
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }


