import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

function ContactList({ contacts }) {
  const contactId = shortid.generate();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={contactId} className={s.item}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
export default ContactList;
