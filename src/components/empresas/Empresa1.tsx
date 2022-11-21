import { useEffect, useState } from "react";
import '../empresas/empresa1.css';

export const Empresa1 = () => {
    const [monedas, setMonedas] = useState([] as any);
    const [moneda2] = useState([] as any);
    const [resultado, setResultado] = useState([] as any);


    const onClick = (e: any)=> {
    e.preventDefault();
    const valor: number = e.target.valor.value;
    const moneda1: number = e.target.moneda1.value;
    const moneda2: number = e.target.moneda2.value;

    if (moneda1 !== moneda2) {
        const host = "api.frankfurter.app";
        fetch(
            `https://${host}/latest?amount=${valor}&from=${moneda1}&to=${moneda2}`
            )
            .then((resp) => resp.json())
            .then((data) => {
                setResultado(data.rates[moneda2]);
                console.log(data.rates[moneda2]);
            });
        }
    }
    useEffect(() => {
        const host = "api.frankfurter.app";
        fetch(`https://${host}/currencies`)
        .then((resp) => resp.json())
        .then((data) => {
            const arr = [];
            for (const i in data) {
            arr.push(i);
            }
            setMonedas(arr);
        });
    }, []);


    
    return (
      <>
        {/* <Menu /> */}
        <div className="empresa1">
          <div className="convertidor">
            <section className="empresa1">
              <h1>EMPRESA 1</h1>
            </section>
            <form onSubmit={onClick}>
              <input className="valor" name="valor" type="number" placeholder="valor"></input>
              <select className="moneda1" name="moneda1">
                <option value="COP">COP</option>
                {monedas.map((moneda: any) => (
                  <option value={moneda}>{moneda}</option>
                ))}
              </select>
              <select className="moneda2" name="moneda2">
                <option value="COP">COP</option>
                {monedas.map((moneda: any) => (
                  <option value={moneda}>{moneda}</option>
                ))}
              </select><br/>
              <button className="convertir" type="submit">CONVERTIR</button>
              <br />
              <p>
                Su conversion es {moneda2}: {resultado}
              </p>
            </form>
          </div>
        </div>
      </>
    );
};
export default Empresa1;
