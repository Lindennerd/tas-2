import { useForm } from "react-hook-form";

export function Filter() {
  const { register, handleSubmit, errors } = useForm();
  function onSubmit() {}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
}
