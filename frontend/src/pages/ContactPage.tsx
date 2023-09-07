import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import AddContactForm from "../components/modals/AddContact";
import EditContact from "../components/modals/EditContact";

interface Contact {
  name: string;
  profile: string;
  email: string;
  status: string;
  id: number;
}

function ContactPage() {
  const [contactData, setContactData] = useState<Contact[]>([
    {
      name: "Rajesh", 
      profile: "", 
      email: "rjbiswas@gmail.com", 
      status: "active", 
      id: 1
    },
    {
      name: "Biswas", 
      profile: "", 
      email: "biswas@gmail.com", 
      status: "active", 
      id: 2
    },
    {
      name: "Rahul", 
      profile: "", 
      email: "rahul@gmail.com", 
      status: "inactive", 
      id: 3
    },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentContactId, setCurrentContactId] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      // get all data logic here
      // setTimeout(() => {
      //   console.log("Loading... data")
      // }, 3000);
      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
    setIsAddModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const editContactModal = (id: number) => {
    setCurrentContactId(id);
    setIsEditModalOpen(true);
  };

  const deleteContact = async (id: number) => {
    try {
      // delete logic here
      // get the all contacts and find the specific contact and remove that and set the new list to "setContactData"
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id: number) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this employee? It can't be undone."
    );
    if (isConfirmed) {
      deleteContact(id);
      console.log("Item deleted.");
    } else {
      console.log("Delete canceled.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* AddContact and EditContact components go here */}
      {isAddModalOpen && (
        <AddContactForm onSubmit={fetchData} closeModal={handleCloseModal} />
      )}
      {isEditModalOpen && (
        <EditContact
          employeeId={currentContactId}
          onSubmit={fetchData}
          closeModal={handleCloseModal}
        />
      )}

      <Layout>

        <main className="px-[100px] pt-[30px]">
          <div className="flex justify-between items-center mt-2 px-8">
            <h2 className="text-2xl font-bold">Contact List</h2>
            <button
              type="button"
              className="bg-[#F0564F] hover:bg-[#fb6e66] text-white font-bold py-2 px-4 rounded shadow-md"
              onClick={() => setIsAddModalOpen(true)}
            >
              Add New Contact
            </button>
          </div>
          <hr className="my-4" />
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">Profile</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email Address</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map(({ name, profile, email, status, id }, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-100">
                  <td className="px-6 py-4">
                    <img
                      src={`${
                        profile
                          ? `http://127.0.0.1:8000/storage/${profile}`
                          : `https://i.pravatar.cc/150?u=${email}`
                      }`}
                      className="w-10 h-10 rounded-full"
                      alt="User avatar"
                    />
                  </td>
                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4">{email}</td>
                  <td className="px-6 py-4">
                    {status === "active" ? (
                      <span className="badge bg-green-500 text-white px-2 py-1 rounded-md">
                        Active
                      </span>
                    ) : (
                      <span className="badge bg-red-500 text-white px-2 py-1 rounded-md">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md mr-2"
                      onClick={() => editContactModal(id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </Layout>
    </>
  );
}

export default ContactPage;
