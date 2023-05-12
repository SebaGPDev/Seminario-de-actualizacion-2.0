import React from "react";

export const Table = ({ rows, columns, name }) => {
  const data = Array.from({ length: rows }, () =>
    Array.from({ length: columns })
  );
 

  return (
    <table name={name}>
      {data.map((row, rowIndex) => (
        <tr key={name + rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={name + cellIndex}>
              <input type="number" name={name} />
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
