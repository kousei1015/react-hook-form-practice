import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

const schema = yup.object().shape({
  email: yup.string().email("有効なメールアドレスを入力してください").required("Eメールアドレスは必須です"),
  password: yup.string().min(4, "パスワードは4文字以上で入力してください").required("パスワードは必須です"),
});

type Inputs = {
  email: string;
  password: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("onSubmit:", data);

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Emailを入力してください</label>
            <input {...register("email")} />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
            <label htmlFor="">Passwordを入力してください</label>
            <input {...register("password")} />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
            <button type="submit">送信</button>
        </form>
      </div>
    </>
  );
}
