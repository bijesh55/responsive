import { Table } from "@mantine/core";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const elements = [
  {
    position: 1,
    name: "Bijesh shrestha",
    Number: "987665152",
    Date: "May 26, 2024",
    Action: <><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </>,
  },
  {
    position: 1,
    name: "Bijesh shrestha",
    Number: "987665152",
    Date: "May 26, 2024",
    Action: <><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </>,
  },
  {
    position: 1,
    name: "Bijesh shrestha",
    Number: "987665152",
    Date: "May 26, 2024",
    Action: <><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </>,
  },
  {
    position: 1,
    name: "Bijesh shrestha",
    Number: "987665152",
    Date: "May 26, 2024",
    Action: <><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </>,
  },
  { position: 1,
    name: "Bijesh shrestha",
    Number: "987665152",
    Date: "May 26, 2024",
    Action: <><BiSolidEdit className="text-white-500"/> <MdDelete className="text-red-400" />
    </>,}
];

function Demo() {
  const rows = elements.map((element) => (
  
    <Table.Tr key={element.name}>
      <Table.Td className="text-center">{element.position}</Table.Td>
      <Table.Td className="text-center">{element.name}</Table.Td>
      <Table.Td className="text-center">{element.Number}</Table.Td>
      <Table.Td className="text-center">{element.Date}</Table.Td>
      <Table.Td  className="text-center flex justify-center mt-7 text-3xl">{element.Action}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="w-full h-screen text-2xl ">
    <Table className="bg-primary  w-11/12 h-1/2 item-center justify-center rounded-2xl mt-12 text-second  m-auto">
      
      <Table.Thead className=" h-20">
        <Table.Tr>
          <Table.Th>S.N</Table.Th>
          <Table.Th>Supervisor name</Table.Th>
          <Table.Th>Phone</Table.Th>
          <Table.Th>Listed Data</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
     
      <Table.Tbody>{rows}</Table.Tbody>
    </Table></div>
  );
}
export default Demo;
