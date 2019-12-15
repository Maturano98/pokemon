var crypto = require('crypto')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var puerto = process.env.PORT || 3000
var servidor = express()

// Connection URL
var url = 'mongodb+srv://aMaturano:pokemon4115@cluster0-vd76p.mongodb.net/test?retryWrites=true&w=majority'
 
// Database Name
var dbNombre = 'pokemon';
var bd;
 
// Use connect method to connect to the server
var cliente = new MongoClient(url, { useUnifiedTopology: true })

cliente.connect(function (err, client) {
    if (err) {
        console.error(err)
        client.close()
        process.exit(1)
    }

    console.log('Conectado exitosamente!');
    bd = client.db(dbNombre);
});

function generarToken() {
    return crypto.randomBytes(10).toString('hex')
}

function guardarToken(token, nombre) {
    return bd.collection('sesiones').insertOne({ token: token, nombre: nombre }) 
}

servidor.use(function loguear(consulta, respuesta, next) {
    console.log(`${consulta.method} - ${consulta.url}`)
    next()
})

servidor.use(function (consulta, respuesta, next) {
    if (typeof bd === 'undefined') {
        // esperar 3 segundos y seguir
        setTimeout(next, 3000)
    }
    next()
})

async function auth(consulta, respuesta, next) {
    if (!consulta.headers.cookie) {
        consulta.sesion = null
    } else {
        var token = consulta.headers.cookie.split('=')[1]
        if (!token) {
            consulta.sesion = null
        } else {
            var sesion = await bd.collection('sesiones').findOne({ token: token })
            consulta.sesion = sesion
        }
    }
    next()
}

servidor.get('/login.html', auth, async function (consulta, respuesta, next) {
    if (consulta.sesion) {
        respuesta.sendFile(path.join(__dirname, 'publico', 'auth.html'))
    } else {
        respuesta.redirect('/login.html')
    }
})

servidor.get('/', async function (consulta, respuesta, next) {
        respuesta.redirect('/login.html')
})
*/
// uso middleware auth.
servidor.get('/auth.html', auth, async function (consulta, respuesta, next) {
    if (consulta.sesion) {
        respuesta.sendFile(path.join(__dirname, 'publico', 'auth.html'))
    } else {
        respuesta.redirect('/login.html')
    }
})
servidor.use(express.static('./publico'))
servidor.use(bodyParser.urlencoded({ extended: false }))
servidor.use(bodyParser.json())

servidor.post('/api/login', async function (consulta, respuesta) {
    var nombre = consulta.body.nombre
    var usuario = await bd.collection('registrados').findOne({ nombre: nombre })

    if (!usuario || (usuario.pass !== consulta.body.pass)) {
        return respuesta.status(401).send('No autorizado')
    }
1
    var token = generarToken()
    await guardarToken(token, usuario.nombre);

    respuesta.setHeader('Set-Cookie', `token=${token}; Path=/`)
    respuesta.redirect('/auth.html')
})

servidor.post('/api/registro', async function (consulta, respuesta) {
    var nombre = consulta.body.nombre
    var pass = consulta.body.pass
    var pok1 = consulta.body.vv4
    var stats1 = [consulta.body.ps1, consulta.body.atf1, consulta.body.dff1, consulta.body.ats1, consulta.body.dfs1]
    var pok2 = consulta.body.vv5
    var stats2 = [consulta.body.ps2, consulta.body.atf2, consulta.body.dff2, consulta.body.ats2, consulta.body.dfs2]
    var pok3 = consulta.body.vv6
    var stats3 = [consulta.body.ps3, consulta.body.atf3, consulta.body.dff3, consulta.body.ats3, consulta.body.dfs3]
    var pok4 = consulta.body.vv7
    var stats4 = [consulta.body.ps4, consulta.body.atf4, consulta.body.dff4, consulta.body.ats4, consulta.body.dfs4]
    var pok5 = consulta.body.vv8
    var stats5 = [consulta.body.ps5, consulta.body.atf5, consulta.body.dff5, consulta.body.ats5, consulta.body.dfs5]
    var pok6 = consulta.body.vv9
    var stats6 = [consulta.body.ps6, consulta.body.atf6, consulta.body.dff6, consulta.body.ats6, consulta.body.dfs6]

    await bd.collection('registrados').insertOne({ nombre: nombre, pass: pass, medallas: 0, pok1: pok1, stats1: stats1, pok2: pok2, stats2: stats2, pok3: pok3, stats3: stats3, pok4: pok4, stats4: stats4, pok5: pok5, stats5: stats5, pok6: pok6, stats6: stats6}) 
    respuesta.redirect('/login.html')
})
servidor.post('/api/medallas', auth, async function (consulta, respuesta) {
    var usuario = await bd.collection('registrados').findOne({ nombre: consulta.sesion.nombre })
    var meda = consulta.body.meed
    await bd.collection('registrados').updateOne({ medallas: usuario.medallas }, {$set: { medallas: meda }})
    respuesta.redirect('/auth.html')
})
servidor.get('/api/perfil', auth, async function (consulta, respuesta) {
    if (consulta.sesion) {
        var usuario = await bd.collection('registrados').findOne({ nombre: consulta.sesion.nombre })
        respuesta.json(usuario)
    } else {
        respuesta.redirect('/login.html')
    }
})
  
servidor.listen(puerto, function () {
    console.log('Escuchando en el puerto ' + puerto)
})
