import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";
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
    mode: "onChange",
  });

  //下の「送信」ボタンを押すと、入力した文字をコンソールで見られるようにするための関数
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("onSubmit:", data);

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Emailを入力してください</label>
            <input {...register("email", { required: true })} />
            {errors.email && (
              <span style={{ color: "red" }}>Eメールアドレスは必須です</span>
            )}
            <label htmlFor="">Passwordを入力してください</label>
            <input {...register("password", { required: true })} />
            {errors.password && (
              <span style={{ color: "red" }}>パスワードは必須です</span>
            )}
            <button type="submit">送信</button>
        </form>
      </div>
    </>
  );
}
