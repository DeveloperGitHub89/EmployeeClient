import * as Yup from 'yup';
// package name aliasing 
export const registrationSchema=Yup.object().shape({
    empId: Yup.number().typeError('Only numbers are allowed').required("Employee ID is required").positive("Employee Id should be +ve value"),
    name: Yup.string().required("Name is required").min(3,"Minimum 3 characters required"),
    phone: Yup.string().required("Phone is required").length(10,"10 digits required "),
    salary: Yup.number().required("Salary is required")
});
