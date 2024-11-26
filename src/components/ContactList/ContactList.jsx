import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
const ContactList = ({ contacts,  onDeleteContact }) => {
    return (
         <ul className={s.list}>
      {contacts.map(({ id, name, number })=> (
          <Contact key={id}
                   name={name}
                   number={number}
                   id={id}
                   onDeleteContact={onDeleteContact}
          />
      ))}
    </ul>
    )
}

export default ContactList