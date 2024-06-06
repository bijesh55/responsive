import { Table } from "@mantine/core";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const elements = [
  {
    SN: 1,
    name: "Bijesh ",
    SKU: "987665152",
    Stock: "10",
    Status: <><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </>,
  },
  {
    SN: 1,
    name: "Bijesh ",
    SKU: "987665152",
    Stock: "10",
    Status: <><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </>,
  }

 
];

function Tavlur() {
  const rows = elements.map((element) => (
  
    <Table.Tr key={element.name}>
      <Table.Td className="text-center">{element.SN}</Table.Td>
      <Table.Td className="text-center">{element.name}</Table.Td>
      <Table.Td className="text-center">{element.SKU}</Table.Td>
      <Table.Td className="text-center">{element.Stock}</Table.Td>
      <Table.Td  className="text-center flex justify-center mt-7 text-3xl">{element.Status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="w-full h-screen text-2xl ">
    <Table className="bg-primary  w-11/12 h-52 item-center justify-center rounded-2xl mt-12 text-second  m-auto">
      
      <Table.Thead className=" h-20">
        <Table.Tr>
          <Table.Th>S.N</Table.Th>
          <Table.Th>Product name</Table.Th>
          <Table.Th>SKU</Table.Th>
          <Table.Th>Stock</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
     
      <Table.Tbody>{rows}</Table.Tbody>
    </Table></div>
  );
}
export default Tavlur;