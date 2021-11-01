import { Table, Card, Space, Button, Modal, message } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Showgrid() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Tags',
      dataIndex: 'address',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => {
            showModals(record.key);
          }}><EditOutlined /></Button>
          <Button type="Dangger" danger ghost onClick={() => {
            showModal(record.key);
          }}><DeleteOutlined /></Button>

        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];


  const showModal = (id) => {
    setisKeyDelete(id)
    setIsModalVisible(true);
  };
  const showModals = (id) => {
    setisKeyDelete(id)
    setIsModalVisible2(true);
  };

  const handleOk = () => {
    message.info("Xoá thành công");
    setIsModalVisible(false);
  };
  const EditUser = () => {
    message.info("Sửa thành công");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isKeyDelete, setisKeyDelete] = useState();

  return (<Card>
    <Table columns={columns} dataSource={data} />
    <Modal title="Thông báo xác nhận!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <h2> Bạn có muốn xoá! {isKeyDelete} </h2>
    </Modal>
    <Modal title="Thông báo xác nhận!" visible={isModalVisible2} onOk={handleOk} onCancel={handleCancel}>
      <h2> Bạn có muốn sửa! {isKeyDelete}</h2>
    </Modal>
  </Card>

  )
}