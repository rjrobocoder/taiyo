import React, { useState, useEffect } from "react";
import closeIconDark from "../../assets/images/close-icon-dark.svg";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { updateContact } from "../../redux/store/slices/ContactsSlice";

interface EditContactProps {
  contactId: number | null;
  closeModal: () => void;
}

const EditContact: React.FC<EditContactProps> = ({ contactId, closeModal }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const getContactById = async (id: number | null) => {
    try {
      const data = contacts?.filter((contact) => contact?.id === id);
      setId(data[0]?.id);
      setName(data[0]?.name);
      setEmail(data[0]?.email);
      setStatus(data[0]?.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactById(contactId);
  }, [contactId]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "status":
        setStatus(value);
        break;
      default:
        break;
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedContact = {
        id: id,
        name: name,
        email: email,
        status: status,
      };

      dispatch(updateContact(updatedContact));

      console.log("Update successful");
      closeModal();
    } catch (error) {
      console.log("Update failed:", error);
    }
  };

  return (
    <div className="bg-[#1a1c1d96] h-screen w-full absolute top-0 z-[22] flex items-center justify-center">
      <div className="relative w-[399px] bg-white rounded-[7px] px-[64px] py-[34px]">
        <div className="absolute top-[27px] right-[30px]" title="close">
          <button type="button" onClick={closeModal}>
            <img src={closeIconDark} height={17} width={17} alt="close" />
          </button>
        </div>
        <div>
          <h1 className="text-[20px] text-[#F0564F] font-semibold leading-[10.24px] pb-[33px]">
            Update Contact Details
          </h1>
          <div>
            <ul className="flex flex-col gap-[16px]">
              <li className="flex items-center">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="name"
                    className="text-[#666666] text-[14px] font-semibold pb-[11px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-box-shadow border border-[#D7D7D7] rounded-[5px] h-[38px] px-[8px]"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="text-[#666666] text-[14px] font-semibold pb-[11px]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input-box-shadow border border-[#D7D7D7] rounded-[5px] h-[38px] px-[8px]"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="flex flex-col pb-[37px]">
                  <label
                    htmlFor="status"
                    className="text-[#666666] text-[14px] font-semibold pb-[11px]"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    className="input-box-shadow border border-[#D7D7D7] rounded-[5px] h-[38px] px-[8px]"
                    name="status"
                    value={status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-[50px] flex gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="text-[#6f6f6f] text-[16px] font-semibold leading-[24px] bg-[#bcbcbc] w-full rounded-[4px] py-[7px] uppercase"
            >
              Cancel
            </button>
            <button
              className="text-white text-[16px] font-semibold leading-[24px] bg-[#F0564F] hover:bg-[#fb6e66] w-full rounded-[4px] py-[7px] uppercase"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
