const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');


//Conectionnode 
new config({
    user: 'zgpufoqmpouibn',
    host: 'ec2-44-195-201-3.compute-1.amazonaws.com',
    pass: 'ccdb0451d8eff038e64cb29e6b3d5e0bad696c78fee85a937b6807b6f7716c0f',
    database: 'de3gtrfnhutkf9'

})
const pool = new Pool(config);

const getPersona = async () => {
    const res = await pool.query('select * from usuario');
    console.log(res);
}

//Settings
app.set('port', 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../html'));
app.engine('html', require('ejs').renderFile);


//middlewares

//routes
app.get('/', (req, res)  => {
    res.render('Index.html');
});
app.get('/IniciarSesion', (req, res)  => {
    res.render('IniciarSesion.html');
});
app.get('/about', (req, res)  => {
    res.render('about.html');
});
app.get('/doctors', (req, res)  => {
    res.render('doctors.html');
});
app.get('/contact', (req, res)  => {
    res.render('contact.html');
});
app.get('/Registrarse', (req, res)  => {
    res.render('Registrarse.html');
});
app.get('/PrincipalAdmin', (req, res)  => {
    res.render('PrincipalAdmin.html');
});
        app.get('/GestionDePacientes', (req, res)  => {
            res.render('GestionDePacientes.html');
        });
                app.get('/IngresarPaciente', (req, res)  => {
                    res.render('IngresarPaciente.html');
                });app.get('/EliminarPaciente', (req, res)  => {
                    res.render('EliminarPaciente.html');
                });app.get('/EditarPaciente', (req, res)  => {
                    res.render('EditarPaciente.html');
                });app.get('/BuscarPaciente', (req, res)  => {
                    res.render('BuscarPaciente.html');
                });
        app.get('/GestionCitas', (req, res)  => {
            res.render('GestionCitas.html');
        });
                app.get('/ReservaHoraAdmin', (req, res)  => {
                    res.render('ReservaHoraAdmin.html');
                });app.get('/EditarCita', (req, res)  => {
                    res.render('EditarCita.html');
                });app.get('/EliminarCita', (req, res)  => {
                    res.render('EliminarCita.html');
                });app.get('/BuscarCita', (req, res)  => {
                    res.render('BuscarCita.html');
                });
        app.get('/GestionPagos', (req, res)  => {
            res.render('GestionPagos.html');
        });
                app.get('/GenerarDeuda', (req, res)  => {
                    res.render('GenerarDeuda.html');
                });app.get('/GenerarPago', (req, res)  => {
                    res.render('GenerarPago.html');
                });app.get('/HistorialPagos', (req, res)  => {
                    res.render('HistorialPagos.html');
                });
        app.get('/GenerarPresupuesto', (req, res)  => {
            res.render('GenerarPresupuesto.html');
        });
                app.get('/GestionDePacientes', (req, res)  => {
                    res.render('GestionDePacientes.html');
                });app.get('/GestionDePacientes', (req, res)  => {
                    res.render('GestionDePacientes.html');
                });app.get('/GestionDePacientes', (req, res)  => {
                    res.render('GestionDePacientes.html');
                });
app.get('/PrincipalEsp', (req, res)  => {
    res.render('PrincipalEsp.html');
        app.get('/AgendaEsp', (req, res)  => {
            res.render('AgendaEsp.html');
        });app.get('/GestionFichas', (req, res)  => {
            res.render('GestionFichas.html');
        });app.get('/GenerarPresupuesto', (req, res)  => {
            res.render('GenerarPresupuesto.html');
        });
});


//static files
app.use(express.static(path.join(__dirname, '../assets' )));


//listening server
app.listen (app.get('port'), () => {
    console.log('server on port ', app.get('port'));
    } );