import React, { useState } from "react";
import DataTable from "react-data-table-component";
import MyDataTable from "./MyDataTable/myDataTable";

interface CustomerDetail {
  brand: string;
  brand_type: string;
  product_bought: string;
  date_arrived: string;
  date_purchased: string;
}

interface Customer {
  name: string;
  id: number;
  number: string;
  details: CustomerDetail[];
}

interface Data {
  success: string;
  pay_type: string;
  customers: Customer[];
}

const initialData: Data = {
  success: "true",
  pay_type: "cash",
  customers: [
    // ... JSON data here
    {
      name: "John Doe",
      id: 1,
      number: "123456",
      details: [
        {
          brand: "Nike",
          brand_type: "Sportswear",
          product_bought: "T-shirt",
          date_arrived: "2023-06-01",
          date_purchased: "2023-06-05",
        },
        {
          brand: "Skechers",
          brand_type: "Sportswear",
          product_bought: "Sneakers",
          date_arrived: "2023-06-01",
          date_purchased: "2023-06-05",
        },
      ],
    },
    {
      name: "Jane Smith",
      id: 2,
      number: "654321",
      details: [
        {
          brand: "Adidas",
          brand_type: "Sportswear",
          product_bought: "Shorts",
          date_arrived: "2023-06-03",
          date_purchased: "2023-06-07",
        },
      ],
    },
    {
      name: "Michael Johnson",
      id: 3,
      number: "987654",
      details: [
        {
          brand: "Zara",
          brand_type: "Casual",
          product_bought: "Jeans",
          date_arrived: "2023-06-02",
          date_purchased: "2023-06-06",
        },
        {
          brand: "Dolche & Gabbana",
          brand_type: "Casual",
          product_bought: "Shirt",
          date_arrived: "2023-06-02",
          date_purchased: "2023-06-06",
        },
        {
          brand: "Levi's",
          brand_type: "Casual",
          product_bought: "Trousers",
          date_arrived: "2023-06-02",
          date_purchased: "2023-06-06",
        },
      ],
    },
    {
      name: "Emily Davis",
      id: 4,
      number: "789012",
      details: [
        {
          brand: "H&M",
          brand_type: "Casual",
          product_bought: "Shirt",
          date_arrived: "2023-06-04",
          date_purchased: "2023-06-08",
        },
        {
          brand: "Van Heusen",
          brand_type: "Casual",
          product_bought: "Lady's Bag",
          date_arrived: "2023-06-04",
          date_purchased: "2023-06-08",
        },
      ],
    },
    {
      name: "David Thompson",
      id: 5,
      number: "345678",
      details: [
        {
          brand: "Puma",
          brand_type: "Sportswear",
          product_bought: "Sneakers",
          date_arrived: "2023-06-05",
          date_purchased: "2023-06-10",
        },
        {
          brand: "Puma",
          brand_type: "Sportswear",
          product_bought: "Shirt",
          date_arrived: "2023-06-05",
          date_purchased: "2023-06-10",
        },
        {
          brand: "Puma",
          brand_type: "Sportswear",
          product_bought: "Shorts",
          date_arrived: "2023-06-05",
          date_purchased: "2023-06-10",
        },
        {
          brand: "Puma",
          brand_type: "Sportswear",
          product_bought: "T-shirt",
          date_arrived: "2023-06-05",
          date_purchased: "2023-06-10",
        },
        {
          brand: "Puma",
          brand_type: "Sportswear",
          product_bought: "Socks",
          date_arrived: "2023-06-05",
          date_purchased: "2023-06-10",
        },
      ],
    },
  ],
};

const App: React.FC = () => {
  const [data, setData] = useState<Data>(initialData);
  const [editRowName, setEditRowName] = useState<string | null>(null);

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Brand",
      selector: (row: any) => row.details[0].brand,
      sortable: true,
    },
    {
      name: "Product Bought",
      selector: (row: any) => row.details[0].product_bought,
      sortable: true,
    },
    {
      name: "Date Arrived",
      selector: (row: any) => row.details[0].date_arrived,
      sortable: true,
    },
    {
      name: "Date Purchased",
      selector: (row: any) => row.details[0].date_purchased,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row: any) => (
        <>
          {editRowName === row.name ? (
            <>
              <button onClick={() => handleSave(row)}>Save</button>
              <button onClick={() => handleCancelEdit()}>Cancel</button>
            </>
          ) : (
            <button onClick={() => handleEdit(row)}>Edit</button>
          )}
          <button onClick={() => handleDelete(row)}>Delete</button>
        </>
      ),
      button: true,
    },
  ];

  const handleEdit = (row: any) => {
    setEditRowName(row.name);
  };

  const handleSave = (row: any) => {
    // Handle save functionality here
    console.log("Save:", row);
    setEditRowName(null);
  };

  const handleCancelEdit = () => {
    setEditRowName(null);
  };

  const handleDelete = (row: any) => {
    // Handle delete functionality here
    const updatedCustomers = data.customers.filter(
      (customer) => customer.id !== row.id
    );
    setData({ ...data, customers: updatedCustomers });
  };

  return (
    <>
      {/* <div className="App">
        <DataTable
          title="Customer Details"
          columns={columns}
          data={data.customers}
        />
      </div> */}
      <br />
      <h3>Country Data</h3>
      <MyDataTable />
    </>
  );
};

export default App;
