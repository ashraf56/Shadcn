import React from 'react';
import {
  Accordion as Acordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getDummydata } from '@/lib/getDummydata';
import { Button } from './ui/button';
import Link from 'next/link';
import { ScrollArea } from "@/components/ui/scroll-area"

const DataAcordion = async () => {
  const { products } = await getDummydata()

  return (
    <Acordion type="single" collapsible className="w-full">
      <ScrollArea className="h-[100vh]  rounded-md ">
        {products.map(p => (

          <AccordionItem value={`${p.id}`} key={p.id}>
            <AccordionTrigger>{p.title}</AccordionTrigger>
            <AccordionContent>

              <ul className='ps-2 mx-auto gap-2   flex flex-col'>
                <li className='bg-clip-text text-transparent  bg-gradient-to-r from-[#3952f5]  to-[#c53a94]'>
                  <Link href={`/course/details/${p.id}`} >{p.category}</Link>
                </li>
                <li>
                  <Link href={`/course/details/${p.id}`}>{p.brand}</Link>
                </li>
                <li>
                  <Link href={`/course/details/${p.id}`}>{p.category}</Link>
                </li>
                <li>
                  <Link href={`/course/details/${p.id}`}>{p.brand}</Link>
                </li>

              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </ScrollArea>
    </Acordion>
  );
};

export default DataAcordion;