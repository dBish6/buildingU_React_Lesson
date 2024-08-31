import { useRef, useState, useEffect } from "react";

export default function Form() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    processing: false,
    errors: { name: "", password: "" },
  });

  const submit = async (formData) => {
    const controller = new AbortController();

    const res = await fetch("https://yourbackend/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      })

      if (!res.ok) {
        // setForm() // errors
      } else {
        setForm({ ...form, processing: false })
      }

      const data = await res.json();

      return { controller, data }
  }

  useEffect(() => {
    if (form.processing === true) {
        console.log("formRef.current", formRef.current)
        const inputField = formRef.current.querySelectorAll("input");
        console.log("inputField", inputField)

        let error = false;
        for (const field of inputField) {
            console.log("field", field)
            console.log("field.value.length", field.value.length)
            if (!field.value.length) {
                setForm((prev) => ({...prev, errors: { ...prev.errors, [field.name]: `${field.name} is required.`, } }));
                error = true;
            }
        }

        let res = null;
        let controller
        if (!error) {
            const { controller: controllerA, data } = submit({ name: inputField[0].value, password: inputField[1].value })
            controller = controllerA;
            // do something with data.
        }

        return () => controller.abort();
    }
  }, [form.processing]);

  return (
    <form
      ref={formRef}
      autoComplete="off"
      noValidate
      onSubmit={(e) => { 
        e.preventDefault();
        setForm({ ...form, processing: true }) 
      }}
    >
      <label htmlFor="name">Username</label>
      <input
        id="name"
        name="name"
        placeholder="name"
        disabled={form.processing}
      />
      {form.errors.name && <small>{form.errors.name}</small>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        placeholder="name"
        disabled={form.processing}
      />
      {form.errors.password && <small>{form.errors.password}</small>}

      <button type="submit" disabled={form.processing}>
        Submit
      </button>
    </form>
  );
}
