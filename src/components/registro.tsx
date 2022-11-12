import "../components/registro.css";
import { useState } from "react";

export const Registro = () => {
  // const [acceso, setAcceso] = useState<string[]>([]);
  const [values, setValues] = useState<any>([]);
  const [id, setId] = useState("RIWCBT19GXIN");

  // const Agregar = (e: any) => {
  // const date = e.target.options
  // const seleccionado = []
  // for (let i = 0; i < date.length; i++) {
  //   if (date[i].selected) {
  //     seleccionado.push(date[i].value);
  //   }
  // }
  // setAcceso(seleccionado);

  // };
  // console.log(acceso);
  const makeId = () => {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 12; i++) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return setId(ID);
  };
  // console.log(333, makeId());
  const xd = (e: any) => {
    makeId();
    // let [name, value] = e?.target;
    setValues([...values, { id: id, permisos: e.target.value }]);
  };
  console.log(333, values);
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("user") || "[]");
    data.push({
      name: e.target.user.value,
      password: e.target.password.value,
      rol: e.target.rol.value,
      permisos: e.target.permisos.value,
    });
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    /*         window.location.reload(); */
  };

  return (
    <div className="context">
      <div className="box2">
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
          {/* <select  name="permisos" value={acceso} onChange={Agregar}> */}
          <select name="permisos" onChange={xd}>
            <option></option>
            <option value="vista">Vista administrator</option>
            <option value="empresa1">Empresa1</option>
            <option value="empresa2">Empresa2</option>
          </select>
          {/* <article>
            Días seleccionados:
            {acceso.map((acceso) => {
              return <p>{acceso}</p>;
            })}
          </article> */}
          {values?.map((x: any, i: any) => {
            let key = i;
            return (
              <div key={key}>
                <p>{x?.permisos} </p>
              </div>
            );
          })}
          <button className="btn" type="submit">
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
  );
};
export default Registro;
