interface propsType{
  title: string;
  desc: string;
  open: boolean;
  toggle: () => void
}
const AccordionItem = ({title, desc, open, toggle}: propsType) => {
  return (
    <div className='accordionItem' onClick={toggle}></div>
  )
}

export default AccordionItem