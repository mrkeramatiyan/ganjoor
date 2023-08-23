import { useTable, usePagination } from "react-table";

interface TableProps {
  columns: any[];
  data: any[];
}

import { useEffect } from "react";

export default function Table({ columns, data }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination,
  );

  const tableProps = getTableProps();
  const tableBodyProps = getTableBodyProps();

  return (
    <div role={tableProps.role} style={tableProps.style}>
      <div role={tableBodyProps.role}>
        {page.map((row) => {
          prepareRow(row);
          const rowProps = row.getRowProps();
          return (
            <div key={rowProps.key}>
              {row.cells.map((cell) => {
                const cellProps = cell.getCellProps();
                console.log(cell);
                return <div key={cellProps.key}>{cell.render("Cell")}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
// export default function Table({ columns, data }: TableProps) {
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({
//       columns,
//       data,
//     });

//   const tableProps = getTableProps();
//   const tableBodyProps = getTableBodyProps();

//   return (
//     <div role={tableProps.role} style={tableProps.style}>
//       <div role={tableBodyProps.role}>
//         {rows.map((row) => {
//           prepareRow(row);
//           const rowProps = row.getRowProps();
//           return (
//             <div key={rowProps.key}>
//               {row.cells.map((cell) => {
//                 const cellProps = cell.getCellProps();
//                 console.log(cell);
//                 return <div key={cellProps.key}>{cell.render("Cell")}</div>;
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
