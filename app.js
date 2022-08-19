//1 - Invocamos Express
const express = require("express");
const app = express();

//2 - seteamos urlencoded para capturar los datos del fomrulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3 - invocamos a dotenv
const dotenv = require("dotenv");
const exp = require("constants");
dotenv.config({path:"./env/.env"});

//4 - el directorio public 

/* app.use(express.static("public")); */
app.use("/src", express.static(__dirname + "/public"));


//5 - Establecer el motor de plantillas 
app.set("view engine", "ejs");

//6 - Invocamos a bcryptjs
const bcryptjs = require("bcryptjs");

//7 - Var. de session
const session = require("express-session");
app.use(session({
    secret:"secret",
    resave: true,
    saveUninitialized:true
}));

//8 - Invocamos al modulo de coneccion dela base de datos
const connnection = require("./database/db");
const connection = require("./database/db");

//9 - Estableciendo las rutas 
    app.get("/", (req, res)=>{  //login
        res.render("login");
    })

    /* app.get("/index", (req, res)=>{  //index
        res.render("index");
    }) */

    app.get("/register",(req, res)=>{ //register
        res.render("register");
    });

//10 - Registración
app.post("/register", async (req, res) =>{
    const user = req.body.register_usuario;
    const name = req.body.register_nombre;
    const pass = req.body.register_contraseña;
    let passCifra = await bcryptjs.hash(pass, 8);
    connnection.query("INSERT INTO usuarios SET ?", {usuario:user, nombre:name, contraseña:passCifra}, async(e, results)=>{
        if(e){
            console.log("no se pudo" + e)
        }else{
            res.send("Alta Exitosa");
        }
    })
});
//11 - Autenticación
    app.post("/auth", async (req, res) => {
        const user = req.body.input_usuario;
        const pass = req.body.input_contraseña;
        let passCifra = await bcryptjs.hash(pass, 8);
        if(user && pass){
            connection.query("SELECT * FROM usuarios WHERE usuario = ?", [user], async (e, results) => {
                if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].contraseña))){
                    res.render( "login",{
                        alert:true,
                        alertTitle:"Error",
                        alertMessage: "Usuario y/o contraseña incorrectas",
                        alertIcon: "error",
                        showConfirmButton:true,
                        timer: 2000,
                        ruta:""
                    });
                }else{
                    req.session.loggedin = true;
                    req.session.usuario = results[0].usuario;
                    res.render("login",{
                        alert:true,
                        alertTitle:"Bienvenido Creador",
                        alertMessage: "Listo Para Trabajar?",
                        alertIcon: "success",
                        showConfirmButton:true,
                        timer: false,
                        ruta:"index"
                    })
                }
            })
        }else{
            res.render("login",{
                alert:true,
                alertTitle:"Advertencia",
                alertMessage: "¡Porfavor ingrese un  usuario y contraseña!",
                alertIcon: "warning",
                showConfirmButton:true,
                timer: 2000,
                ruta:""
            });
        }
    })

//12 - Auntenticacion pages
app.get("/index", (req, res) => {
    if(req.session.loggedin){
        res.render("index",{    
            login: true,
            usuario: req.session.usuario
        });
    }else{
        res.render("index",{
            login:false,
            usuario:"Inicia Sesion"
        });
    }
})

//13 - Logout
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    })
});


    app.listen(5000, (req, res)=>{
        console.log("corriendo en 5000");
    });
