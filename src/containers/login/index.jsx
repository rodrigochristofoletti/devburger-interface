import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/userContext";



import { Container, LeftContainer, RightContainer, Form, InputContainer, Link, Title } from "./styles";
import Logo from "../../assets/Logo.svg";

import { Button } from "../../components/Button"


export function Login() {
  const navigate = useNavigate();
const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup.string().email().required('Email is required'),
      password: yup.string().min(6).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    try {
      const { data: userData } = await toast.promise(

        api.post('/session', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Working on it',
          success: {
            render() {
              setTimeout(() => {
                if(userData?.admin) {
                  navigate('/admin/orders')
                } else {
                  navigate('/');
                };
              }, 1800);
              return `Welcome :)`
            },
            icon: "🟢",
          },
          error: 'Email or password incorrects 🤯'
        }
      )
      putUserData(userData)
    } catch (error) {
      toast.error(`'Ops, something went wrong, try it again' ${error}`)
    } 
  };
  

  return (

    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>Welcome to <span>Dev Burguer!</span><br></br>
          Sign in with your <span>Username and password.</span></Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" name="email" id="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Password</label>
            <input type="password" name="password" id="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Sign in</Button>
        </Form>

        <p>Not a member? <Link to={'/signUp'}>Sign up</Link></p>

      </RightContainer>
    </Container>

  );
}
