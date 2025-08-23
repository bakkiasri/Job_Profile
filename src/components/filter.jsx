import React, { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Popup({ setOpen }) {
  const [date, setDate] = useState("");

  // Yup schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    location: Yup.string().required("Location is required"),
    jobType: Yup.string().required("Job Type is required"),
    salaryMin: Yup.number()
      .typeError("Enter a valid number")
      .required("Min Salary is required"),
    salaryMax: Yup.number()
      .typeError("Enter a valid number")
      .required("Max Salary is required")
      .moreThan(Yup.ref("salaryMin"), "Max must be greater than Min"),
    deadline: Yup.date().required("Deadline is required"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Job description is required"),
  });

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      {/* Desktop / Tablet Popup */}
      <div className="hidden sm:block flex-row bg-white rounded-2xl shadow-xl p-6 relative animate-fadeIn">
        <h2 className="text-center pb-0 lg:pb-4 text-4xl font-semibold mb-4">
          Create A Job
        </h2>
        <FormFields
          validationSchema={validationSchema}
          setDate={setDate}
          date={date}
        />

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 cursor-pointer right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>

      {/* Mobile Full Page */}
      <div className="block sm:hidden w-full h-full bg-white p-6 relative overflow-y-auto animate-fadeIn">
        <h2 className="text-center pb-0 text-3xl font-semibold mb-4">
          Create A Job
        </h2>
        <FormFields
          validationSchema={validationSchema}
          setDate={setDate}
          date={date}
        />

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 cursor-pointer right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function FormFields({ validationSchema, date, setDate }) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        location: "",
        jobType: "",
        salaryMin: "",
        salaryMax: "",
        deadline: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form submitted", values);
      }}
    >
      {({ handleSubmit }) => (
        <Form className="space-y-5 ps-0 me-5" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#BCBCBC] text-sm font-medium mb-1">
                First Name
              </label>
              <Field
                type="text"
                name="firstName"
                className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                placeholder="Enter your first name"
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <label className="block text-[#BCBCBC] text-sm font-medium mb-1">
                Last Name
              </label>
              <Field
                type="text"
                name="lastName"
                className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                placeholder="Enter your last name"
              />
              <ErrorMessage
                name="lastName"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>

          {/* Location & Job Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#BCBCBC] text-sm font-medium mb-1">
                Location
              </label>
              <Field
                as="select"
                name="location"
                className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              >
                <option value="">Choose preferred location</option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Trichy">Trichy</option>
              </Field>
              <ErrorMessage
                name="location"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <label className="block text-[#BCBCBC] text-sm font-medium mb-1">
                Job Type
              </label>
              <Field
                as="select"
                name="jobType"
                className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </Field>
              <ErrorMessage
                name="jobType"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>

          {/* Salary & Deadline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#BCBCBC] text-sm font-medium mb-1">
                Salary
              </label>
              <div className="flex gap-5">
                <Field
                  type="text"
                  name="salaryMin"
                  className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                  placeholder="0"
                />
                <Field
                  type="text"
                  name="salaryMax"
                  className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                  placeholder="12,00,000"
                />
              </div>
              <ErrorMessage
                name="salaryMin"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
              <ErrorMessage
                name="salaryMax"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="relative">
              <label className="block text-[#BCBCBC] text-sm font-medium mb-1">
                Application deadline
              </label>
              <Field
                type="date"
                name="deadline"
                value={date}
                className="appearance-none w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              />
              <ErrorMessage
                name="deadline"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-[#BCBCBC] text-sm font-medium mb-1">
              Job description
            </label>
            <Field
              as="textarea"
              name="description"
              rows="4"
              className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              placeholder="Please share a description to let the candidate know more about the job role"
            />
            <ErrorMessage
              name="description"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="flex bg-transparent p-2 px-4 rounded-lg text-black border-1 border-black"
            >
              <p>Save Draft</p>
              <FaAnglesDown className="pt-2 h-5 w-5" />
            </button>
            <button
              type="submit"
              className="flex bg-[#00AAFF] p-2 px-4 rounded-lg text-white"
            >
              <p>Publish</p>
              <FaAngleDoubleRight className="pt-2 h-5 w-5" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Popup;
