import Category from "./Category/Category";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import "./Sidebar.css";

const AccordSidebar = ({ handleChange }) => {
  return (
    <>
      <section className="">
        <Accordion
          type="single"
          collapsible={true}
          className="border-0 rounded-lg pb-5 lg:hidden"
        >
          <AccordionItem value="item-1" className=" border-2 rounded-lg">
            <AccordionTrigger className=" font-semibold hover:no-underline text-2xl md:text-4xl p-2">
              Filter Job
            </AccordionTrigger>
            <AccordionContent className="border-2 rounded-lg flex justify-between border-none p-2">
              <Category handleChange={handleChange} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default AccordSidebar;
