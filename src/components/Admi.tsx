import "../components/admi.css";
import { useState } from "react";
import Select from "react-select";
import Menu from "./menu";

//ARRAY DE LOS PERMISOS
const options = [
  { value: "", label: "" },
  { value: "vistaAdmi", label: "VistaAdmi" },
  { value: "Empresa1", label: "Empresa1" },
  { value: "Empresa2", label: "Empresa2" },
];

export const Admi = () => {
  const [values, setValues] = useState();
  console.log(values);

  //GUARDAR DATOS DEL FORMULARIO
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("user") || "[]");
    data.push({
      //ENVIAR LOS DATOS AL LOCAL
      name: e.target.user.value,
      password: e.target.password.value,
      rol: e.target.rol.value,
      permisos: values,
    });
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    window.location.reload();
    //GUARDAR LOCAL
  };
  //OPCION QUE ME GUARDE LOS PERMISOS EN EL LOCAL
  const handleSelect = (e: any) => {
    const array = e.map((permisos: any) => {
      return permisos.value;
    });
    setValues(array);
  };

  return (
    <div className="context">
      <Menu />
      <section className="vista">
        <div className="box3">
          <section className="registro">
            <h1>REGISTRO</h1>
          </section>
          <form className="form2" onSubmit={handleOnSubmit}>
            <label className="input">
              <input
                name="user"
                className="user"
                type="text"
                placeholder="username"
              ></input>
              <br />
            </label>
            <label className="input">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="pass"
              ></input>
            </label>
            <label className="input">
              <input
                name="rol"
                className="rol"
                type="text"
                placeholder="rol"
              ></input>
            </label>
            <Select
              name="permisos"
              isMulti
              options={options}
              onChange={handleSelect}
            />
            <button className="btn" type="submit">
              REGISTRAR
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Admi;
