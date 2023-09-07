import React, { useState, useEffect } from "react";
import closeIconDark from "../../assets/images/close-icon-dark.svg";

interface EditContactProps {
  employeeId: number | null;
  onSubmit: () => void;
  closeModal: () => void;
}

const EditContact: React.FC<EditContactProps> = ({
  employeeId,
  onSubmit,
  closeModal,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const fetchContactById = async (id: number | null) => {
    try {
      // const { name, email, status } = response.data;
      setName("Rajesh Biswas");
      setEmail("rjbiswas@gmail.com");
      setStatus("active");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContactById(employeeId);
  }, [employeeId]);

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
        name,
        email,
        status,
      };
      // handle update logic here

      console.log("Update successful");
      closeModal();
    } catch (error) {
      console.log("Update failed:", error);
    }
    onSubmit();
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
          <h1 className="text-[20px] text-[#7B45E5] font-semibold leading-[10.24px] pb-[33px]">
            Update Contact Details
          </h1>
          <div>
            <ul className="flex flex-col gap-[16px]">
              <li className="flex items-center gap-[15px]">
                <div className="flex flex-col pb-[37px]">
                  <label
                    htmlFor="name"
                    className="text-[#666666] text-[14px] font-semibold pb-[11px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-box-shadow border border-[#D7D7D7] rounded-[5px] h-[38px]"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="flex flex-col pb-[37px]">
                  <label
                    htmlFor="email"
                    className="text-[#666666] text-[14px] font-semibold pb-[11px]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input-box-shadow border border-[#D7D7D7] rounded-[5px] h-[38px]"
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
                    className="input-box-shadow border border-[#D7D7D7] rounded-[5px] h-[38px]"
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
              className="text-white text-[16px] font-semibold leading-[24px] bg-[#4D3AC1] w-full rounded-[4px] py-[7px] uppercase"
            >
              Cancel
            </button>
            <button
              className="text-white text-[16px] font-semibold leading-[24px] bg-[#4D3AC1] w-full rounded-[4px] py-[7px] uppercase"
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
