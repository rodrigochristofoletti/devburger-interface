import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


import { Container, LeftContainer, RightContainer, Form, InputContainer, Link, Title  } from "./styles";
import Logo from "../../assets/Logo.svg";

import {Button} from "../../components/Button"


export function SignUp() {
const navigate = useNavigate();
  const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'The password does not match').required('Check your password'),
  })
  .required();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => 
    {
      try {
        const {status} = 
          await api.post('/users', {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        {
          validateStatus: () => true,
        });
          
        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate('/login')
          }, 2000);
          toast.success('Thanks for signing up :)')
        } else if ( status === 400 || status === 409) {
          toast.error('Email already exists')
        } else {
          throw new Error();
        }
      } catch (error) {
      toast.error( `'Ops, something went wrong, try it again' ${error}`)
      }
    };


  return (

    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger"/>
      </LeftContainer>
 
      <RightContainer>
        <Title>Sign Up</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <label>Name</label>
            <input type="text" name="name" id="name" {...register("name")}/>
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input type="email" name="email" id="email" {...register("email")}/>
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer> 
            <label>Password</label>
            <input type="password" name="password" id="password" {...register("password")}/>
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer> 
            <label>Confirm password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" {...register("confirmPassword")}/>
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Sign Up</Button>
        </Form>

        <p>Already a member? <Link to={'/login'}>Click here</Link></p>

      </RightContainer>
    </Container>
    
  );
}
