import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface propsType{
  title: string;
  desc: string;
  open: boolean;
  toggle: () => void
}
const AccordionItem = ({title, desc, open, toggle}: propsType) => {
  return (
    <div className='accordionItem' onClick={toggle}>
      <div className="accordionItem__flex">{title} {open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>

      <div className={`desc ${open ? "show" : "" }`}>
        <span className="hidden">{desc}</span>
      </div>

    </div>
  )
}

export default AccordionItem