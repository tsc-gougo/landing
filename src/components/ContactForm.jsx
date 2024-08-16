import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Input, RadioGroup, Radio, Checkbox } from "@nextui-org/react";

const apiEndpoint = "https://gougoai-web-api.azurewebsites.net/api/contact";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  businessType: "",
  businessRole: "",
  businessArea: "",
  country: "",
  hasPersonalInCountry: true,
  acceptTerms: false,
};

const validationSchema = yup.object({
  name: yup.string().trim().required("El Nombre es requerido"),
  email: yup
    .string()
    .trim()
    .email("Formato de correo electrónico invalido")
    .required("El Email es requerido"),
  phoneNumber: yup.string().trim(),
  businessType: yup.string().trim(),
  businessRole: yup.string().trim(),
  businessArea: yup.string().trim(),
  country: yup.string().trim(),
  hasPersonalInCountry: yup.boolean(),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "Debe aceptar los términos y condiciones"),
});

const ContractForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setSubmitting(true);

        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        // console.log(response);

        if (!response.ok) throw new Error("Falló la consulta.");

        setSuccessMessage(
          "Se ha enviado la información exitosamente. Pronto te estaremos contactando.",
        );
      } catch (error) {
        console.error(error);
        alert(
          "Lo sentimos, no se pudo enviar la información. Intenta nuevamente más tarde.",
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const onHasPersonalInCountryValueChange = (value) => {
    if (value === "true") formik.setFieldValue("hasPersonalInCountry", true);
    else formik.setFieldValue("hasPersonalInCountry", false);
  };

  const onAcceptTermsValueChange = (value) => {
    formik.setFieldValue("acceptTerms", value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col px-6 py-16 gap-y-6 rounded-3xl bg-sky-50 md:grow xl:px-16"
    >
      <p className="text-4xl text-center text-blue-800 font-bold">
        ¡Conversemos!
      </p>

      {successMessage ? (
        <>
          <p className="text-xl text-center xl:text-3x">{successMessage}</p>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-y-4">
            <Input
              id="name"
              name="name"
              type="text"
              label="Nombre"
              placeholder="¿Cómo te llamas?"
              size="sm"
              isRequired
              isClearable
              {...formik.getFieldProps("name")}
              onClear={() => formik.setFieldValue("name", "")}
              isInvalid={formik.touched.name && Boolean(formik.errors.name)}
              errorMessage={formik.touched.name && formik.errors.name}
            />

            <Input
              id="email"
              name="email"
              type="email"
              label="Correo electrónico"
              placeholder="Ingresa tu correo electrónico corporativo"
              size="sm"
              isRequired
              isClearable
              {...formik.getFieldProps("email")}
              onClear={() => formik.setFieldValue("email", "")}
              isInvalid={formik.touched.email && Boolean(formik.errors.email)}
              errorMessage={formik.touched.email && formik.errors.email}
            />

            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              label="Teléfono"
              placeholder="Ingresa tu número de teléfono"
              size="sm"
              isClearable
              {...formik.getFieldProps("phoneNumber")}
              onClear={() => formik.setFieldValue("phoneNumber", "")}
              isInvalid={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              errorMessage={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />

            <Input
              id="businessType"
              name="businessType"
              type="text"
              label="Tipo de empresa"
              placeholder="Indica el tipo de empresa"
              size="sm"
              isClearable
              {...formik.getFieldProps("businessType")}
              onClear={() => formik.setFieldValue("businessType", "")}
              isInvalid={
                formik.touched.businessType &&
                Boolean(formik.errors.businessType)
              }
              errorMessage={
                formik.touched.businessType && formik.errors.businessType
              }
            />

            <Input
              id="businessRole"
              name="businessRole"
              type="text"
              label="Rol en la empresa"
              placeholder="Indica tu rol en la empresa"
              size="sm"
              isClearable
              {...formik.getFieldProps("businessRole")}
              onClear={() => formik.setFieldValue("businessRole", "")}
              isInvalid={
                formik.touched.businessRole &&
                Boolean(formik.errors.businessRole)
              }
              errorMessage={
                formik.touched.businessRole && formik.errors.businessRole
              }
            />

            <Input
              id="businessArea"
              name="businessArea"
              type="text"
              label="Área de la empresa"
              placeholder="Indica el área de la empresa"
              size="sm"
              isClearable
              {...formik.getFieldProps("businessArea")}
              onClear={() => formik.setFieldValue("businessArea", "")}
              isInvalid={
                formik.touched.businessArea &&
                Boolean(formik.errors.businessArea)
              }
              errorMessage={
                formik.touched.businessArea && formik.errors.businessArea
              }
            />

            <Input
              id="country"
              name="country"
              type="text"
              label="País"
              placeholder="Indica el país"
              size="sm"
              isClearable
              {...formik.getFieldProps("country")}
              onClear={() => formik.setFieldValue("country", "")}
              isInvalid={
                formik.touched.country && Boolean(formik.errors.country)
              }
              errorMessage={formik.touched.country && formik.errors.country}
            />

            <RadioGroup
              id="hasPersonalInCountry"
              name="hasPersonalInCountry"
              label="Tengo personal en campo"
              size="sm"
              value={formik.values.hasPersonalInCountry ? "true" : "false"}
              onValueChange={onHasPersonalInCountryValueChange}
              orientation="horizontal"
              isInvalid={
                formik.touched.hasPersonalInCountry &&
                Boolean(formik.errors.hasPersonalInCountry)
              }
              errorMessage={
                formik.touched.hasPersonalInCountry &&
                formik.errors.hasPersonalInCountry
              }
            >
              <Radio value="true">Si</Radio>
              <Radio value="false">No</Radio>
            </RadioGroup>

            <Checkbox
              id="acceptTerms"
              name="acceptTerms"
              size="sm"
              value={formik.values.acceptTerms}
              onValueChange={onAcceptTermsValueChange}
              isInvalid={
                formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)
              }
            >
              Acepto los Términos y condiciones
            </Checkbox>
          </div>

          <button
            type="Submit"
            disabled={submitting}
            className="flex flex-row btn-primary mx-auto"
          >
            {submitting ? "Enviando información..." : "Enviar información"}
          </button>
        </>
      )}
    </form>
  );
};

export default ContractForm;
