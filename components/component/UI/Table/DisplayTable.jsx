import React, { ReactNode } from "react";

// interface IProps<T> {
//   data: T[];
//   header: string[];
// }

const DisplayTable = ({ data = [], header }) => {
  const columns = Object.keys(Object(data[0]) || []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-neutral-200 text-sm">
        <thead>
          <tr>
            {header?.map((column, idx) => (
              <th
                key={idx}
                className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-neutral-900"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data?.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-200">
              {columns?.map((column, idx) => (
                <td
                  key={idx}
                  className="whitespace-nowrap px-4 py-2.5 first-of-type:font-semibold text-neutral-900"
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
