import DisplayTable from "component/UI/Table/DisplayTable";
import { useState } from "react";
import MockData from "data/mockData.json";
import usePaginate from "hooks/usePaginate";
import Pagination from "component/UI/Pagination";
import CustomTable from "component/UI/Table/CustomTable";
import {
  TableColumn,
  TableHead,
  TableRow,
} from "component/UI/Table/InteractiveTable";

const TableDesign = () => {
  const [showCount, setShowCount] = useState(20);
  const [currentItems, pageCount, handlePageClick, pageNumber, dataLength] =
    usePaginate({
      data: MockData,
      count: showCount,
    });

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Display Only Table</h1>
        <div className="border rounded-sm p-10">
          <DisplayTable
            header={[
              "ID",
              "First name",
              "Last name",
              "Email",
              "Gender",
              "IP Address",
            ]}
            data={currentItems}
          />
          <div className="mt-4">
            <Pagination
              pageCount={pageCount}
              currentCount={showCount}
              pageNumber={pageNumber}
              handlePageClick={handlePageClick}
              total={dataLength}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Custom Only Table</h1>
        <div className="border rounded-sm p-10">
          <CustomTable
            header={
              <>
                <TableHead>ID</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>IP Address</TableHead>
              </>
            }
          >
            {currentItems?.map((val) => {
              return (
                <TableRow key={val.id}>
                  <TableColumn>{val.id}</TableColumn>
                  <TableColumn>{val.first_name}</TableColumn>
                  <TableColumn>{val.last_name}</TableColumn>
                  <TableColumn>{val.email}</TableColumn>
                  <TableColumn>{val.gender}</TableColumn>
                  <TableColumn>{val.ip_address}</TableColumn>
                </TableRow>
              );
            })}
          </CustomTable>
          <div className="mt-4">
            <Pagination
              pageCount={pageCount}
              currentCount={showCount}
              pageNumber={pageNumber}
              handlePageClick={handlePageClick}
              total={dataLength}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableDesign;
