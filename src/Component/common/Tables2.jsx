import { Table } from "@mantine/core";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Container } from '@mantine/core';
const elements = [
  {
    SN: 1,
    name: "Bijesh ",
    SKU: "987665152",
    Stock: "10",
    Status: <div className="flex" ><BiSolidEdit className="text-white-500 "/> <MdDelete className="text-red-400 " />
    </div>,
  },
  {
    SN: 1,
    name: "Bijesh ",
    SKU: "987665152",
    Stock: "10",
    Status: <div className="flex"><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </div>,
  }

 
];

function Tavlur() {
  const rows = elements.map((element) => (

    <Table.Tr key={element.name} className="text-xs md:text-xl lg:mt-12 mt-12 lg:text-xl rounded-full bg-primary">
      <Table.Td className="curveleft" >{element.SN}</Table.Td>
      <Table.Td >{element.name}</Table.Td>
      <Table.Td >{element.SKU}</Table.Td>
      <Table.Td >{element.Stock}</Table.Td>
      <Table.Td  className="curveright">{element.Status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="w-full h-screen lg:text-2xl text-xs ">
    <Table className=" w-11/12  item-center mt-8 lg:mt-8 text-second  m-auto  ">
    
      <Table.Thead className="  w-11/12  item-center justify-center  text-second  m-auto text-xs md:text-xl lg:text-2xl border-solid ">
        <Table.Tr className="bg-primary h-4 ">
          <Table.Th  className="curveleft">S.N</Table.Th>
          <Table.Th >Product name</Table.Th>
          <Table.Th>SKU</Table.Th>
          <Table.Th>Stock</Table.Th>
          <Table.Th className="curveright">Status</Table.Th>
         
        </Table.Tr>
      </Table.Thead>
     
      <Table.Tbody>{rows}</Table.Tbody>
     
    </Table></div>
  );
}
export default Tavlur;