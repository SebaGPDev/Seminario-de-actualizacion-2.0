export const Result = ({ matriz, text }) => {
  console.log(matriz);
  return (
    <>
      <div>
        <h4>{text}</h4>
        {/* creacion de tabla dinamica a partir del resultado del back */}
        <table className="table table-bordered border-primary">
          <tbody>
            {matriz.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
