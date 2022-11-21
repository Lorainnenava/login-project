import "../components/entrada.css";
import { useParams } from "react-router-dom";
import Select from "react-select";
interface Data {
  name: string;
  password: string;
  rol: string;
  permisos: string[];
}
export const Entrada = () => {
  const { user } = useParams(); //LLAMAR NOMBRE DEL USER

  //BUSCANDO LOS PERMISOS DEL LOCAL
  const data = JSON.parse(localStorage.getItem("user") || "[]");
  const result: Data = data.find((params: Data) => params.name === user);

  const handleForm = (e: any) => {
    e.preventDefault();
    const valor: string = e.target.select.value;
    console.log(valor);
    window.location.href = `/Empresa/${valor}`;
  };

  return (
    <div className="Entrada">
      <div className="box-padre">
        <section className="Nombre">
          <h1>Hola {user} </h1>
        </section>
        <form className="selector" onSubmit={handleForm}>
          {/*SELECTOR DE PERMISOS*/}
          <Select
            name="select"
            className="opciones"
            onChange={(params: any) => {
              console.log(params);
            }}
            options={result.permisos.map((emp: any) => ({
              label: emp,
              value: emp,
            }))}
          />
          <button className="renderizar" type="submit" >REDIRECCION</button>
        </form>
      </div>
    </div>
  );
};
export default Entrada;
