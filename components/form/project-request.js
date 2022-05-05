import React, { useState } from "react";
import { Formik, useField, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { AiOutlineLeft, AiFillCheckCircle } from "react-icons/ai";

//TODO clean up this file as it is a mess

export default function Test({ setModalOpen, props }) {
  const [formSent, setFormSent] = useState(false);
  const [formName, setFormName] = useState("");

  const { public_key, service_id, private_key, template_id } = props;
  console.table(props);
  const sendEmail = (values) => {
    emailjs.send(service_id, template_id, values, public_key).then(
      (result) => {
        setFormName(values.name);
        setFormSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const Services = ["Webbutveckling", "Marknadsföring/SEO", "Annan Tjänst"];
  const Budgets = [
    "10k - 20k SEK",
    "20k - 30k SEK",
    "40k - 50k SEK",
    "Mer än 50k SEK",
  ];
  const StepWrapper = ({ children, title }) => {
    return (
      <div className="flex flex-col items-center w-full h-full max-w-md mx-auto space-y-5">
        <h2 className="mb-5 text-3xl font-semibold text-center">{title}</h2>
        {children}
      </div>
    );
  };
  return (
    <>
      {!formSent ? (
        <FormikStepper
          initialValues={{
            service: "",
            budget: "",
            message: "",
            name: "",
            email: "",
          }}
          onSubmit={() => {}}
          setModalOpen={setModalOpen}
          sendEmail={sendEmail}
        >
          {/* Service step */}
          <StepWrapper title="Vilken tjänst behöver du?">
            {Services.map((service, index) => {
              return (
                <>
                  <div key={index} className="relative w-full">
                    {" "}
                    <Field
                      class="sr-only peer"
                      type="radio"
                      value={service}
                      name="service"
                      id={service}
                    />
                    <label
                      class="flex p-5 bg-light-grey  border-mid-grey border-2 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent font-medium text-black-2-hover"
                      for={service}
                    >
                      {service}
                    </label>
                    <div class="absolute  top-1/2 right-5  -translate-y-1/2 w-6 h-6   bg-mid-grey/50 rounded-full peer-checked:bg-white  flex justify-center items-center text-mid-grey/0 peer-checked:text-blue-500">
                      <AiFillCheckCircle
                        size={26}
                        className=" peer-checked:block"
                      />
                    </div>
                  </div>
                </>
              );
            })}
            <div className="flex items-center justify-center w-full h-10 font-medium text-center text-red-500">
              <ErrorMessage name="service" />
            </div>
          </StepWrapper>
          {/* Budget step */}
          <StepWrapper
            title="Vad är din budget?
"
          >
            {Budgets.map((budget, index) => {
              return (
                <>
                  <div key={index} className="relative w-full">
                    <Field
                      class="sr-only peer"
                      type="radio"
                      value={budget}
                      name="budget"
                      id={budget}
                    />
                    <label
                      class="flex p-5 bg-light-grey border-mid-grey border-2 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent font-medium text-black-2-hover"
                      for={budget}
                    >
                      {budget}
                    </label>
                    <div class="absolute  top-1/2 right-5  -translate-y-1/2 w-6 h-6   bg-mid-grey/50 rounded-full peer-checked:bg-white  flex justify-center items-center text-mid-grey/0 peer-checked:text-blue-500">
                      <AiFillCheckCircle
                        size={26}
                        className=" peer-checked:block"
                      />
                    </div>
                  </div>
                </>
              );
            })}
            <div className="flex items-center justify-center w-full h-10 font-medium text-center text-red-500">
              <ErrorMessage name="budget" />
            </div>
          </StepWrapper>
          {/* information Step */}
          <StepWrapper title="Ange detaljer om ditt projekt">
            <Field
              rows="8"
              className="w-full px-5 py-5 font-medium rounded-lg text-black-2-hover focus:outline-none focus:border-none focus:ring-0 bg-light-grey border border-mid-grey/50"
              name="message"
              label="Message"
              type="text"
              as="textarea"
            />
            <div className="flex items-center justify-center w-full h-10 font-medium text-center text-red-500">
              <ErrorMessage name="message" />
            </div>
          </StepWrapper>
          <StepWrapper
            title="Hur kan vi kontakta dig?
"
          >
            <Field
              className="w-full p-3.5  font-medium border-2 rounded-lg cursor-pointer bg-light-grey border-mid-grey focus:outline-none text-black-2-hover"
              name="name"
              placeholder="Ditt Namn"
              label="Name"
              type="text"
            />
            <Field
              className="w-full p-3.5 appearance-none font-medium border-2 rounded-lg cursor-pointer bg-light-grey border-mid-grey focus:outline-none text-black-2-hover"
              name="email"
              placeholder="Din email"
              label="Email"
              type="email"
            />
            <Field
              className="w-full p-3.5 appearance-none font-medium border-2 rounded-lg cursor-pointer bg-light-grey border-mid-grey focus:outline-none text-black-2-hover"
              name="website"
              placeholder="Webbadress: (valfritt)"
              label="Website"
              type="text"
            />
            <div className="flex items-center justify-center w-full h-10 font-medium text-center text-red-500 appearance-none">
              <ErrorMessage name="name" />
              <ErrorMessage name="email" />
              <ErrorMessage name="website" />
            </div>
          </StepWrapper>
        </FormikStepper>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-3 text-black2">
          <span class="text-xl font-semibold text-dark-grey">Bekräftelse</span>
          <h3 className="text-3xl font-semibold text-center">
            Tack för din förfrågan <br />
            {formName}
          </h3>
          <p>Vi återkommer till dig så snart som möjligt</p>
          <button className="text-blue-500" onClick={() => setModalOpen(false)}>
            Stänga
          </button>
        </div>
      )}
    </>
  );
}

const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [currentStep, setCurrentStep] = useState(0);
  const currentChild = childrenArray[currentStep];
  const [formData, setFormData] = useState(props.initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function isLastStep() {
    return currentStep === childrenArray.length - 1;
  }

  // validation schema
  const serviceValidation = Yup.object().shape({
    service: Yup.string().required("Välj en tjänst"),
  });
  const budgetValidation = Yup.object().shape({
    budget: Yup.string().required("Välj en budget"),
  });
  const messageValidation = Yup.object().shape({
    message: Yup.string()
      .required("Ange projektinformation")
      .min(25, "Mer information behövs"),
  });
  const contactValidation = Yup.object().shape({
    email: Yup.string().email("Ogiltigt e-postformat").required("e-post krävs"),
    name: Yup.string().required("Namn krävs"),
    website: Yup.string(),
  });
  const validationSchemaArray = [
    serviceValidation,
    budgetValidation,
    messageValidation,
    contactValidation,
  ];

  return (
    <>
      <div className="flex flex-col items-center w-full h-full justify-cente ">
        {/* form top */}
        <div className="flex items-center justify-between w-full h-16 px-10 border-b border-mid-grey/80">
          {/* back step */}
          <div className="flex items-center">
            <>
              <button
                className={`${
                  currentStep === 0 && "invisible"
                } text-black hover:text-black-2-hover transition-all flex items-center space-x-3`}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                <AiOutlineLeft size={16} /> Tillbaka
              </button>
            </>
          </div>
          {/* step indicator  */}
          <div className="flex items-center space-x-1">
            {childrenArray.map((step, index) => (
              <div
                key={index}
                className={`${
                  index === currentStep || index < currentStep
                    ? "bg-blue-500"
                    : "bg-mid-grey/80"
                } text-sm transition-all font-medium h-1 w-[20px] rounded`}
              ></div>
            ))}
          </div>
          {/* close modal button */}
          <div
            onClick={() => props.setModalOpen(false)}
            className="flex items-center text-black transition-all cursor-pointer hover:text-black-2-hover"
          >
            Avbryt
          </div>
        </div>
        {/* form body  */}
        <div className="flex flex-col w-full h-full p-10">
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={validationSchemaArray[currentStep]}
            {...props}
            onSubmit={async (values, helpers) => {
              if (isLastStep()) {
                await props.onSubmit(values, helpers);
                props.sendEmail(values);
                setIsSubmitting(true);
              } else {
                setCurrentStep(() => currentStep + 1);
                helpers.setTouched({});
              }
            }}
          >
            <Form
              className="flex flex-col items-center justify-between w-full h-full"
              autoComplete="off"
            >
              <div className="w-full mt-8">{currentChild}</div>
              <button
                className="px-10 py-3 mt-auto font-semibold text-white bg-blue-500 rounded min-w-[150px] text-center"
                type="submit"
              >
                {isSubmitting
                  ? "Skickar..."
                  : isLastStep()
                  ? "Skicka"
                  : "Nästa"}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
