import { BookState, addBook, updateBook } from "@/lib/features/book/bookSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ErrorFormFields, validate } from "@/components/Form/Form.utils";
import { redirect } from "next/navigation";
import {
  useRef,
  useState,
  useEffect,
  ChangeEventHandler,
  FormEvent,
} from "react";

export enum FormType {
  ADD = "Add",
  UPDATE = "Update",
}

interface Props {
  initVal: BookState;
  formType: FormType.ADD | FormType.UPDATE;
}

const Form: React.FC<Props> = ({ initVal, formType }) => {
  const form = useRef(),
    [formVals, setFormVals] = useState(initVal),
    [formErrs, setFormErrs] = useState<ErrorFormFields>({}),
    [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Object.keys(formErrs).length === 0 && isSubmit) {
      formType === "Add"
        ? dispatch(addBook(formVals))
        : dispatch(updateBook(formVals));
      redirect(`/`);
    }
  }, [dispatch, formErrs, formVals, isSubmit, formType]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    const val = id === "price" ? parseInt(value) : value;
    setFormVals({ ...formVals, [id]: val });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrs(validate(formVals));
    setIsSubmit(true);
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <h1 className="mb-8 text-3xl">{formType} Book Form</h1>
      <div className="mb-6">
        <label className="mr-2.5" htmlFor="name">
          Name:
        </label>
        <input
          value={formVals.name}
          onChange={handleChange}
          name="name"
          id="name"
          className="text-black"
        />
        <div className="text-red-600 font-bold">
          {formErrs.name && formErrs.name}
        </div>
      </div>
      <div className="mb-6">
        <label className="mr-2.5" htmlFor="price">
          Price:
        </label>
        <input
          value={formVals.price}
          onChange={handleChange}
          name="price"
          id="price"
          type="number"
          className="text-black"
        />
        <div className="text-red-600 font-bold">
          {formErrs.price && formErrs.price}
        </div>
      </div>
      <div className="mb-6">
        <label className="mr-2.5" htmlFor="category">
          Category:
        </label>
        <input
          value={formVals.category}
          onChange={handleChange}
          name="category"
          id="category"
          className="text-black"
        />
        <div className="text-red-600 font-bold">
          {formErrs.category && formErrs.category}
        </div>
      </div>
      <button className="inline-block mb-5 p-2 bg-slate-700 rounded-md">
        Submit
      </button>
    </form>
  );
};
export default Form;
