import * as yup from "yup";

const phoneRegExp = /^$|((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g;
const validateSchema = yup.object().shape({
  name: yup.string().trim().required(),
  dob: yup.date().required("Required").nullable(),
  gender: yup.string().trim().required(),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .nullable(),
  govIdType: yup.string().trim(),

  govIdValue: yup
    .string()
    .nullable()
    .when("govIdType", {
      is: "aadhar",
      then: () =>
        yup.string().min(12, "Aadhar Must Contain 12 Characters").required("")
    })
    .when("govIdType", {
      is: "pan",
      then: () =>
        yup.string().min(10, "PAN Must Contain 10 Characters").required("")
    }),

  email: yup.string().email("Not a proper email"),
  emrgencyContactNo: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .nullable(),
  guardianLabel: yup.string().trim(),
  guardianName: yup.string().trim(),
  address: yup.string().trim(),
  state: yup.string().trim(),
  city: yup.string().trim(),
  country: yup.string().trim(),
  occupation: yup.string().trim(),
  religion: yup.string().trim(),
  maritalStatus: yup.string().trim(),
  bloodGroup: yup.string().trim(),
  nationality: yup.string().trim()
});

export default validateSchema;
