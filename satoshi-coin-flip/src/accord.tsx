import * as Accordion from '@radix-ui/react-accordion';
import './style.css';

function AccordionDemo(){
    return (
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <Accordion.AccordionTrigger>Why Luck Flip?</Accordion.AccordionTrigger>
      <Accordion.AccordionContent>Because it will bring u luck.</Accordion.AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <Accordion.AccordionTrigger>Is it Safe?</Accordion.AccordionTrigger>
      <Accordion.AccordionContent>
        Yes.
      </Accordion.AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <Accordion.AccordionTrigger>How To Play?</Accordion.AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          You can see video right here!!
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
 );

}
export default AccordionDemo;
