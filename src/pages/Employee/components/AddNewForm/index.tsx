import { Input, Form, Button, FormInstance } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

type Props = {
  onFinish: () => void,
  employeeForm: FormInstance,
}

function AddNewForm(props: Props) {
  const { onFinish, employeeForm } = props;

  return (
    <Form {...layout} form={employeeForm} onFinish={onFinish}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true, message: "Name is required!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true, message: "Email is required!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'position']} label="Position" rules={[{ required: true, message: "Position is required!" }]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddNewForm;