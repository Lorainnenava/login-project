import "../components/index.css";

export const Index = () => {
  //EVENTO PARA COMPARAR LOS DATOS CON EL LOCAL_STORAGE
    const onSubmit = (e: any) => {
    const data = JSON.parse(localStorage.getItem("user") || "[]"); //ESTAMOS OBTENIENDO LOS VALORES DEL LOCAL
    let confir = false;
    let confirma = false;
    e.preventDefault();
    console.log(data);

    //GUARDANDO EL USERNAME
    const user: string = e.target.user.value;
    console.log(user);

    //GUARDANDO EL PASSWORD
    const password: string = e.target.password.value;
    console.log(password);

    //COMPARANDO LOS DATOS CON LOS DEL LOCAL Y LOS ROLES
    for (let i = 0; i < data.length; i++) {
        if (
        data[i].name === user &&
        data[i].password === password &&
        data[i].rol === "Usuario"
        ) {
        confir = true;
        }
        if (
            data[i].name === user &&
            data[i].password === password &&
            data[i].rol === "Admi"
            ) {
                confirma = true;
            }
        }
            
        if (confir && !confirma) {
            window.location.href = `/Entrada/${user}`;

        }  if (!confir && confirma) {
            window.location.href = "/Administrador";

        } if (!confir && !confirma) {
            alert("usuario no existe");
        }
};

    return (
        <div className="container">
            <div className="-box">
                <div className="-box1">
                    <h1 className="welcome">WELCOME<br/>BACK!</h1>
                </div>
                <div className="-box2">
            <section className="titulo">
                <h1 className="title">LOG IN</h1>
            </section>
            <form className="form" onSubmit={onSubmit}>
                <label className="index">
                <input
                    name="user"
                    className="usuario"
                    type="text"
                    placeholder="Type your username"
                ></input>
                <br />
                </label>
                <label className="index">
                <input
                    className="password"
                    name="password"
                    type="password"
                    placeholder="Type your password"
                ></input>
                </label>
                <button className="enter" type="submit">
                ENTER
                </button>
            </form>
            </div>
            </div>{/* caja */}
        </div>
    );
};
export default Index;
