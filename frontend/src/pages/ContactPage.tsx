import React, { useState } from "react";
import Layout from "../components/Layout";
import AddContactForm from "../components/modals/AddContact";
import EditContact from "../components/modals/EditContact";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { RootState } from "../redux/store/store";
import { removeContact } from "../redux/store/slices/ContactsSlice";

function ContactPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentContactId, setCurrentContactId] = useState<number | null>(null);
  const contactData = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

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
      dispatch(removeContact(id));
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

  return (
    <>
      {isAddModalOpen && <AddContactForm closeModal={handleCloseModal} />}
      {isEditModalOpen && (
        <EditContact
          contactId={currentContactId}
          closeModal={handleCloseModal}
        />
      )}

      <Layout>
        <section className="md:px-[50px] sm:mt-[30px]">
          <div className="flex justify-between items-center mt-2 px-8">
            <h2 className="sm:text-2xl text-xl font-bold">Contact List</h2>
            <button
              type="button"
              className="bg-[#F0564F] hover:bg-[#fb6e66] text-white font-bold py-2 px-4 rounded shadow-md"
              onClick={() => setIsAddModalOpen(true)}
            >
              Add New Contact
            </button>
          </div>
          <hr className="my-4" />
          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-2 sm:px-6 py-3 text-left">Profile</th>
                  <th className="px-2 sm:px-6 py-3 text-left">Name</th>
                  <th className="px-2 sm:px-6 py-3 text-left">Email Address</th>
                  <th className="px-2 sm:px-6 py-3 text-left">Status</th>
                  <th className="px-2 sm:px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map(({ name, email, status, id }, i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-100">
                    <td className="px-2 sm:px-6 py-4">
                      <img
                        src={`https://i.pravatar.cc/150?u=${email}`}
                        className="w-10 h-10 rounded-full"
                        alt="User avatar"
                      />
                    </td>
                    <td className="px-2 sm:px-6 py-4">{name}</td>
                    <td className="px-2 sm:px-6 py-4">{email}</td>
                    <td className="px-2 sm:px-6 py-4">
                      {status === "active" ? (
                        <div className="bg-[#F0FDF4] text-[#71A34A] border border-[#DAF4E3] rounded-md px-[8px] py-[4px] text-[14px] leading-[1rem] w-fit">
                          <span className="grid">
                            <span className="">active</span>
                          </span>
                        </div>
                      ) : (
                        <div className="bg-[#FEF2F2] text-[#DD2626] border border-[#FADDDD] rounded-md px-[8px] py-[4px] text-[14px] leading-[1rem] w-fit">
                          <span className="grid">
                            <span className="">inactive</span>
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-2 sm:px-6 py-4">
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
          </div>
        </section>
      </Layout>
    </>
  );
}

export default ContactPage;
