


import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from "@phosphor-icons/react"
import { CheckBoxButton, Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage } from "./styles"
import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"


import { api } from "../../../services/api"


const schema = yup
    .object({
        name: yup.string().required("Type the product name"),
        price: yup.number().positive().required("Type the product price").typeError("Type the product price"),
        category: yup.object().required('Choose a category'),
        offer: yup.bool(),
    });


export function EditProducts() {

    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    const { state: { product },} = useLocation();

    const navigate = useNavigate()
 ;
    

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            setCategories(data)
        }
        loadCategories()
    }, [])


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const productFormData = new FormData();
        productFormData.append("name", data.name)
        productFormData.append("price", data.price * 100)
        productFormData.append("category_id", data.category.id)
        productFormData.append("offer", data.offer)
        productFormData.append("file", data.file[0])

        await toast.promise( api.put(`/products/${product.id}`, productFormData), {
            pending: "Editing product...",
            success: "The product was edited :)",
            error: "It did not work, try again",
        })
        setTimeout(() => {
            navigate("/admin/products")
        }, 2000)

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Name</Label>
                    <Input type="text" {...register("name")} defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Price</Label>
                    <Input type="number" {...register("price")} defaultValue={product.price / 100} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload >
                        <Image />
                        <input type="file"
                            {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value.target.files[0]?.name)
                                register("file").onChange(value);
                            }}
                        />
                        {fileName || "Upload a picture here"}
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>

                </InputGroup>

                <InputGroup>
                    <Label>Category</Label>
                    <Controller
                    defaultValue={product.category}
                        name="category"
                        control={control}
                        rules={{ required: "Choose a category" }}
                        render={({ field, fieldState }) => (
                            <>
                                <Select
                                    {...field}
                                    options={categories}
                                    getOptionLabel={(category) => category.name}
                                    getOptionValue={(category) => category.id}
                                    placeholder="Select a category"
                                    menuPortalTarget={document.body}
                                    defaultValue={product.category}
                                />
                                <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
                            </>
                        )}
                    />
                </InputGroup>

                <InputGroup>
                        <CheckBoxButton>
                            <input type="checkbox" defaultChecked={product.offer}
                            {...register("offer")}/>
                            <Label>Is this product on Sale?</Label>
                        </CheckBoxButton>
                </InputGroup>

                <SubmitButton>Edit Product</SubmitButton>
            </Form>
        </Container>
    )
}