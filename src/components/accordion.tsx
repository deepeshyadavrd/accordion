import { useState } from "react";
import AccordionItem from "./AccordionItem";
const data =[
    {
        title: "This is title 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi optio, beatae architecto quidem minus harum, vitae, recusandae officia amet voluptatibus eos qui illo tempora culpa excepturi esse ex id",
    },
    {
        title: "This is title 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi optio, beatae architecto quidem minus harum, vitae, recusandae officia amet voluptatibus eos qui illo tempora culpa excepturi esse ex id",
    },
    {
        title: "This is title 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi optio, beatae architecto quidem minus harum, vitae, recusandae officia amet voluptatibus eos qui illo tempora culpa excepturi esse ex id",
    }
];
const accordion = () => {
    const [open, setOpen] = useState< Boolean | Number >(false);

    const toggle =(index: number) => {
        if(index === open){
            return setOpen(false);
        }

        setOpen(index)
    }
  return (
    <div className="accordion_holder">
        {data.map((item,index) => (
            <AccordionItem 
                key={item.title} 
                title={item.title} 
                desc={item.desc} 
                open={index === open} 
                toggle={() => toggle(index)}
            />
        ))}
    </div>
  )
}

export default accordion