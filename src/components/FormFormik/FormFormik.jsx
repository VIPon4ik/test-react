import { Formik, Form, Field, ErrorMessage } from "formik";
import { Label, Error } from "./FormFormik.styled";
import * as yup from "yup";

const products = ["sofa", "dress", "computer"];

const schema = yup.object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    product: yup.mixed().oneOf(products).required(),
    title: yup.string().min(3).required(),
    review: yup.string().min(3).required(),
    rating: yup.number().min(1).max(10).required(),
    check: yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});

const initialValues = {
    name: "",
    email: "",
    product: "",
    title: "",
    review: "",
    rating: "",
    check: false,
};

const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
};

export const FormFormik = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <Form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "300px",
                }}
            >
                <Label htmlFor="name">
                    Full name
                    <Field name="name" type="text" placeholder="Full name" />
                </Label>

                <ErrorMessage
                    name="name"
                    component="div"
                    style={{ color: "red" }}
                />
                <Label htmlFor="email">
                    Email address
                    <Field
                        name="email"
                        type="text"
                        placeholder="email address"
                    />
                </Label>

                <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                />

                <Label htmlFor="product">
                    Product
                    <Field name="product" as="select">
                        <option>Select a product</option>
                        <option value="sofa">Sofa</option>
                        <option value="dress">Dress</option>
                        <option value="computer">Computer</option>
                    </Field>
                </Label>

                <ErrorMessage
                    name="product"
                    component="div"
                    style={{ color: "red" }}
                />

                <Label htmlFor="Title">
                    Title
                    <Field name="title" type="text" placeholder="Title" />
                </Label>

                <ErrorMessage
                    name="title"
                    component="div"
                    style={{ color: "red" }}
                />

                <Label htmlFor="review">
                    Review
                    <Field name="review" as="textarea" placeholder="Review" />
                </Label>

                <ErrorMessage
                    name="review"
                    component="div"
                    style={{ color: "red" }}
                />

                <Label htmlFor="rating">
                    Rating
                    <Field name="rating" type="number" placeholder="Rating" />
                </Label>

                <ErrorMessage
                    name="rating"
                    component="div"
                    style={{ color: "red" }}
                />

                <Label htmlFor="check">
                    Would recommend
                    <Field type="checkbox" name="check" />
                </Label>

                <ErrorMessage
                    name="check"
                    component="div"
                    style={{ color: "red" }}
                />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
