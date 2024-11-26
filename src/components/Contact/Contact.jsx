import s from "./Contact.module.css"
import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
      <li className={s.listItem}>
          <div className={s.contactInfo}>
        <span className={s.contactName}>  <HiUser />  {name}:</span>
        <span className={s.contactNumber}> <HiPhone /> {number}</span>
              </div>
          <button className={s.button} onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
