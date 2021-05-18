import { Button, Table, Form } from "antd"
import { DEFAULT_LIMIT } from "constant";
import { useFetchWithPagination } from "hooks/useFetchWithPagination";
import { usePost } from "hooks/usePost";
import { IEmployee } from "interface";
import { useCallback, useEffect, useState } from "react";
import AddNewForm from "./components/AddNewForm";
import columns from "./renderColumns";

const { useForm } = Form;

function Employee() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAddNew, setIsAddNew] = useState<boolean>(false);
  const [employeeForm] = useForm();
  const { data, isLoading, total, fetchData } = useFetchWithPagination<IEmployee>({ endpoint: "employee", page: currentPage });
  const { postData, status } = usePost();

  useEffect(function () {
    if (status === 201) {
      setIsAddNew(false);
      fetchData();
      employeeForm.resetFields();
    }
  }, [status, setIsAddNew, employeeForm, fetchData]);

  const handleChange = useCallback(function (config) {
    const { current } = config;
    setCurrentPage(current);
  }, []);

  const handleSubmit = useCallback(function () {
    const { user } = employeeForm.getFieldsValue();
    postData("employee", user);
  }, [employeeForm, postData]);

  const toggleAddNew = useCallback(function () {
    setIsAddNew(value => !value);
  }, [])

  return (
    <div className="table-employee">
      <h1 className="title">Employees</h1>
      <Table
        dataSource={data}
        columns={columns}
        loading={isLoading}
        onChange={handleChange}
        pagination={{ pageSize: DEFAULT_LIMIT, total }}
        rowKey="id"
      />
      {isAddNew && <AddNewForm onFinish={handleSubmit} employeeForm={employeeForm} />}
      <div className="button-wrapper">
        <Button href='/counter'>Counter</Button>
        <Button onClick={toggleAddNew}>Add new</Button>
      </div>
    </div>
  );
};

export default Employee;