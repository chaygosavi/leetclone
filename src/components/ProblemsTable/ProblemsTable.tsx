import { problems } from "@/mockProblems/problems";
import { BsCheckCircle } from "react-icons/bs";
import React from "react";
import Link from "next/link";

type Props = {};

const ProblemsTable = (props: Props) => {
  return (
    <tbody className="text-white">
      {problems.map((doc, idx) => {
        return (
          <tr
            className={`${idx % 2 === 1 ? "bg-dark-layer-1" : ""}`}
            key={doc.id}
          >
            <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
              <BsCheckCircle fontSize={18} width={18} />
            </th>
            <td className="px-6 py-4">
              <Link
                className="hover:text-blue-600 cursor-pointer"
                href={`/problems/${doc.id}`}
              >
                {doc.title}
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemsTable;
