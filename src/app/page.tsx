"use client";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Content from "@/modules/main/layouts/Content.layout";
import Table from "../modules/main/components/table/table.component";

export default function Home() {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        id: "name",
        Header: "Name",
        accessor: "name",
      },
      {
        id: "age",
        Header: "Age",
        accessor: "age",
      },
      {
        id: "email",
        Header: "Email",
        accessor: "email",
      },
    ],
    [],
  );

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.ganjoor.net/api/ganjoor/poets");
      setData(result.data);
      console.log("salam chetori", data);
    })();
  }, []);

  return (
    <>
      <Content>
        <h1 className="text-center pt-6">This is Home page</h1>

        <Table columns={columns} data={data} />
      </Content>
    </>
  );
}
