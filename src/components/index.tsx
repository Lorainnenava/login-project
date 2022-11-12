import "../components/index.css";

export const Index = () => {
  //EVENTO PARA COMPARAR LOS DATOS CON EL LOCAL_STORAGE
    const onSubmit = (e: any) => {
    const data = JSON.parse(localStorage.getItem("user") || "[]"); //ESTAMOS OBTENIENDO LOS VALORES DEL LOCAL
    let confir = false;
    e.preventDefault();
    console.log(data);
    //window.location.reload()

    //GUARDANDO EL USERNAME
    const user: string = e.target.user.value;
    console.log(user);

    //GUARDANDO EL PASSWORD
    const password: string = e.target.password.value;
    console.log(password);

    //COMPARANDO LOS DATOS CON LOS DEL LOCAL
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === user && data[i].password === password) {
        confir = true;
    }
    }if (confir) {
        window.location.href= "/Entrada"
    }else {
        alert("asi no'e");
    }
};

    return (
    <div className="container">
    <div className="box">
        <section className="titulo">
        <h1>LOG IN</h1>
        </section>
        <form className="form" onSubmit={onSubmit}>
        <label>
            <input
            name="user"
            className="usuario"
            type="text"
            placeholder="Type your username"
            ></input>
            <br />
        </label>
        <label>
            <input
            className="password"
            name="password"
            type="password"
            placeholder="Type your password"
            ></input>
        </label>
        <button type="submit">ENTER</button>
        </form>
    </div>
    </div>
);
};
export default Index;
