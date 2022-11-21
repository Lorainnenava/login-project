import "../components/menu.css";
/*COMIENZA MENU*/
export const Menu = () => {
    //REDIRECCION AL LOGIN
    const handleOnClick = (e: any) => {
        console.log(e);
        window.location.href = "/";
    };
    /*REDIRECCION EMPRESA1*/
    const handleOnClick2 = (e: any) => {
        window.location.href = "/Empresa/Empresa1";
    };
    /*REDIRECCION EMPRESA2*/
    const handleOnClick3 = (e: any) => {
        window.location.href = "/Empresa/Empresa2";
    };

    return (
    <div className="box2">
        <section className="inicio">
        <article className="bienvenido">
            <h2>BIENVENIDO </h2>
        </article>
        <button onClick={handleOnClick} type="submit" className="menu">
            INICIAR SESION
        </button>
        <button onClick={handleOnClick2} type="submit" className="menu">
            EMPRESA1
        </button>
        <button onClick={handleOnClick3} className="menu">
            EMPRESA2
        </button>
        </section>
    </div>
    );
}
export default Menu;
