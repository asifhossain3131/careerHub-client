import { Button, TextField } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Home.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

type Inputs = {
  name: string;
  phone: number;
  email: string;
};

const Home = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
   const {name,phone,email}=data
   if(name && phone && email){
    reset()
   }
   else{
    Swal.fire({
        title: 'Invalid Form',
        text: "Please provide all information to continue",
        icon: 'warning',
      })
   }
  };
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-120px)] bg-gray-200 flex flex-col lg:flex-row gap-4 items-center">
        <img
          className="homeImg  min-h-screen lg:w-3/5"
          src="https://www.tierpoint.com/wp-content/uploads/2022/05/8-IT-Professional-Career-Development-Tips-in-a-Managed-Services-World_blog.jpg"
          alt=""
        />
        <div className="mx-8 lg:mx-0 mb-8 lg:mb-0">
          <h1 className="font-semibold text-2xl">Get Started!</h1>
          <p className="text-gray-500 mb-4">
            Please provide your information to continue
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="text"
              id="standard-basic"
              label="Name"
              {...register("name")}
              variant="standard"
              className="w-3/4"
            />
            <TextField
              type="tel"
              id="standard-basic"
              label="Phone"
              {...register("phone")}
              variant="standard"
              className="w-3/4"
            />
            <TextField
              type="email"
              id="standard-basic"
              label="Email"
              {...register("email")}
              variant="standard"
              className="w-3/4"
            />
            <div className="mt-8">
              <Button type="submit" variant="contained" className="w-3/4 ">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
