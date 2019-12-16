var medallas
var pokes = 3
var rivas = 3
var turnos = 0
function quemar(num) {
    prec = Math.floor(Math.random() * 100)
    if (prec < num) {
        return "quemado"
    }
    else return "normal"
}
function paralizar(num) {
    prec = Math.floor(Math.random() * 100)
    if (prec < num) {
        return "paralizado"
    }
    else return "normal"
}
function congelar(num) {
    prec = Math.floor(Math.random() * 100)
    if (prec < num) {
        return "congelado"
    }
    else return "normal"
}
function dormir(num) {
    prec = Math.floor(Math.random() * 100)
    if (prec < num) {
        return "dormido"
    }
    else return "normal"
}
function envenenar(num) {
    prec = Math.floor(Math.random() * 100)
    if (prec < num) {
        return "envenenado"
    }
    else return "normal"
}
function envenenarGr(num) {
    prec = Math.floor(Math.random() * 100)
    if (prec < num) {
        return "envenenado gravemente"
    }
    else return "normal"
}
function drenar() {
    return "drenado"
}
var acero = {
    nombre: "acero",
    eficacia2: {
        hada: 2,
        hielo: 2,
        roca: 2},
    eficacia05: {
        acero: 0.5,
        agua: 0.5,
        electrico: 0.5,
        fuego: 0.5
    },
    eficacia0: {}
}
var agua = {
    nombre: "agua",
    eficacia2: {
        fuego: 2,
        roca: 2,
        tierra: 2
    },
    eficacia05: {
        agua: 0.5,
        dragon: 0.5,
        planta: 0.5
    },
    eficacia0: {}
}
var bicho = {
    nombre: "bicho",
    eficacia2: {
        planta: 2,
        psiquico: 2,
        siniestro: 2
    },
    eficacia05: {
        acero: 0.5,
        fantasma: 0.5,
        fuego: 0.5,
        hada: 0.5,
        lucha: 0.5,
        veneno: 0.5,
        volador: 0.5
    },
    eficacia0: {}
}
var dragon = {
    nombre: "dragon",
    eficacia2: {dragon: 2},
    eficacia05: {acero: 0.5},
    eficacia0: {hada: 0}
}
var electrico = {
    nombre: "electrico",
    eficacia2: {
        agua: 2,
        volador: 2
    },
    eficacia05: {
        dragon: 0.5,
        electrico: 0.5,
        planta: 0.5
    },
    eficacia0: {tierra: 0}
}
var fantasma = {
    nombre: "fantasma",
    eficacia2: {
        fantasma: 2,
        psiquico: 2
    },
    eficacia05: {
        acero: 0.5,
        siniestro: 0.5
    },
    eficacia0: {normal: 0}
}
var fuego = {
    nombre: "fuego",
    eficacia2: {
        acero: 2,
        bicho: 2,
        hielo: 2,
        planta: 2
    },
    eficacia05: {
        agua: 0.5,
        dragon: 0.5,
        fuego: 0.5,
        roca: 0.5
    },
    eficacia0: {}
}
var hada = {
    nombre: "hada",
    eficacia2: {
        dragon: 2,
        lucha: 2,
        siniestro: 2
    },
    eficacia05: {
        acero: 0.5,
        fuego: 0.5,
        veneno: 0.5
    },
    eficacia0: {}
}
var hielo = {
    nombre: "hielo",
    eficacia2: {
        dragon: 2,
        planta: 2,
        tierra: 2,
        volador: 2
    },
    eficacia05: {
        acero: 0.5,
        agua: 0.5,
        fuego: 0.5,
        hielo: 0.5
    },
    eficacia0: {}
}
var lucha = {
    nombre: "lucha",
    eficacia2: {
        acero: 2,
        hielo: 2,
        normal: 2,
        roca: 2,
        siniestro: 2
    },
    eficacia05: {
        bicho: 0.5,
        hada: 0.5,
        psiquico: 0.5,
        veneno: 0.5,
        volador: 0.5
    },
    eficacia0: {fantasma: 0}
}
var normal = {
    nombre: "normal",
    eficacia2:{},
    eficacia05: {
        acero: 0.5,
        roca: 0.5
    },
    eficacia0: {fantasma: 0}
}
var planta = {
    nombre: "planta",
    eficacia2: {
        agua: 2,
        roca: 2,
        tierra: 2
    },
    eficacia05: {
        acero: 0.5,
        bicho: 0.5,
        dragon: 0.5,
        fuego: 0.5,
        planta: 0.5,
        veneno: 0.5,
        volador: 0.5
    },
    eficacia0: {}
}
var psiquico = {
    nombre: "psiquico",
    eficacia2: {
        lucha: 2,
        veneno: 2
    },
    eficacia05: {
        acero: 0.5,
        psiquico: 0.5
    },
    eficacia0: {siniestro: 0}
}
var roca = {
    nombre: "roca",
    eficacia2: {
        bicho: 2,
        fuego: 2,
        hielo: 2,
        volador: 2
    },
    eficacia05: {
        acero: 0.5,
        lucha: 0.5,
        tierra: 0.5
    },
    eficacia0: {}
}
var siniestro = {
    nombre: "siniestro",
    eficacia2: {
        fantasma: 2,
        psiquico: 2
    },
    eficacia05: {
        hada: 0.5,
        lucha: 0.5,
        siniestro: 0.5
    },
    eficacia0: {}
}
var tierra = {
    nombre: "tierra",
    eficacia2: {
        acero: 2,
        electrico: 2,
        fuego: 2,
        roca: 2,
        veneno: 2
    },
    eficacia05: {
        bicho: 0.5,
        planta: 0.5
    },
    eficacia0: {volador: 0}
}
var veneno = {
    nombre: "veneno",
    eficacia2: {
        hada: 2,
        planta: 2
    },
    eficacia05: {
        fantasma: 0.5,
        roca: 0.5,
        tierra: 0.5,
        veneno: 0.5
    },
    eficacia0: {acero: 0}
}
var volador = {
    nombre: "volador",
    eficacia2: {
        bicho: 2,
        lucha: 2,
        planta: 2
    },
    eficacia05: {
        acero: 0.5,
        electrico: 0.5,
        roca: 0.5
    },
    eficacia0: {}
}
var hojaAf = {
    nombre: "Hoja afilada",
    potencia: 55,
    precisión: 95,
    tipo: planta,
    categoría: "físico",
    pp: 25,
    efecto: []
}
var bombL = {
    nombre: "Bomba de lodo",
    potencia: 90,
    precisión: 100,
    tipo: veneno,
    categoría: "especial",
    pp: 10,
    efecto: []
}
var rayoS = {
    nombre: "Rayo solar",
    potencia: 120,
    precisión: 100,
    tipo: planta,
    categoría: "especial",
    pp: 10,
    efecto: ["2 turnos"]
}
var terr = {
    nombre: "Terremoto",
    potencia: 100,
    precisión: 100,
    tipo: tierra,
    categoría: "físico",
    pp: 10,
    efecto: []
}
var cuch = {
    nombre: "Cuchillada",
    potencia: 70,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: ["critico 12.5"]
}
var garD = {
    nombre: "Garra dragón",
    potencia: 80,
    precisión: 100,
    tipo: dragon,
    categoría: "físico",
    pp: 15,
    efecto: []
}
var lanz = {
    nombre: "Lanzallamas",
    potencia: 95,
    precisión: 100,
    tipo: fuego,
    categoría: "especial",
    pp: 15,
    efecto: [quemar(10)]
}
var golpeA = {
    nombre: "As Aéreo",
    potencia: 60,
    precisión: 1000,
    tipo: volador,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var mord = {
    nombre: "Mordisco",
    potencia: 60,
    precisión: 100,
    tipo: siniestro,
    categoría: "físico",
    pp: 25,
    efecto: ["retr 30%"]
}
var hidrob = {
    nombre: "Hidrobomba",
    potencia: 120,
    precisión: 80,
    tipo: agua,
    categoría: "especial",
    pp: 5,
    efecto: []
}
var surf = {
    nombre: "Surf",
    potencia: 95,
    precisión: 100,
    tipo: agua,
    categoría: "especial",
    pp: 15,
    efecto: []
}
var cabezazo = {
    nombre: "Cabezazo",
    potencia: 100,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 10,
    efecto: []
}
var tornado = {
    nombre: "Tornado",
    potencia: 40,
    precisión: 100,
    tipo: volador,
    categoría: "especial",
    pp: 35,
    efecto: []
}
var psicorrayo = {
    nombre: "Psicorrayo",
    potencia: 65,
    precisión: 100,
    tipo: psiquico,
    categoría: "especial",
    pp: 20,
    efecto: []
}
var vientoP = {
    nombre: "Viento de plata",
    potencia: 60,
    precisión: 100,
    tipo: bicho,
    categoría: "especial",
    pp: 5,
    efecto: []
}
var zumbido = {
    nombre: "Zumbido",
    potencia: 90,
    precisión: 100,
    tipo: bicho,
    categoría: "especial",
    pp: 10,
    efecto: []
}
var pinM = {
    nombre: "Pin misil",
    potencia: 25,
    precisión: 95,
    tipo: bicho,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var pinM = {
    nombre: "Pin misil",
    potencia: 25,
    precisión: 95,
    tipo: bicho,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var enfado = {
    nombre: "Enfado",
    potencia: 120,
    precisión: 100,
    tipo: dragon,
    categoría: "físico",
    pp: 10,
    efecto: []
}
var esfuerzo = {
    nombre: "Esfuerzo",
    potencia: 0,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 5,
    efecto: ["igualar"]
}
var ataqueAla = {
    nombre: "Ataque ala",
    potencia: 60,
    precisión: 100,
    tipo: volador,
    categoría: "físico",
    pp: 35,
    efecto: []
}
var ciclon = {
    nombre: "Ciclón",
    potencia: 40,
    precisión: 100,
    tipo: dragon,
    categoría: "especial",
    pp: 20,
    efecto: ["retr 20"]
}
var alaAcero = {
    nombre: "Ala de acero",
    potencia: 70,
    precisión: 90,
    tipo: acero,
    categoría: "físico",
    pp: 25,
    efecto: ["subirD: 10"]
}
var hiperC = {
    nombre: "Hiper colmillo",
    potencia: 80,
    precisión: 90,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: ["retro: 10"]
}
var trit = {
    nombre: "Triturar",
    potencia: 80,
    precisión: 100,
    tipo: siniestro,
    categoría: "físico",
    pp: 15,
    efecto: ["bajarD: 20"]
}
var superd = {
    nombre: "Superdiente",
    potencia: 0,
    precisión: 90,
    tipo: normal,
    categoría: "físico",
    pp: 10,
    efecto: ["retro: 10", "mitad"]
}
var ataqueRap = {
    nombre: "Ataque rápido",
    potencia: 40,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 30,
    efecto: ["primero"]
}
var perse = {
    nombre: "Persecución",
    potencia: 40,
    precisión: 100,
    tipo: siniestro,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var picoT = {
    nombre: "Pico Taladro",
    potencia: 80,
    precisión: 100,
    tipo: volador,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var acido = {
    nombre: "Ácido",
    potencia: 40,
    precisión: 100,
    tipo: veneno,
    categoría: "especial",
    pp: 30,
    efecto: ["bajarDs: 10"]
}
var colmH = {
    nombre: "Colmillo Hielo",
    potencia: 65,
    precisión: 95,
    tipo: hielo,
    categoría: "físico",
    pp: 15,
    efecto: ["retr: 10", congelar(10)]
}
var avala = {
    nombre: "Avalancha",
    potencia: 75,
    precisión: 90,
    tipo: roca,
    categoría: "físico",
    pp: 10,
    efecto: ["retr: 30"]
}
var rapidez = {
    nombre: "Rapidez",
    potencia: 60,
    precisión: 200,
    tipo: normal,
    categoría: "especial",
    pp: 20,
    efecto: []
}
var placajeE = {
    nombre: "Placaje eléctrico",
    potencia: 120,
    precisión: 100,
    tipo: electrico,
    categoría: "físico",
    pp: 15,
    efecto: ["resta 1/3 daño"]
}
var rayo = {
    nombre: "Rayo",
    potencia: 95,
    precisión: 100,
    tipo: electrico,
    categoría: "especial",
    pp: 15,
    efecto: [paralizar(10)]
}
var trueno = {
    nombre: "Trueno",
    potencia: 120,
    precisión: 70,
    tipo: electrico,
    categoría: "especial",
    pp: 10,
    efecto: [paralizar(30)]
}
var puñoT = {
    nombre: "Puño trueno",
    potencia: 75,
    precisión: 100,
    tipo: electrico,
    categoría: "físico",
    pp: 15,
    efecto: [paralizar(10)]
}
var bucleA = {
    nombre: "Bucle arena",
    potencia: 15,
    precisión: 85,
    tipo: tierra,
    categoría: "físico",
    pp: 15,
    efecto: ["atrapar: 5 turnos"]
}
var excavar = {
    nombre: "Excavar",
    potencia: 80,
    precisión: 100,
    tipo: tierra,
    categoría: "físico",
    pp: 10,
    efecto: ["2 turnos"]
}
var golpeC = {
    nombre: "Golpe cuerpo",
    potencia: 85,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: [paralizar(30)]
}
var dobleP = {
    nombre: "Doble patada",
    potencia: 30,
    precisión: 100,
    tipo: lucha,
    categoría: "físico",
    pp: 30,
    efecto: []
}
var golpe = {
    nombre: "Golpe",
    potencia: 90,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: ["turnSconf: 3,"]
}
var megac = {
    nombre: "Megacuerno",
    potencia: 120,
    precisión: 85,
    tipo: bicho,
    categoría: "físico",
    pp: 10,
    efecto: []
}
var dobleB = {
    nombre: "Doble bofetón",
    potencia: 15,
    precisión: 85,
    tipo: normal,
    categoría: "físico",
    pp: 10,
    efecto: ["entre veces: 2.5"]
}
var metron = {
    nombre: "Metrónomo",
    potencia: 70,
    precisión: 100,
    tipo: dragon,
    categoría: "especial",
    pp: 15,
    efecto: ["azar"]
}
var luzL = {
    nombre: "Luz lunar",
    potencia: 0,
    precisión: 200,
    tipo: hada,
    categoría: "especial",
    pp: 5,
    efecto: ["curar mitad"]
}
var puñoM = {
    nombre: "Puño meteoro",
    potencia: 100,
    precisión: 85,
    tipo: acero,
    categoría: "físico",
    pp: 10,
    efecto: ["subirA: 20"]
}
var fuegoF = {
    nombre: "Fuego fatuo",
    potencia: 0,
    precisión: 75,
    tipo: fuego,
    categoría: "estado",
    pp: 15,
    efecto: [quemar(100)]
}
var giroF = {
    nombre: "Giro fuego",
    potencia: 15,
    precisión: 70,
    tipo: fuego,
    categoría: "especial",
    pp: 15,
    efecto: ["2-5 turnos 37.5*2*3 12.5*4*5"]
}
var vozarron = {
    nombre: "Vozarrón",
    potencia: 90,
    precisión: 100,
    tipo: normal,
    categoría: "especial",
    pp: 10,
    efecto: []
}
var dobleF = {
    nombre: "Doble filo",
    potencia: 120,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: ["recibe 1/3"]
}
var polvoV = {
    nombre: "Polvo veneno",
    potencia: 0,
    precisión: 75,
    tipo: veneno,
    categoría: "estado",
    pp: 35,
    efecto: ["envenenar"]
}
var paraliz = {
    nombre: "Paralizador",
    potencia: 0,
    precisión: 75,
    tipo: planta,
    categoría: "estado",
    pp: 30,
    efecto: [paralizar(100)]
}
var somn = {
    nombre: "Somnífero",
    potencia: 0,
    precisión: 75,
    tipo: planta,
    categoría: "estado",
    pp: 15,
    efecto: [dormir(100)]
}
var espora = {
    nombre: "Espora",
    potencia: 0,
    precisión: 100,
    tipo: planta,
    categoría: "estado",
    pp: 15,
    efecto: [dormir(100)]
}
var gigad = {
    nombre: "Gigadrenado",
    potencia: 60,
    precisión: 100,
    tipo: planta,
    categoría: "especial",
    pp: 5,
    efecto: ["recuperar 50"]
}
var aromaterapia = {
    nombre: "Aromaterapia",
    potencia: 0,
    precisión: 200,
    tipo: planta,
    categoría: "estado",
    pp: 5,
    efecto: ["curar equipo"]
}
var chupavidas = {
    nombre: "Chupavidas",
    potencia: 20,
    precisión: 100,
    tipo: bicho,
    categoría: "físico",
    pp: 15,
    efecto: ["recuperar 50"]
}
var psiquic = {
    nombre: "Psíquico",
    potencia: 90,
    precisión: 100,
    tipo: psiquico,
    categoría: "especial",
    pp: 10,
    efecto: ["10 bajarDs"]
}
var ataqueArena = {
    nombre: "Ataque arena",
    potencia: 0,
    precisión: 100,
    tipo: tierra,
    categoría: "estado",
    pp: 15,
    efecto: ["bajar precisión"]
}
var finta = {
    nombre: "Finta",
    potencia: 60,
    precisión: 200,
    tipo: siniestro,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var golpesF = {
    nombre: "Golpes furia",
    potencia: 18,
    precisión: 80,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: ["veces 2-5"]
}
var confusion = {
    nombre: "Confusión",
    potencia: 50,
    precisión: 100,
    tipo: psiquico,
    categoría: "especial",
    pp: 25,
    efecto: ["10 confundir"]
}
var hidrop = {
    nombre: "Hidropulso",
    potencia: 60,
    precisión: 100,
    tipo: agua,
    categoría: "especial",
    pp: 20,
    efecto: ["20 confundir"]
}
var amnesia = {
    nombre: "Amnesia",
    potencia: 0,
    precisión: 200,
    tipo: psiquico,
    categoría: "especial",
    pp: 20,
    efecto: ["subir Dsx2"]
}
var movS = {
    nombre: "Movimiento sísmico",
    potencia: 0,
    precisión: 100,
    tipo: lucha,
    categoría: "físico",
    pp: 20,
    efecto: ["salud2-nivel1"]
}
var tajoC = {
    nombre: "Tajo cruzado",
    potencia: 100,
    precisión: 80,
    tipo: lucha,
    categoría: "físico",
    pp: 5,
    efecto: ["critico 12.5"]
}
var chirrido = {
    nombre: "Chirrido",
    potencia: 0,
    precisión: 85,
    tipo: normal,
    categoría: "estado",
    pp: 40,
    efecto: ["bajarD x2"]
}
var colmilloI = {
    nombre: "Colmillo ígneo",
    potencia: 65,
    precisión: 95,
    tipo: fuego,
    categoría: "físico",
    pp: 15,
    efecto: ["10% retroceder", quemar(10)]
}
var derribo = {
    nombre: "Derribo",
    potencia: 90,
    precisión: 85,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: ["recibe 1/4 del daño"]
}
var ruedaF = {
    nombre: "Rueda fuego",
    potencia: 60,
    precisión: 100,
    tipo: fuego,
    categoría: "físico",
    pp: 25,
    efecto: [quemar(10), "descongelar"]
}
var velX = {
    nombre: "Velocidad extrema",
    potencia: 80,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 5,
    efecto: ["primero"]
}
var hipnosis = {
    nombre: "Hipnosis",
    potencia: 0,
    precisión: 70,
    tipo: psiquico,
    categoría: "estado",
    pp: 20,
    efecto: [dormir(100)]
}
var pistolaA = {
    nombre: "Pistola agua",
    potencia: 40,
    precisión: 100,
    tipo: agua,
    categoría: "especial",
    pp: 25,
    efecto: []
}
var sumision = {
    nombre: "Sumisión",
    potencia: 80,
    precisión: 80,
    tipo: lucha,
    categoría: "físico",
    pp: 20,
    efecto: ["1/4 daño"]
}
var puñoD = {
    nombre: "Puño dinámico",
    potencia: 100,
    precisión: 50,
    tipo: lucha,
    categoría: "físico",
    pp: 5,
    efecto: ["confusión"]
}
var kinetico = {
    nombre: "Kinético",
    potencia: 0,
    precisión: 80,
    tipo: psiquico,
    categoría: "estado",
    pp: 15,
    efecto: ["bajar precisión"]
}
var recuperacion = {
    nombre: "Recuperación",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 20,
    efecto: ["recuperar mitad"]
}
var reflejo = {
    nombre: "Reflejo",
    potencia: 0,
    precisión: 200,
    tipo: psiquico,
    categoría: "estado",
    pp: 20,
    efecto: ["daño fisico/2", "turnos: 5"]
}
var tiroV = {
    nombre: "Tiro vital",
    potencia: 70,
    precisión: 200,
    tipo: lucha,
    categoría: "físico",
    pp: 10,
    efecto: []
}
var fuerza = {
    nombre: "Fuerza",
    potencia: 80,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: []
}
var constriccion = {
    nombre: "Constricción",
    potencia: 15,
    precisión: 85,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: ["2-5"]
}
var hojaAg = {
    nombre: "Hoja aguda",
    potencia: 70,
    precisión: 100,
    tipo: planta,
    categoría: "físico",
    pp: 15,
    efecto: ["critico"]
}
var desenrollar = {
    nombre: "Desenrollar",
    potencia: 30,
    precisión: 90,
    tipo: roca,
    categoría: "físico",
    pp: 20,
    efecto: ["5t x2"]
}
var pedrada = {
    nombre: "Pedrada",
    potencia: 25,
    precisión: 80,
    tipo: roca,
    categoría: "físico",
    pp: 10,
    efecto: ["2-5v"]
}
var explosion = {
    nombre: "Explosión",
    potencia: 250,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 5,
    efecto: ["explosion"]
}
var ataqueF = {
    nombre: "Ataque furia",
    potencia: 15,
    precisión: 85,
    tipo: normal,
    categoría: "físico",
    pp: 5,
    efecto: ["2-5"]
}
var bote = {
    nombre: "Bote",
    potencia: 85,
    precisión: 85,
    tipo: volador,
    categoría: "físico",
    pp: 5,
    efecto: ["vuelo", paralizar(30)]
}
var chispa = {
    nombre: "Chispa",
    potencia: 65,
    precisión: 100,
    tipo: electrico,
    categoría: "físico",
    pp: 20,
    efecto: [paralizar(30)]
}
var fijarB = {
    nombre: "Fijar blanco",
    potencia: 0,
    precisión: 100,
    tipo: normal,
    categoría: "estado",
    pp: 5,
    efecto: ["prec 100"]
}
var electrocañon = {
    nombre: "Electrocañón",
    potencia: 100,
    precisión: 50,
    tipo: electrico,
    categoría: "especial",
    pp: 5,
    efecto: [paralizar(100)]
}
var danzaE = {
    nombre: "Danza espada",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 30,
    efecto: ["subirA x2"]
}
var falsot = {
    nombre: "Falsotortazo",
    potencia: 40,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 40,
    efecto: ["1ps"]
}
var furia = {
    nombre: "Furia",
    potencia: 20,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: ["subir A"]
}
var alboroto = {
    nombre: "Alboroto",
    potencia: 50,
    precisión: 100,
    tipo: normal,
    categoría: "especial",
    pp: 10,
    efecto: ["2-5t"]
}
var tria = {
    nombre: "Triataque",
    potencia: 80,
    precisión: 100,
    tipo: normal,
    categoría: "especial",
    pp: 10,
    efecto: ["quemar,p,c 20"]
}
var rayoAu = {
    nombre: "Rayo aurora",
    potencia: 65,
    precisión: 100,
    tipo: hielo,
    categoría: "especial",
    pp: 20,
    efecto: ["bajarA 10"]
}
var frioP = {
    nombre: "Frío polar",
    potencia: 2000,
    precisión: 30,
    tipo: hielo,
    categoría: "especial",
    pp: 5,
    efecto: ["instaK"]
}
var armaduraA = {
    nombre: "Armadura ácida",
    potencia: 0,
    precisión: 200,
    tipo: veneno,
    categoría: "estado",
    pp: 40,
    efecto: ["subirD x2"]
}
var refugio = {
    nombre: "Refugio",
    potencia: 0,
    precisión: 200,
    tipo: agua,
    categoría: "estado",
    pp: 40,
    efecto: ["subirD x1"]
}
var tenaza = {
    nombre: "Tenaza",
    potencia: 35,
    precisión: 75,
    tipo: agua,
    categoría: "físico",
    pp: 10,
    efecto: ["2-5t"]
}
var clavoC = {
    nombre: "Clavo cañón",
    potencia: 20,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: ["2-5v"]
}
var puñoS = {
    nombre: "Puño sombra",
    potencia: 60,
    precisión: 200,
    tipo: fantasma,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var bolaS = {
    nombre: "Bola sombra",
    potencia: 80,
    precisión: 100,
    tipo: fantasma,
    categoría: "especial",
    pp: 15,
    efecto: ["bajarDs 20"]
}
var comeSu = {
    nombre: "Come sueños",
    potencia: 100,
    precisión: 100,
    tipo: psiquico,
    categoría: "especial",
    pp: 15,
    efecto: ["recupera50% dorm"]
}
var colaF = {
    nombre: "Cola férrea",
    potencia: 100,
    precisión: 75,
    tipo: acero,
    categoría: "físico",
    pp: 15,
    efecto: ["bajarD 30"]
}
var meditacion = {
    nombre: "Meditación",
    potencia: 0,
    precisión: 100,
    tipo: psiquico,
    categoría: "estado",
    pp: 40,
    efecto: ["subirA"]
}
var golpeCa = {
    nombre: "Golpe cabeza",
    potencia: 70,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: ["retro 30"]
}
var martillazo = {
    nombre: "Martillazo",
    potencia: 90,
    precisión: 85,
    tipo: agua,
    categoría: "físico",
    pp: 10,
    efecto: ["prob critico"]
}
var pisoton = {
    nombre: "Pisotón",
    potencia: 65,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: ["retro 30"]
}
var proteccion = {
    nombre: "Protección",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: ["50-"]
}
var guillotina = {
    nombre: "Guillotina",
    potencia: 2000,
    precisión: 30,
    tipo: normal,
    categoría: "físico",
    pp: 5,
    efecto: ["instaK"]
}
var bombaH = {
    nombre: "Bomba huevo",
    potencia: 100,
    precisión: 75,
    tipo: normal,
    categoría: "físico",
    pp: 10,
    efecto: []
}
var huesoP = {
    nombre: "Hueso palo",
    potencia: 65,
    precisión: 85,
    tipo: tierra,
    categoría: "físico",
    pp: 20,
    efecto: ["retroceder10"]
}
var huesomerang = {
    nombre: "Huesomerang",
    potencia: 50,
    precisión: 90,
    tipo: tierra,
    categoría: "físico",
    pp: 10,
    efecto: ["2v"]
}
var ataqueO = {
    nombre: "Ataque óseo",
    potencia: 25,
    precisión: 80,
    tipo: tierra,
    categoría: "físico",
    pp: 10,
    efecto: ["2-5v"]
}
var patadaS = {
    nombre: "Patada salto",
    potencia: 70,
    precisión: 95,
    tipo: lucha,
    categoría: "físico",
    pp: 25,
    efecto: ["fallar/prot -1/8"]
}
var patadaSA = {
    nombre: "Patada salto alta",
    potencia: 85,
    precisión: 90,
    tipo: lucha,
    categoría: "físico",
    pp: 10,
    efecto: ["fallar/prot -daño"]
}
var patadaSA = {
    nombre: "Patada salto alta",
    potencia: 85,
    precisión: 90,
    tipo: lucha,
    categoría: "físico",
    pp: 10,
    efecto: ["fallar/prot -daño"]
}
var aguante = {
    nombre: "Aguante",
    potencia: 0,
    precisión: 100,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: ["1ps prec/2"]
}
var megapatada = {
    nombre: "Megapatada",
    potencia: 120,
    precisión: 75,
    tipo: normal,
    categoría: "físico",
    pp: 5,
    efecto: []
}
var puñoH = {
    nombre: "Puño hielo",
    potencia: 75,
    precisión: 100,
    tipo: hielo,
    categoría: "físico",
    pp: 15,
    efecto: [congelar(10)]
}
var puñoF = {
    nombre: "Puño fuego",
    potencia: 75,
    precisión: 100,
    tipo: fuego,
    categoría: "físico",
    pp: 15,
    efecto: [quemar(10)]
}
var megapuño = {
    nombre: "Megapuño",
    potencia: 80,
    precisión: 85,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var polucion = {
    nombre: "Polución",
    potencia: 20,
    precisión: 70,
    tipo: veneno,
    categoría: "especial",
    pp: 20,
    efecto: ["env 40"]
}
var residuos = {
    nombre: "Residuos",
    potencia: 65,
    precisión: 100,
    tipo: veneno,
    categoría: "especial",
    pp: 20,
    efecto: ["env30"]
}
var pantallaH = {
    nombre: "Pantalla de humo",
    potencia: 0,
    precisión: 100,
    tipo: normal,
    categoría: "estado",
    pp: 20,
    efecto: ["bajar Prec"]
}
var megaa = {
    nombre: "Megaagotar",
    potencia: 40,
    precisión: 100,
    tipo: planta,
    categoría: "especial",
    pp: 10,
    efecto: ["recupera %50ps"]
}
var atizar = {
    nombre: "Atizar",
    potencia: 80,
    precisión: 75,
    tipo: normal,
    categoría: "físico",
    pp: 20,
    efecto: []
}
var cornada = {
    nombre: "Cornada",
    potencia: 65,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 25,
    efecto: []
}
var descanso = {
    nombre: "Descanso",
    potencia: 0,
    precisión: 200,
    tipo: psiquico,
    categoría: "especial",
    pp: 10,
    efecto: ["2t"]
}
var perforador = {
    nombre: "Perforador",
    potencia: 1000,
    precisión: 30,
    tipo: normal,
    categoría: "físico",
    pp: 5,
    efecto: ["instaK"]
}
var puñoCo = {
    nombre: "Puño cometa",
    potencia: 18,
    precisión: 85,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: ["2-5v"]
}
var puñoMa = {
    nombre: "Puño mareo",
    potencia: 70,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 10,
    efecto: ["confundir 20"]
}
var inversion = {
    nombre: "Inversión",
    potencia: 20,
    precisión: 100,
    tipo: lucha,
    categoría: "físico",
    pp: 15,
    efecto: ["segun ps"]
}
var cascada = {
    nombre: "Cascada",
    potencia: 80,
    precisión: 100,
    tipo: agua,
    categoría: "físico",
    pp: 15,
    efecto: []
}
var rayoBu = {
    nombre: "Rayo burbuja",
    potencia: 65,
    precisión: 100,
    tipo: agua,
    categoría: "especial",
    pp: 20,
    efecto: []
}
var besoA = {
    nombre: "Beso amoroso",
    potencia: 0,
    precisión: 75,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: []
}
var pantallaLuz = {
    nombre: "Pantalla de luz",
    potencia: 0,
    precisión: 200,
    tipo: psiquico,
    categoría: "estado",
    pp: 10,
    efecto: ["reduce 1/2 movsp 5t"]
}
var rayoCo = {
    nombre: "Rayo confuso",
    potencia: 0,
    precisión: 100,
    tipo: fantasma,
    categoría: "estado",
    pp: 10,
    efecto: ["confusion"]
}
var fortaleza = {
    nombre: "Fortaleza",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 30,
    efecto: ["subirD"]
}
var furiaDr = {
    nombre: "Furia dragón",
    potencia: 0,
    precisión: 100,
    tipo: dragon,
    categoría: "especial",
    pp: 10,
    efecto: ["40ps"]
}
var hiperrayo = {
    nombre: "Hiperrayo",
    potencia: 150,
    precisión: 90,
    tipo: normal,
    categoría: "especial",
    pp: 5,
    efecto: ["dps turno"]
}
var rayoH = {
    nombre: "Rayo hielo",
    potencia: 95,
    precisión: 100,
    tipo: hielo,
    categoría: "especial",
    pp: 10,
    efecto: [congelar(10)]
}
var veloS = {
    nombre: "Velo sagrado",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 25,
    efecto: ["evita cmb estado"]
}
var transformacion = {
    nombre: "Transformación",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: ["Transformación"]
}
var impact = {
    nombre: "Impactrueno",
    potencia: 40,
    precisión: 100,
    tipo: electrico,
    categoría: "especial",
    pp: 30,
    efecto: [paralizar(10)]
}
var ondaT = {
    nombre: "Onda trueno",
    potencia: 0,
    precisión: 100,
    tipo: electrico,
    categoría: "estado",
    pp: 20,
    efecto: [paralizar(100)]
}
var ascuas = {
    nombre: "Ascuas",
    potencia: 40,
    precisión: 100,
    tipo: fuego,
    categoría: "especial",
    pp: 25,
    efecto: [quemar(10)]
}
var disparoL = {
    nombre: "Disparo lodo",
    potencia: 55,
    precisión: 95,
    tipo: tierra,
    categoría: "especial",
    pp: 15,
    efecto: []
}
var poderP = {
    nombre: "Poder pasado",
    potencia: 60,
    precisión: 100,
    tipo: roca,
    categoría: "especial",
    pp: 5,
    efecto: ["subir A,D,As,Ds"]
}
var restriccion = {
    nombre: "Restricción",
    potencia: 10,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 35,
    efecto: []
}
var aireAf = {
    nombre: "Aire afilado",
    potencia: 55,
    precisión: 95,
    tipo: volador,
    categoría: "especial",
    pp: 25,
    efecto: ["critico"]
}
var colmV = {
    nombre: "Colmillo veneno",
    potencia: 50,
    precisión: 100,
    tipo: veneno,
    categoría: "físico",
    pp: 15,
    efecto: [envenenarGr(30)]
}
var besoD = {
    nombre: "Beso dulce",
    potencia: 0,
    precisión: 75,
    tipo: hada,
    categoría: "estado",
    pp: 10,
    efecto: ["confusion"]
}
var tinieblas = {
    nombre: "Tinieblas",
    potencia: 0,
    precisión: 100,
    tipo: fantasma,
    categoría: "especial",
    pp: 15,
    efecto: ["menos Nivel"]
}
var deseo = {
    nombre: "Deseo",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: ["recupera 50%"]
}
var premonicion = {
    nombre: "Premonición",
    potencia: 80,
    precisión: 90,
    tipo: psiquico,
    categoría: "especial",
    pp: 15,
    efecto: ["3er turno"]
}
var dulceA = {
    nombre: "Dulce aroma",
    potencia: 0,
    precisión: 100,
    tipo: normal,
    categoría: "estado",
    pp: 20,
    efecto: ["bajaEv"]
}
var hojaMa = {
    nombre: "Hoja mágica",
    potencia: 60,
    precisión: 200,
    tipo: planta,
    categoría: "especial",
    pp: 20,
    efecto: []
}
var danzaP = {
    nombre: "Danza pétalo",
    potencia: 70,
    precisión: 100,
    tipo: planta,
    categoría: "especial",
    pp: 20,
    efecto: ["3-4t y conf"]
}
var patadaBa = {
    nombre: "Patada baja",
    potencia: 50,
    precisión: 90,
    tipo: lucha,
    categoría: "físico",
    pp: 20,
    efecto: ["30 retr"]
}
var cantoM = {
    nombre: "Canto mortal",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 5,
    efecto: ["3t muerte"]
}
var contoneo = {
    nombre: "Contoneo",
    potencia: 0,
    precisión: 90,
    tipo: normal,
    categoría: "estado",
    pp: 15,
    efecto: ["subirAx2", "autoConf"]
}
var drenadoras = {
    nombre: "Drenadoras",
    potencia: 0,
    precisión: 90,
    tipo: planta,
    categoría: "estado",
    pp: 10,
    efecto: ["saca 1/8"]
}
var cosquillas = {
    nombre: "Cosquillas",
    potencia: 0,
    precisión: 100,
    tipo: normal,
    categoría: "estado",
    pp: 20,
    efecto: ["bajarD-A"]
}
var recurrente = {
    nombre: "Recurrente",
    potencia: 10,
    precisión: 100,
    tipo: planta,
    categoría: "físico",
    pp: 30,
    efecto: ["2-5v ptxgolpe"]
}
var deteccion = {
    nombre: "Detección",
    potencia: 0,
    precisión: 100,
    tipo: lucha,
    categoría: "estado",
    pp: 5,
    efecto: ["proteccion 50-"]
}
var supers = {
    nombre: "Supersónico",
    potencia: 0,
    precisión: 55,
    tipo: normal,
    categoría: "estado",
    pp: 20,
    efecto: ["confusion"]
}
var bostezo = {
    nombre: "Bostezo",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: ["duerme prox turno"]
}
var divideD = {
    nombre: "Divide dolor",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 20,
    efecto: ["Divide dolor"]
}
var poderOc = {
    nombre: "Divide dolor",
    potencia: 60,
    precisión: 100,
    tipo: normal,
    categoría: "especial",
    pp: 15,
    efecto: ["poderOc"]
}
var contraA = {
    nombre: "Contraataque",
    potencia: 0,
    precisión: 100,
    tipo: lucha,
    categoría: "físico",
    pp: 20,
    efecto: ["devuelve doble fisico"]
}
var mantoE = {
    nombre: "Manto espejo",
    potencia: 0,
    precisión: 100,
    tipo: psiquico,
    categoría: "especial",
    pp: 20,
    efecto: ["devuelve doble especial"]
}
var mismoD = {
    nombre: "Mismo destino",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 15,
    efecto: ["mismoD"]
}
var giroRap = {
    nombre: "Giro rápido",
    potencia: 20,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 40,
    efecto: ["estado2normal"]
}
var venganza = {
    nombre: "Venganza",
    potencia: 20,
    precisión: 100,
    tipo: normal,
    categoría: "físico",
    pp: 40,
    efecto: ["2t x2daño"]
}
var deslumbrar = {
    nombre: "Deslumbrar",
    potencia: 0,
    precisión: 75,
    tipo: normal,
    categoría: "estado",
    pp: 30,
    efecto: [paralizar(100)]
}
var lengue = {
    nombre: "Lengüetazo",
    potencia: 20,
    precisión: 100,
    tipo: fantasma,
    categoría: "físico",
    pp: 30,
    efecto: [paralizar(30)]
}
var garraM = {
    nombre: "Garra metal",
    potencia: 50,
    precisión: 95,
    tipo: acero,
    categoría: "físico",
    pp: 35,
    efecto: ["subirA 10"]
}
var corteF = {
    nombre: "Corte furia",
    potencia: 10,
    precisión: 95,
    tipo: bicho,
    categoría: "físico",
    pp: 20,
    efecto: ["x2 cada vez"]
}
var ronquido = {
    nombre: "Ronquido",
    potencia: 40,
    precisión: 100,
    tipo: normal,
    categoría: "especial",
    pp: 15,
    efecto: ["30 retr"]
}
var nieveP = {
    nombre: "Nieve polvo",
    potencia: 40,
    precisión: 100,
    tipo: hielo,
    categoría: "especial",
    pp: 25,
    efecto: ["10 cong"]
}
var pulpoc = {
    nombre: "Pulpocañón",
    potencia: 65,
    precisión: 85,
    tipo: agua,
    categoría: "especial",
    pp: 10,
    efecto: ["50prec"]
}
var presente = {
    nombre: "Presente",
    potencia: 0,
    precisión: 90,
    tipo: normal,
    categoría: "físico",
    pp: 15,
    efecto: ["presente"]
}
var esquema = {
    nombre: "Esquema",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 1,
    efecto: ["esquema"]
}
var tripleP = {
    nombre: "Triple patada",
    potencia: 10,
    precisión: 90,
    tipo: lucha,
    categoría: "físico",
    pp: 10,
    efecto: ["tripleP"]
}
var batido = {
    nombre: "Batido",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: ["restaura 50%"]
}
var amortiguador = {
    nombre: "Amortiguador",
    potencia: 0,
    precisión: 200,
    tipo: normal,
    categoría: "estado",
    pp: 10,
    efecto: ["restaura 50%"]
}
var venusaur = {
    nivel: 50,
    nombre: "Venusaur",
    tipo: planta,
    tipo2: veneno,
    ata1: hojaAf,
    ata2: bombL,
    ata3: rayoS,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 82,
    dff: 83,
    ats: 100,
    dfs: 100,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 1
}
var charizard = {
    nivel: 50,
    nombre: "Charizard",
    tipo: fuego,
    tipo2: volador,
    ata1: cuch,
    ata2: lanz,
    ata3: garD,
    ata4: golpeA,
    estado: "normal",
    estado2: [],
    ps: 78,
    atf: 84,
    dff: 78,
    ats: 109,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 3,
    eds: 0
}
var blastoise = {
    nivel: 50,
    nombre: "Blastoise",
    tipo: agua,
    tipo2: agua,
    ata1: mord,
    ata2: hidrob,
    ata3: surf,
    ata4: cabezazo,
    estado: "normal",
    estado2: [],
    ps: 79,
    atf: 83,
    dff: 100,
    ats: 85,
    dfs: 105,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 3
}
var butterfree = {
    nivel: 50,
    nombre: "Butterfree",
    tipo: bicho,
    tipo2: volador,
    ata1: tornado,
    ata2: psicorrayo,
    ata3: vientoP,
    ata4: zumbido,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 45,
    dff: 50,
    ats: 90,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 1
}
var beedrill = {
    nivel: 50,
    nombre: "Beedrill",
    tipo: bicho,
    tipo2: veneno,
    ata1: perse,
    ata2: pinM,
    ata3: enfado,
    ata4: esfuerzo,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 90,
    dff: 40,
    ats: 45,
    dfs: 80,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 1
}
var pidgeot = {
    nivel: 50,
    nombre: "Pidgeot",
    tipo: normal,
    tipo2: volador,
    ata1: ataqueAla,
    ata2: ciclon,
    ata3: golpeA,
    ata4: alaAcero,
    estado: "normal",
    estado2: [],
    ps: 83,
    atf: 80,
    dff: 75,
    ats: 70,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var raticate = {
    nivel: 50,
    nombre: "Raticate",
    tipo: normal,
    tipo2: normal,
    ata1: hiperC,
    ata2: trit,
    ata3: superd,
    ata4: esfuerzo,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 81,
    dff: 60,
    ats: 50,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var fearow = {
    nivel: 50,
    nombre: "Fearow",
    tipo: normal,
    tipo2: volador,
    ata1: ataqueRap,
    ata2: perse,
    ata3: golpeA,
    ata4: picoT,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 90,
    dff: 65,
    ats: 61,
    dfs: 61,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var arbok = {
    nivel: 50,
    nombre: "Arbok",
    tipo: veneno,
    tipo2: veneno,
    ata1: trit,
    ata2: acido,
    ata3: colmH,
    ata4: avala,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 95,
    dff: 69,
    ats: 65,
    dfs: 79,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var pikachu = {
    nivel: 50,
    nombre: "Pikachu",
    tipo: electrico,
    tipo2: electrico,
    ata1: rapidez,
    ata2: placajeE,
    ata3: rayo,
    ata4: trueno,
    estado: "normal",
    estado2: [],
    ps: 45,
    atf: 80,
    dff: 50,
    ats: 75,
    dfs: 60,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var raichu = {
    nivel: 50,
    nombre: "Raichu",
    tipo: electrico,
    tipo2: electrico,
    ata1: ataqueRap,
    ata2: rayo,
    ata3: puñoT,
    ata4: trueno,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 90,
    dff: 55,
    ats: 90,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var sandslash = {
    nivel: 50,
    nombre: "Sandslash",
    tipo: tierra,
    tipo2: tierra,
    ata1: bucleA,
    ata2: cuch,
    ata3: excavar,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 100,
    dff: 110,
    ats: 45,
    dfs: 55,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var nidoqueen = {
    nivel: 50,
    nombre: "Nidoqueen",
    tipo: veneno,
    tipo2: tierra,
    ata1: golpeC,
    ata2: dobleP,
    ata3: trit,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 82,
    dff: 87,
    ats: 75,
    dfs: 85,
    eps: 3,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var nidoking = {
    nivel: 50,
    nombre: "Nidoking",
    tipo: veneno,
    tipo2: tierra,
    ata1: golpe,
    ata2: dobleP,
    ata3: megac,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 81,
    atf: 92,
    dff: 77,
    ats: 85,
    dfs: 75,
    eps: 0,
    eaf: 3,
    edf: 0,
    eas: 0,
    eds: 0
}
var clefable = {
    nivel: 50,
    nombre: "Clefable",
    tipo: hada,
    tipo2: hada,
    ata1: dobleB,
    ata2: metron,
    ata3: luzL,
    ata4: puñoM,
    estado: "normal",
    estado2: [],
    ps: 95,
    atf: 70,
    dff: 73,
    ats: 85,
    dfs: 90,
    eps: 3,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var ninetales = {
    nivel: 50,
    nombre: "Ninetales",
    tipo: fuego,
    tipo2: fuego,
    ata1: ataqueRap,
    ata2: fuegoF,
    ata3: lanz,
    ata4: giroF,
    estado: "normal",
    estado2: [],
    ps: 73,
    atf: 76,
    dff: 75,
    ats: 81,
    dfs: 100,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 1
}
var wigglytuff = {
    nivel: 50,
    nombre: "Wigglytuff",
    tipo: normal,
    tipo2: hada,
    ata1: dobleB,
    ata2: golpeC,
    ata3: vozarron,
    ata4: dobleF,
    estado: "normal",
    estado2: [],
    ps: 140,
    atf: 70,
    dff: 45,
    ats: 75,
    dfs: 50,
    eps: 3,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var vileplume = {
    nivel: 50,
    nombre: "Vileplume",
    tipo: planta,
    tipo2: veneno,
    ata1: polvoV,
    ata2: paraliz,
    ata3: somn,
    ata4: rayoS,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 80,
    dff: 85,
    ats: 100,
    dfs: 90,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 3,
    eds: 0
}
var parasect = {
    nivel: 50,
    nombre: "Parasect",
    tipo: bicho,
    tipo2: planta,
    ata1: espora,
    ata2: cuch,
    ata3: gigad,
    ata4: aromaterapia,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 95,
    dff: 80,
    ats: 60,
    dfs: 80,
    eps: 0,
    eaf: 2,
    edf: 1,
    eas: 0,
    eds: 0
}
var venomoth = {
    nivel: 50,
    nombre: "Venomoth",
    tipo: bicho,
    tipo2: veneno,
    ata1: chupavidas,
    ata2: psicorrayo,
    ata3: somn,
    ata4: psiquic,
    estado: "normal",
    estado2: [],
    ps: 70,
    atf: 65,
    dff: 60,
    ats: 90,
    dfs: 75,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 1,
    eds: 0
}
var dugtrio = {
    nivel: 50,
    nombre: "Dugtrio",
    tipo: tierra,
    tipo2: tierra,
    ata1: ataqueArena,
    ata2: excavar,
    ata3: cuch,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 35,
    atf: 100,
    dff: 50,
    ats: 50,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var persian = {
    nivel: 50,
    nombre: "Persian",
    tipo: normal,
    tipo2: normal,
    ata1: rapidez,
    ata2: finta,
    ata3: golpesF,
    ata4: cuch,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 70,
    dff: 60,
    ats: 65,
    dfs: 65,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var golduck = {
    nivel: 50,
    nombre: "Golduck",
    tipo: agua,
    tipo2: agua,
    ata1: confusion,
    ata2: hidrop,
    ata3: golpesF,
    ata4: amnesia,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 82,
    dff: 78,
    ats: 95,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var primeape = {
    nivel: 50,
    nombre: "Primeape",
    tipo: lucha,
    tipo2: lucha,
    ata1: movS,
    ata2: tajoC,
    ata3: chirrido,
    ata4: golpe,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 105,
    dff: 60,
    ats: 60,
    dfs: 70,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var arcanine = {
    nivel: 50,
    nombre: "Arcanine",
    tipo: fuego,
    tipo2: fuego,
    ata1: colmilloI,
    ata2: derribo,
    ata3: ruedaF,
    ata4: velX,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 110,
    dff: 80,
    ats: 100,
    dfs: 80,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var poliwrath = {
    nivel: 50,
    nombre: "Poliwrath",
    tipo: agua,
    tipo2: lucha,
    ata1: hipnosis,
    ata2: pistolaA,
    ata3: sumision,
    ata4: puñoD,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 85,
    dff: 95,
    ats: 70,
    dfs: 90,
    eps: 0,
    eaf: 0,
    edf: 3,
    eas: 0,
    eds: 0
}
var alakazam = {
    nivel: 50,
    nombre: "Alakazam",
    tipo: psiquico,
    tipo2: psiquico,
    ata1: kinetico,
    ata2: recuperacion,
    ata3: psiquic,
    ata4: reflejo,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 50,
    dff: 45,
    ats: 135,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 3,
    eds: 0
}
var machamp = {
    nivel: 50,
    nombre: "Machamp",
    tipo: lucha,
    tipo2: lucha,
    ata1: tiroV,
    ata2: fuerza,
    ata3: sumision,
    ata4: tajoC,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 130,
    dff: 80,
    ats: 65,
    dfs: 85,
    eps: 0,
    eaf: 3,
    edf: 0,
    eas: 0,
    eds: 0
}
var victreebel = {
    nivel: 50,
    nombre: "Victreebel",
    tipo: planta,
    tipo2: veneno,
    ata1: constriccion,
    ata2: polvoV,
    ata3: somn,
    ata4: hojaAg,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 105,
    dff: 65,
    ats: 100,
    dfs: 60,
    eps: 0,
    eaf: 3,
    edf: 0,
    eas: 0,
    eds: 0
}
var tentacruel = {
    nivel: 50,
    nombre: "Tentacruel",
    tipo: agua,
    tipo2: veneno,
    ata1: pistolaA,
    ata2: constriccion,
    ata3: chirrido,
    ata4: hidrob,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 70,
    dff: 65,
    ats: 80,
    dfs: 120,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var golem = {
    nivel: 50,
    nombre: "Golem",
    tipo: roca,
    tipo2: tierra,
    ata1: desenrollar,
    ata2: pedrada,
    ata3: terr,
    ata4: explosion,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 110,
    dff: 130,
    ats: 55,
    dfs: 65,
    eps: 0,
    eaf: 0,
    edf: 3,
    eas: 0,
    eds: 0
}
var rapidash = {
    nivel: 50,
    nombre: "Rapidash",
    tipo: fuego,
    tipo2: fuego,
    ata1: giroF,
    ata2: derribo,
    ata3: ataqueF,
    ata4: bote,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 100,
    dff: 70,
    ats: 80,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var magneton = {
    nivel: 50,
    nombre: "Magneton",
    tipo: electrico,
    tipo2: acero,
    ata1: chispa,
    ata2: rapidez,
    ata3: fijarB,
    ata4: electrocañon,
    estado: "normal",
    estado2: [],
    ps: 50,
    atf: 60,
    dff: 95,
    ats: 120,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var farfetchd = {
    nivel: 50,
    nombre: "Farfetch'd",
    tipo: normal,
    tipo2: volador,
    ata1: golpeA,
    ata2: danzaE,
    ata3: cuch,
    ata4: falsot,
    estado: "normal",
    estado2: [],
    ps: 52,
    atf: 65,
    dff: 55,
    ats: 58,
    dfs: 62,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 0,
    eds: 0
}
var dodrio = {
    nivel: 50,
    nombre: "Dodrio",
    tipo: normal,
    tipo2: volador,
    ata1: furia,
    ata2: alboroto,
    ata3: tria,
    ata4: picoT,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 110,
    dff: 70,
    ats: 60,
    dfs: 60,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var dewgong = {
    nivel: 50,
    nombre: "Dewgong",
    tipo: agua,
    tipo2: hielo,
    ata1: rayoAu,
    ata2: frioP,
    ata3: descanso,
    ata4: derribo,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 70,
    dff: 80,
    ats: 70,
    dfs: 95,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var muk = {
    nivel: 50,
    nombre: "Muk",
    tipo: veneno,
    tipo2: veneno,
    ata1: chirrido,
    ata2: residuos,
    ata3: armaduraA,
    ata4: bombL,
    estado: "normal",
    estado2: [],
    ps: 105,
    atf: 105,
    dff: 75,
    ats: 65,
    dfs: 100,
    eps: 1,
    eaf: 1,
    edf: 0,
    eas: 0,
    eds: 0
}
var cloyster = {
    nivel: 50,
    nombre: "Cloyster",
    tipo: agua,
    tipo2: hielo,
    ata1: refugio,
    ata2: tenaza,
    ata3: rayoAu,
    ata4: clavoC,
    estado: "normal",
    estado2: [],
    ps: 50,
    atf: 95,
    dff: 180,
    ats: 85,
    dfs: 45,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var gengar = {
    nivel: 50,
    nombre: "Gengar",
    tipo: fantasma,
    tipo2: veneno,
    ata1: hipnosis,
    ata2: puñoS,
    ata3: bolaS,
    ata4: comeSu,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 65,
    dff: 60,
    ats: 130,
    dfs: 75,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 3,
    eds: 0
}
var onix = {
    nivel: 50,
    nombre: "Onix",
    tipo: roca,
    tipo2: tierra,
    ata1: atizar,
    ata2: fortaleza,
    ata3: colaF,
    ata4: bucleA,
    estado: "normal",
    estado2: [],
    ps: 35,
    atf: 45,
    dff: 160,
    ats: 30,
    dfs: 45,
    eps: 0,
    eaf: 0,
    edf: 1,
    eas: 0,
    eds: 0
}
var hypno = {
    nivel: 50,
    nombre: "Hypno",
    tipo: psiquico,
    tipo2: psiquico,
    ata1: hipnosis,
    ata2: golpeCa,
    ata3: psiquic,
    ata4: meditacion,
    estado: "normal",
    estado2: [],
    ps: 85,
    atf: 73,
    dff: 70,
    ats: 73,
    dfs: 115,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var kingler = {
    nivel: 50,
    nombre: "Kingler",
    tipo: agua,
    tipo2: agua,
    ata1: pisoton,
    ata2: proteccion,
    ata3: guillotina,
    ata4: martillazo,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 130,
    dff: 115,
    ats: 50,
    dfs: 50,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var electrode = {
    nivel: 50,
    nombre: "Electrode",
    tipo: electrico,
    tipo2: electrico,
    ata1: desenrollar,
    ata2: rayo,
    ata3: rapidez,
    ata4: explosion,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 50,
    dff: 70,
    ats: 80,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var exeggutor = {
    nivel: 50,
    nombre: "Exeggutor",
    tipo: planta,
    tipo2: psiquico,
    ata1: hipnosis,
    ata2: confusion,
    ata3: pisoton,
    ata4: bombaH,
    estado: "normal",
    estado2: [],
    ps: 95,
    atf: 95,
    dff: 85,
    ats: 125,
    dfs: 65,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var marowak = {
    nivel: 50,
    nombre: "Marowak",
    tipo: tierra,
    tipo2: tierra,
    ata1: huesoP,
    ata2: golpe,
    ata3: huesomerang,
    ata4: ataqueO,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 80,
    dff: 110,
    ats: 50,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var hitmonlee = {
    nivel: 50,
    nombre: "Hitmonlee",
    tipo: lucha,
    tipo2: lucha,
    ata1: patadaS,
    ata2: patadaSA,
    ata3: aguante,
    ata4: megapatada,
    estado: "normal",
    estado2: [],
    ps: 50,
    atf: 120,
    dff: 53,
    ats: 35,
    dfs: 110,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var hitmonchan = {
    nivel: 50,
    nombre: "Hitmonchan",
    tipo: lucha,
    tipo2: lucha,
    ata1: puñoT,
    ata2: puñoH,
    ata3: puñoF,
    ata4: megapuño,
    estado: "normal",
    estado2: [],
    ps: 50,
    atf: 105,
    dff: 79,
    ats: 35,
    dfs: 110,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var lickitung = {
    nivel: 50,
    nombre: "Lickitung",
    tipo: normal,
    tipo2: normal,
    ata1: pisoton,
    ata2: constriccion,
    ata3: atizar,
    ata4: chirrido,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 55,
    dff: 75,
    ats: 60,
    dfs: 75,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var weezing = {
    nivel: 50,
    nombre: "Weezing",
    tipo: veneno,
    tipo2: veneno,
    ata1: polucion,
    ata2: residuos,
    ata3: pantallaH,
    ata4: explosion,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 90,
    dff: 120,
    ats: 85,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var rhydon = {
    nivel: 50,
    nombre: "Rhydon",
    tipo: tierra,
    tipo2: roca,
    ata1: ataqueF,
    ata2: pedrada,
    ata3: perforador,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 105,
    atf: 130,
    dff: 120,
    ats: 45,
    dfs: 45,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var tangela = {
    nivel: 50,
    nombre: "Tangela",
    tipo: planta,
    tipo2: planta,
    ata1: megaa,
    ata2: paraliz,
    ata3: somn,
    ata4: atizar,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 55,
    dff: 115,
    ats: 100,
    dfs: 40,
    eps: 0,
    eaf: 0,
    edf: 1,
    eas: 0,
    eds: 0
}
var kangaskhan = {
    nivel: 50,
    nombre: "Kangaskhan",
    tipo: normal,
    tipo2: normal,
    ata1: puñoCo,
    ata2: megapuño,
    ata3: puñoMa,
    ata4: inversion,
    estado: "normal",
    estado2: [],
    ps: 105,
    atf: 95,
    dff: 80,
    ats: 40,
    dfs: 80,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var seaking = {
    nivel: 50,
    nombre: "Seaking",
    tipo: agua,
    tipo2: agua,
    ata1: cornada,
    ata2: ataqueF,
    ata3: cascada,
    ata4: perforador,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 92,
    dff: 65,
    ats: 65,
    dfs: 80,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var starmie = {
    nivel: 50,
    nombre: "Starmie",
    tipo: agua,
    tipo2: psiquico,
    ata1: rapidez,
    ata2: recuperacion,
    ata3: rayoBu,
    ata4: hidrob,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 75,
    dff: 85,
    ats: 100,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var mrMime = {
    nivel: 50,
    nombre: "Mr. Mime",
    tipo: psiquico,
    tipo2: hada,
    ata1: reflejo,
    ata2: dobleB,
    ata3: psicorrayo,
    ata4: psiquic,
    estado: "normal",
    estado2: [],
    ps: 40,
    atf: 45,
    dff: 65,
    ats: 100,
    dfs: 120,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var jynx = {
    nivel: 50,
    nombre: "Jynx",
    tipo: hielo,
    tipo2: psiquico,
    ata1: besoA,
    ata2: dobleB,
    ata3: puñoH,
    ata4: golpeC,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 50,
    dff: 35,
    ats: 115,
    dfs: 95,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var electabuzz = {
    nivel: 50,
    nombre: "Electabuzz",
    tipo: electrico,
    tipo2: electrico,
    ata1: chirrido,
    ata2: puñoT,
    ata3: rayo,
    ata4: pantallaLuz,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 83,
    dff: 57,
    ats: 95,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var magmar = {
    nivel: 50,
    nombre: "Magmar",
    tipo: fuego,
    tipo2: fuego,
    ata1: puñoF,
    ata2: pantallaH,
    ata3: lanz,
    ata4: rayoCo,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 95,
    dff: 57,
    ats: 100,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var pinsir = {
    nivel: 50,
    nombre: "Pinsir",
    tipo: bicho,
    tipo2: bicho,
    ata1: guillotina,
    ata2: sumision,
    ata3: fortaleza,
    ata4: cuch,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 125,
    dff: 100,
    ats: 55,
    dfs: 70,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var tauros = {
    nivel: 50,
    nombre: "Tauros",
    tipo: normal,
    tipo2: normal,
    ata1: cornada,
    ata2: descanso,
    ata3: golpe,
    ata4: derribo,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 100,
    dff: 95,
    ats: 40,
    dfs: 70,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 0,
    eds: 0
}
var gyarados = {
    nivel: 50,
    nombre: "Gyarados",
    tipo: agua,
    tipo2: volador,
    ata1: furiaDr,
    ata2: ciclon,
    ata3: hidrob,
    ata4: hiperrayo,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 100,
    dff: 95,
    ats: 40,
    dfs: 70,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 0,
    eds: 0
}
var lapras = {
    nivel: 50,
    nombre: "Lapras",
    tipo: agua,
    tipo2: hielo,
    ata1: rayoCo,
    ata2: rayoH,
    ata3: veloS,
    ata4: hidrob,
    estado: "normal",
    estado2: [],
    ps: 130,
    atf: 85,
    dff: 80,
    ats: 85,
    dfs: 95,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var ditto = {
    nivel: 50,
    nombre: "Ditto",
    tipo: normal,
    tipo2: normal,
    ata1: transformacion,
    ata2: transformacion,
    ata3: transformacion,
    ata4: transformacion,
    estado: "normal",
    estado2: [],
    ps: 48,
    atf: 48,
    dff: 48,
    ats: 48,
    dfs: 48,
    eps: 1,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var vaporeon = {
    nivel: 50,
    nombre: "Vaporeon",
    tipo: agua,
    tipo2: agua,
    ata1: ataqueRap,
    ata2: pistolaA,
    ata3: mord,
    ata4: rayoAu,
    estado: "normal",
    estado2: [],
    ps: 130,
    atf: 65,
    dff: 60,
    ats: 110,
    dfs: 95,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var jolteon = {
    nivel: 50,
    nombre: "Jolteon",
    tipo: electrico,
    tipo2: electrico,
    ata1: ataqueRap,
    ata2: impact,
    ata3: ondaT,
    ata4: pinM,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 65,
    dff: 60,
    ats: 110,
    dfs: 95,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var flareon = {
    nivel: 50,
    nombre: "Flareon",
    tipo: fuego,
    tipo2: fuego,
    ata1: ataqueRap,
    ata2: ascuas,
    ata3: giroF,
    ata4: polucion,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 130,
    dff: 60,
    ats: 95,
    dfs: 110,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var omastar = {
    nivel: 50,
    nombre: "Omastar",
    tipo: roca,
    tipo2: agua,
    ata1: cornada,
    ata2: proteccion,
    ata3: clavoC,
    ata4: hidrob,
    estado: "normal",
    estado2: [],
    ps: 70,
    atf: 60,
    dff: 125,
    ats: 115,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var kabutops = {
    nivel: 50,
    nombre: "Kabutops",
    tipo: roca,
    tipo2: agua,
    ata1: disparoL,
    ata2: ataqueArena,
    ata3: aguante,
    ata4: cuch,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 115,
    dff: 105,
    ats: 65,
    dfs: 70,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var aerodactyl = {
    nivel: 50,
    nombre: "Aerodactyl",
    tipo: roca,
    tipo2: volador,
    ata1: poderP,
    ata2: mord,
    ata3: derribo,
    ata4: hiperrayo,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 105,
    dff: 65,
    ats: 60,
    dfs: 75,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var snorlax = {
    nivel: 50,
    nombre: "Snorlax",
    tipo: normal,
    tipo2: normal,
    ata1: descanso,
    ata2: golpeC,
    ata3: desenrollar,
    ata4: dobleF,
    estado: "normal",
    estado2: [],
    ps: 160,
    atf: 110,
    dff: 65,
    ats: 65,
    dfs: 110,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var dragonite = {
    nivel: 50,
    nombre: "Dragonite",
    tipo: dragon,
    tipo2: volador,
    ata1: ciclon,
    ata2: atizar,
    ata3: furiaDr,
    ata4: veloS,
    estado: "normal",
    estado2: [],
    ps: 91,
    atf: 134,
    dff: 95,
    ats: 100,
    dfs: 100,
    eps: 0,
    eaf: 3,
    edf: 0,
    eas: 0,
    eds: 0
}
var meganium = {
    nivel: 50,
    nombre: "Meganium",
    tipo: planta,
    tipo2: planta,
    ata1: hojaAf,
    ata2: polvoV,
    ata3: golpeC,
    ata4: pantallaLuz,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 82,
    dff: 100,
    ats: 83,
    dfs: 100,
    eps: 0,
    eaf: 0,
    edf: 1,
    eas: 0,
    eds: 2
}
var typhlosion = {
    nivel: 50,
    nombre: "Typhlosion",
    tipo: fuego,
    tipo2: fuego,
    ata1: ataqueRap,
    ata2: ruedaF,
    ata3: rapidez,
    ata4: lanz,
    estado: "normal",
    estado2: [],
    ps: 78,
    atf: 84,
    dff: 78,
    ats: 109,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 3,
    eds: 0
}
var feraligatr = {
    nivel: 50,
    nombre: "Feraligatr",
    tipo: agua,
    tipo2: agua,
    ata1: pistolaA,
    ata2: mord,
    ata3: cuch,
    ata4: chirrido,
    estado: "normal",
    estado2: [],
    ps: 85,
    atf: 105,
    dff: 100,
    ats: 79,
    dfs: 83,
    eps: 0,
    eaf: 2,
    edf: 1,
    eas: 0,
    eds: 0
}
var furret = {
    nivel: 50,
    nombre: "Furret",
    tipo: normal,
    tipo2: normal,
    ata1: golpesF,
    ata2: atizar,
    ata3: descanso,
    ata4: amnesia,
    estado: "normal",
    estado2: [],
    ps: 85,
    atf: 76,
    dff: 64,
    ats: 45,
    dfs: 55,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var noctowl = {
    nivel: 50,
    nombre: "Noctowl",
    tipo: normal,
    tipo2: volador,
    ata1: hipnosis,
    ata2: reflejo,
    ata3: derribo,
    ata4: confusion,
    estado: "normal",
    estado2: [],
    ps: 100,
    atf: 50,
    dff: 50,
    ats: 76,
    dfs: 96,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var ledian = {
    nivel: 50,
    nombre: "Ledian",
    tipo: bicho,
    tipo2: volador,
    ata1: pantallaLuz,
    ata2: reflejo,
    ata3: veloS,
    ata4: rapidez,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 35,
    dff: 50,
    ats: 55,
    dfs: 110,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var ariados = {
    nivel: 50,
    nombre: "Ariados",
    tipo: bicho,
    tipo2: veneno,
    ata1: restriccion,
    ata2: tinieblas,
    ata3: chupavidas,
    ata4: golpesF,
    estado: "normal",
    estado2: [],
    ps: 70,
    atf: 90,
    dff: 70,
    ats: 60,
    dfs: 60,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var crobat = {
    nivel: 50,
    nombre: "Crobat",
    tipo: veneno,
    tipo2: volador,
    ata1: ataqueAla,
    ata2: rayoCo,
    ata3: aireAf,
    ata4: colmV,
    estado: "normal",
    estado2: [],
    ps: 100,
    atf: 50,
    dff: 50,
    ats: 76,
    dfs: 96,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var lanturn = {
    nivel: 50,
    nombre: "Lanturn",
    tipo: agua,
    tipo2: electrico,
    ata1: chispa,
    ata2: rayoCo,
    ata3: derribo,
    ata4: hidrob,
    estado: "normal",
    estado2: [],
    ps: 125,
    atf: 58,
    dff: 58,
    ats: 76,
    dfs: 76,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var togetic = {
    nivel: 50,
    nombre: "Togetic",
    tipo: hada,
    tipo2: volador,
    ata1: metron,
    ata2: besoD,
    ata3: veloS,
    ata4: dobleF,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 40,
    dff: 85,
    ats: 80,
    dfs: 105,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var xatu = {
    nivel: 50,
    nombre: "Xatu",
    tipo: psiquico,
    tipo2: volador,
    ata1: tinieblas,
    ata2: deseo,
    ata3: premonicion,
    ata4: rayoCo,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 75,
    dff: 70,
    ats: 95,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 1,
    eds: 0
}
var ampharos = {
    nivel: 50,
    nombre: "Ampharos",
    tipo: electrico,
    tipo2: electrico,
    ata1: impact,
    ata2: ondaT,
    ata3: puñoT,
    ata4: pantallaLuz,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 75,
    dff: 75,
    ats: 115,
    dfs: 90,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 3,
    eds: 0
}
var bellossom = {
    nivel: 50,
    nombre: "Bellossom",
    tipo: planta,
    tipo2: planta,
    ata1: dulceA,
    ata2: paraliz,
    ata3: hojaMa,
    ata4: danzaP,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 80,
    dff: 85,
    ats: 90,
    dfs: 100,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 3
}
var azumarill = {
    nivel: 50,
    nombre: "Azumarill",
    tipo: agua,
    tipo2: hada,
    ata1: pistolaA,
    ata2: desenrollar,
    ata3: rayoBu,
    ata4: dobleF,
    estado: "normal",
    estado2: [],
    ps: 100,
    atf: 50,
    dff: 80,
    ats: 50,
    dfs: 80,
    eps: 3,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var sudowoodo = {
    nivel: 50,
    nombre: "Sudowoodo",
    tipo: roca,
    tipo2: roca,
    ata1: patadaBa,
    ata2: avala,
    ata3: finta,
    ata4: atizar,
    estado: "normal",
    estado2: [],
    ps: 70,
    atf: 100,
    dff: 115,
    ats: 30,
    dfs: 65,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var politoed = {
    nivel: 50,
    nombre: "Politoed",
    tipo: agua,
    tipo2: agua,
    ata1: hipnosis,
    ata2: pistolaA,
    ata3: cantoM,
    ata4: contoneo,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 75,
    dff: 75,
    ats: 90,
    dfs: 100,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 3
}
var jumpluff = {
    nivel: 50,
    nombre: "Jumpluff",
    tipo: planta,
    tipo2: volador,
    ata1: paraliz,
    ata2: somn,
    ata3: drenadoras,
    ata4: megaa,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 55,
    dff: 70,
    ats: 55,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 3
}
var aipom = {
    nivel: 50,
    nombre: "Aipom",
    tipo: normal,
    tipo2: normal,
    ata1: golpesF,
    ata2: cosquillas,
    ata3: rapidez,
    ata4: chirrido,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 70,
    dff: 55,
    ats: 40,
    dfs: 55,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var sunflora = {
    nivel: 50,
    nombre: "Sunflora",
    tipo: planta,
    tipo2: planta,
    ata1: hojaAf,
    ata2: recurrente,
    ata3: danzaP,
    ata4: rayoS,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 75,
    dff: 55,
    ats: 105,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var yanma = {
    nivel: 50,
    nombre: "Yanma",
    tipo: bicho,
    tipo2: volador,
    ata1: deteccion,
    ata2: supers,
    ata3: rapidez,
    ata4: chirrido,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 65,
    dff: 45,
    ats: 75,
    dfs: 45,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var quagsire = {
    nivel: 50,
    nombre: "Quagsire",
    tipo: agua,
    tipo2: tierra,
    ata1: disparoL,
    ata2: amnesia,
    ata3: bostezo,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 95,
    atf: 85,
    dff: 85,
    ats: 65,
    dfs: 65,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var espeon = {
    nivel: 50,
    nombre: "Espeon",
    tipo: psiquico,
    tipo2: psiquico,
    ata1: ataqueRap,
    ata2: rapidez,
    ata3: psicorrayo,
    ata4: psiquic,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 65,
    dff: 60,
    ats: 130,
    dfs: 95,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var umbreon = {
    nivel: 50,
    nombre: "Umbreon",
    tipo: siniestro,
    tipo2: siniestro,
    ata1: ataqueRap,
    ata2: rayoCo,
    ata3: finta,
    ata4: chirrido,
    estado: "normal",
    estado2: [],
    ps: 95,
    atf: 65,
    dff: 110,
    ats: 60,
    dfs: 130,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var murkrow = {
    nivel: 50,
    nombre: "Murkrow",
    tipo: siniestro,
    tipo2: volador,
    ata1: perse,
    ata2: ataqueAla,
    ata3: tinieblas,
    ata4: finta,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 85,
    dff: 42,
    ats: 85,
    dfs: 42,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var slowking = {
    nivel: 50,
    nombre: "Slowking",
    tipo: agua,
    tipo2: psiquico,
    ata1: confusion,
    ata2: golpeCa,
    ata3: contoneo,
    ata4: psiquic,
    estado: "normal",
    estado2: [],
    ps: 95,
    atf: 75,
    dff: 80,
    ats: 100,
    dfs: 110,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 3
}
var misdreavus = {
    nivel: 50,
    nombre: "Misdreavus",
    tipo: fantasma,
    tipo2: fantasma,
    ata1: rayoCo,
    ata2: psicorrayo,
    ata3: divideD,
    ata4: cantoM,
    estado: "normal",
    estado2: [],
    ps: 60,
    atf: 60,
    dff: 60,
    ats: 85,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 1,
    eds: 1
}
var unown = {
    nivel: 50,
    nombre: "Unown",
    tipo: psiquico,
    tipo2: psiquico,
    ata1: poderOc,
    ata2: poderOc,
    ata3: poderOc,
    ata4: poderOc,
    estado: "normal",
    estado2: [],
    ps: 48,
    atf: 72,
    dff: 48,
    ats: 72,
    dfs: 48,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 1,
    eds: 0
}
var wobbuffet = {
    nivel: 50,
    nombre: "Wobbuffet",
    tipo: psiquico,
    tipo2: psiquico,
    ata1: contraA,
    ata2: mantoE,
    ata3: veloS,
    ata4: mismoD,
    estado: "normal",
    estado2: [],
    ps: 190,
    atf: 33,
    dff: 58,
    ats: 33,
    dfs: 58,
    eps: 2,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var girafarig = {
    nivel: 50,
    nombre: "Girafarig",
    tipo: normal,
    tipo2: psiquico,
    ata1: confusion,
    ata2: pisoton,
    ata3: psicorrayo,
    ata4: trit,
    estado: "normal",
    estado2: [],
    ps: 70,
    atf: 80,
    dff: 65,
    ats: 90,
    dfs: 65,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var forretress = {
    nivel: 50,
    nombre: "Forretress",
    tipo: bicho,
    tipo2: acero,
    ata1: derribo,
    ata2: giroRap,
    ata3: venganza,
    ata4: explosion,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 90,
    dff: 140,
    ats: 60,
    dfs: 60,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var dunsparce = {
    nivel: 50,
    nombre: "Dunsparce",
    tipo: normal,
    tipo2: normal,
    ata1: deslumbrar,
    ata2: perse,
    ata3: chirrido,
    ata4: derribo,
    estado: "normal",
    estado2: [],
    ps: 100,
    atf: 70,
    dff: 70,
    ats: 65,
    dfs: 65,
    eps: 1,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var gligar = {
    nivel: 50,
    nombre: "Gligar",
    tipo: tierra,
    tipo2: volador,
    ata1: finta,
    ata2: cuch,
    ata3: chirrido,
    ata4: guillotina,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 75,
    dff: 105,
    ats: 35,
    dfs: 65,
    eps: 0,
    eaf: 0,
    edf: 1,
    eas: 0,
    eds: 0
}
var steelix = {
    nivel: 50,
    nombre: "Steelix",
    tipo: acero,
    tipo2: tierra,
    ata1: furia, //tormentaA
    ata2: atizar,
    ata3: colaF,
    ata4: trit,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 85,
    dff: 200,
    ats: 55,
    dfs: 65,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var granbull = {
    nivel: 50,
    nombre: "Granbull",
    tipo: hada,
    tipo2: hada,
    ata1: mord,
    ata2: lengue,
    ata3: furia,
    ata4: derribo,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 120,
    dff: 75,
    ats: 60,
    dfs: 60,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var qwilfish = {
    nivel: 50,
    nombre: "Qwilfish",
    tipo: agua,
    tipo2: veneno,
    ata1: pistolaA,
    ata2: pinM,
    ata3: derribo,
    ata4: hidrob,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 95,
    dff: 75,
    ats: 55,
    dfs: 55,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 0,
    eds: 0
}
var scizor = {
    nivel: 50,
    nombre: "Scizor",
    tipo: bicho,
    tipo2: acero,
    ata1: garraM,
    ata2: cuch,
    ata3: danzaE,
    ata4: corteF,
    estado: "normal",
    estado2: [],
    ps: 70,
    atf: 130,
    dff: 100,
    ats: 55,
    dfs: 80,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var shuckle = {
    nivel: 50,
    nombre: "Shuckle",
    tipo: bicho,
    tipo2: roca,
    ata1: constriccion,
    ata2: veloS,
    ata3: venganza,
    ata4: descanso,
    estado: "normal",
    estado2: [],
    ps: 20,
    atf: 10,
    dff: 230,
    ats: 10,
    dfs: 230,
    eps: 0,
    eaf: 0,
    edf: 1,
    eas: 0,
    eds: 1
}
var heracross = {
    nivel: 50,
    nombre: "Heracross",
    tipo: bicho,
    tipo2: lucha,
    ata1: contraA,
    ata2: derribo,
    ata3: inversion,
    ata4: megac,
    estado: "normal",
    estado2: [],
    ps: 80,
    atf: 125,
    dff: 75,
    ats: 40,
    dfs: 95,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var sneasel = {
    nivel: 50,
    nombre: "Sneasel",
    tipo: siniestro,
    tipo2: hielo,
    ata1: chirrido,
    ata2: finta,
    ata3: golpesF,
    ata4: cuch,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 95,
    dff: 55,
    ats: 35,
    dfs: 75,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var ursaring = {
    nivel: 50,
    nombre: "Ursaring",
    tipo: normal,
    tipo2: normal,
    ata1: finta,
    ata2: descanso,
    ata3: cuch,
    ata4: ronquido,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 130,
    dff: 75,
    ats: 75,
    dfs: 75,
    eps: 0,
    eaf: 2,
    edf: 0,
    eas: 0,
    eds: 0
}
var magcargo = {
    nivel: 50,
    nombre: "Magcargo",
    tipo: fuego,
    tipo2: roca,
    ata1: fortaleza,
    ata2: amnesia,
    ata3: lanz,
    ata4: avala,
    estado: "normal",
    estado2: [],
    ps: 50,
    atf: 50,
    dff: 120,
    ats: 80,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var piloswine = {
    nivel: 50,
    nombre: "Piloswine",
    tipo: hielo,
    tipo2: tierra,
    ata1: nieveP,
    ata2: aguante,
    ata3: derribo,
    ata4: ataqueF,
    estado: "normal",
    estado2: [],
    ps: 100,
    atf: 100,
    dff: 80,
    ats: 60,
    dfs: 60,
    eps: 1,
    eaf: 1,
    edf: 0,
    eas: 0,
    eds: 0
}
var corsola = {
    nivel: 50,
    nombre: "Corsola",
    tipo: agua,
    tipo2: roca,
    ata1: rayoBu,
    ata2: clavoC,
    ata3: mantoE,
    ata4: poderP,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 55,
    dff: 85,
    ats: 65,
    dfs: 85,
    eps: 0,
    eaf: 0,
    edf: 1,
    eas: 0,
    eds: 1
}
var octillery = {
    nivel: 50,
    nombre: "Octillery",
    tipo: agua,
    tipo2: agua,
    ata1: rayoAu,
    ata2: rayoBu,
    ata3: pulpoc,
    ata4: rayoH,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 105,
    dff: 75,
    ats: 105,
    dfs: 75,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 1,
    eds: 0
}
var delibird = {
    nivel: 50,
    nombre: "Delibird",
    tipo: hielo,
    tipo2: volador,
    ata1: presente,
    ata2: presente,
    ata3: presente,
    ata4: presente,
    estado: "normal",
    estado2: [],
    ps: 45,
    atf: 55,
    dff: 45,
    ats: 65,
    dfs: 45,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var mantine = {
    nivel: 50,
    nombre: "Mantine",
    tipo: agua,
    tipo2: volador,
    ata1: derribo,
    ata2: ataqueAla,
    ata3: hidrop,
    ata4: rayoCo,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 40,
    dff: 70,
    ats: 80,
    dfs: 140,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var skarmory = {
    nivel: 50,
    nombre: "Skarmory",
    tipo: acero,
    tipo2: volador,
    ata1: rapidez,
    ata2: ataqueF,
    ata3: aireAf,
    ata4: alaAcero,
    estado: "normal",
    estado2: [],
    ps: 65,
    atf: 80,
    dff: 140,
    ats: 40,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var houndoom = {
    nivel: 50,
    nombre: "Houndoom",
    tipo: siniestro,
    tipo2: fuego,
    ata1: polucion,
    ata2: mord,
    ata3: finta,
    ata4: lanz,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 90,
    dff: 50,
    ats: 110,
    dfs: 80,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 2,
    eds: 0
}
var kingdra = {
    nivel: 50,
    nombre: "Kingdra",
    tipo: agua,
    tipo2: dragon,
    ata1: pantallaH,
    ata2: pistolaA,
    ata3: ciclon,
    ata4: hidrob,
    estado: "normal",
    estado2: [],
    ps: 75,
    atf: 95,
    dff: 95,
    ats: 95,
    dfs: 95,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 1,
    eds: 1
}
var donphan = {
    nivel: 50,
    nombre: "Donphan",
    tipo: tierra,
    tipo2: tierra,
    ata1: ataqueF,
    ata2: desenrollar,
    ata3: giroRap,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 90,
    atf: 120,
    dff: 120,
    ats: 60,
    dfs: 60,
    eps: 0,
    eaf: 1,
    edf: 1,
    eas: 0,
    eds: 0
}
var porygon2 = {
    nivel: 50,
    nombre: "Porygon2",
    tipo: normal,
    tipo2: normal,
    ata1: recuperacion,
    ata2: fijarB,
    ata3: tria,
    ata4: electrocañon,
    estado: "normal",
    estado2: [],
    ps: 85,
    atf: 80,
    dff: 90,
    ats: 105,
    dfs: 95,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 1,
    eds: 0
}
var stantler = {
    nivel: 50,
    nombre: "Stantler",
    tipo: normal,
    tipo2: normal,
    ata1: pisoton,
    ata2: ataqueArena,
    ata3: derribo,
    ata4: rayoCo,
    estado: "normal",
    estado2: [],
    ps: 73,
    atf: 95,
    dff: 62,
    ats: 85,
    dfs: 65,
    eps: 0,
    eaf: 1,
    edf: 0,
    eas: 0,
    eds: 0
}
var smeargle = {
    nivel: 50,
    nombre: "Smeargle",
    tipo: normal,
    tipo2: normal,
    ata1: esquema,
    ata2: esquema,
    ata3: esquema,
    ata4: esquema,
    estado: "normal",
    estado2: [],
    ps: 55,
    atf: 20,
    dff: 35,
    ats: 20,
    dfs: 45,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var hitmontop = {
    nivel: 50,
    nombre: "Hitmontop",
    tipo: lucha,
    tipo2: lucha,
    ata1: contraA,
    ata2: deteccion,
    ata3: tripleP,
    ata4: esfuerzo,
    estado: "normal",
    estado2: [],
    ps: 50,
    atf: 95,
    dff: 95,
    ats: 35,
    dfs: 110,
    eps: 0,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 2
}
var miltank = {
    nivel: 50,
    nombre: "Miltank",
    tipo: normal,
    tipo2: normal,
    ata1: batido,
    ata2: venganza,
    ata3: desenrollar,
    ata4: golpeC,
    estado: "normal",
    estado2: [],
    ps: 95,
    atf: 80,
    dff: 105,
    ats: 40,
    dfs: 70,
    eps: 0,
    eaf: 0,
    edf: 2,
    eas: 0,
    eds: 0
}
var blissey = {
    nivel: 50,
    nombre: "Blissey",
    tipo: normal,
    tipo2: normal,
    ata1: amortiguador,
    ata2: bombaH,
    ata3: pantallaLuz,
    ata4: dobleF,
    estado: "normal",
    estado2: [],
    ps: 255,
    atf: 10,
    dff: 10,
    ats: 75,
    dfs: 135,
    eps: 3,
    eaf: 0,
    edf: 0,
    eas: 0,
    eds: 0
}
var tyranitar = {
    nivel: 50,
    nombre: "Tyranitar",
    tipo: roca,
    tipo2: siniestro,
    ata1: avala,
    ata2: golpe,
    ata3: trit,
    ata4: terr,
    estado: "normal",
    estado2: [],
    ps: 100,
    atf: 134,
    dff: 110,
    ats: 95,
    dfs: 100,
    eps: 0,
    eaf: 3,
    edf: 0,
    eas: 0,
    eds: 0
}
function region() {
    if (document.getElementById("mapa2").style.display == "none") {
        document.getElementById('medallas').getElementsByClassName('medalla')[0].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla')[1].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla')[2].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla')[3].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla')[4].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla')[5].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla')[6].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla')[7].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[0].style.display = "grid"
        document.getElementById('medallas').getElementsByClassName('medalla2')[1].style.display = "grid"
        document.getElementById('medallas').getElementsByClassName('medalla2')[2].style.display = "grid"
        document.getElementById('medallas').getElementsByClassName('medalla2')[3].style.display = "grid"
        document.getElementById('medallas').getElementsByClassName('medalla2')[4].style.display = "grid"
        document.getElementById('medallas').getElementsByClassName('medalla2')[5].style.display = "grid"
        document.getElementById('medallas').getElementsByClassName('medalla2')[6].style.display = "grid"
        document.getElementById('medallas').getElementsByClassName('medalla2')[7].style.display = "grid"
        document.getElementById("mapa").style.display = "none"
        document.getElementById("mapa2").style.display = "inherit"

    }
    else {
        document.getElementById('medallas').getElementsByClassName('medalla')[0].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla')[1].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla')[2].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla')[3].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla')[4].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla')[5].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla')[6].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla')[7].style.display = "inherit"
        document.getElementById('medallas').getElementsByClassName('medalla2')[0].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[1].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[2].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[3].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[4].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[5].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[6].style.display = "none"
        document.getElementById('medallas').getElementsByClassName('medalla2')[7].style.display = "none"
        document.getElementById("mapa").style.display = "inherit"
        document.getElementById("mapa2").style.display = "none"
    }
}
function enviarM() {
    document.getElementById('meed').value = medallas
    document.getElementById('form1').submit()
    actualizar_medallas()
}
function actualizar_medallas() {
    if (medallas > 0) {
        document.getElementById('medallas').getElementsByClassName('medalla')[0].src = document.getElementById('medallas').getElementsByClassName('medalla')[0].src.replace("X", "")
        document.getElementById('gim1').style.visibility = "hidden"
        document.getElementById('gim2').style.visibility = "inherit"
        if (medallas > 1) {
            document.getElementById('medallas').getElementsByClassName('medalla')[1].src = document.getElementById('medallas').getElementsByClassName('medalla')[1].src.replace("X", "")
            document.getElementById('gim2').style.visibility = "hidden"
            document.getElementById('gim3').style.visibility = "inherit"
        }
        if (medallas > 2) {
            document.getElementById('medallas').getElementsByClassName('medalla')[2].src = document.getElementById('medallas').getElementsByClassName('medalla')[2].src.replace("X", "")
            document.getElementById('gim3').style.visibility = "hidden"
            document.getElementById('gim4').style.visibility = "inherit"
        }
        if (medallas > 3) {
            document.getElementById('medallas').getElementsByClassName('medalla')[3].src = document.getElementById('medallas').getElementsByClassName('medalla')[3].src.replace("X", "")
            document.getElementById('gim4').style.visibility = "hidden"
            document.getElementById('gim5').style.visibility = "inherit"
        }
        if (medallas > 4) {
            document.getElementById('medallas').getElementsByClassName('medalla')[4].src = document.getElementById('medallas').getElementsByClassName('medalla')[4].src.replace("X", "")
            document.getElementById('gim5').style.visibility = "hidden"
            document.getElementById('gim6').style.visibility = "inherit"
        }
        if (medallas > 5) {
            document.getElementById('medallas').getElementsByClassName('medalla')[5].src = document.getElementById('medallas').getElementsByClassName('medalla')[5].src.replace("X", "")
            document.getElementById('gim6').style.visibility = "hidden"
            document.getElementById('gim7').style.visibility = "inherit"
        }
        if (medallas > 6) {
            document.getElementById('medallas').getElementsByClassName('medalla')[6].src = document.getElementById('medallas').getElementsByClassName('medalla')[6].src.replace("X", "")
            document.getElementById('gim7').style.visibility = "hidden"
            document.getElementById('gim8').style.visibility = "inherit"
        }
        if (medallas > 7) {
            document.getElementById('medallas').getElementsByClassName('medalla')[7].src = document.getElementById('medallas').getElementsByClassName('medalla')[7].src.replace("X", "")
            document.getElementById('region').style.visibility = "inherit"
            document.getElementById('gim8').style.visibility = "hidden"
            document.getElementById('gim1_').style.visibility = "inherit"
        }
        if (medallas > 8) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[0].src = document.getElementById('medallas').getElementsByClassName('medalla2')[0].src.replace("X", "")
            document.getElementById('gim1_').style.visibility = "hidden"
            document.getElementById('gim2_').style.visibility = "inherit"
        }
        if (medallas > 9) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[1].src = document.getElementById('medallas').getElementsByClassName('medalla2')[1].src.replace("X", "")
            document.getElementById('gim2_').style.visibility = "hidden"
            document.getElementById('gim3_').style.visibility = "inherit"
        }
        if (medallas > 10) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[2].src = document.getElementById('medallas').getElementsByClassName('medalla2')[2].src.replace("X", "")
            document.getElementById('gim3_').style.visibility = "hidden"
            document.getElementById('gim4_').style.visibility = "inherit"
        }
        if (medallas > 11) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[3].src = document.getElementById('medallas').getElementsByClassName('medalla2')[3].src.replace("X", "")
            document.getElementById('gim4_').style.visibility = "hidden"
            document.getElementById('gim5_').style.visibility = "inherit"
        }
        if (medallas > 12) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[4].src = document.getElementById('medallas').getElementsByClassName('medalla2')[4].src.replace("X", "")
            document.getElementById('gim5_').style.visibility = "hidden"
            document.getElementById('gim6_').style.visibility = "inherit"
        }
        if (medallas > 13) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[5].src = document.getElementById('medallas').getElementsByClassName('medalla2')[5].src.replace("X", "")
            document.getElementById('gim6_').style.visibility = "hidden"
            document.getElementById('gim7_').style.visibility = "inherit"
        }
        if (medallas > 14) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[6].src = document.getElementById('medallas').getElementsByClassName('medalla2')[6].src.replace("X", "")
            document.getElementById('gim7_').style.visibility = "hidden"
            document.getElementById('gim8_').style.visibility = "inherit"
        }
        if (medallas > 15) {
            document.getElementById('medallas').getElementsByClassName('medalla2')[7].src = document.getElementById('medallas').getElementsByClassName('medalla2')[7].src.replace("X", "")
            //document.getElementById('gim1_').style.visibility = "hidden"
            //document.getElementById('gim2_').style.visibility = "inherit"
            medallas = 16
        }
    }
}

function unj() {
    document.getElementById("bton").style.display = "none"
    po = poke1
    document.getElementById("hp1").max = psmax1
    document.getElementById("hp1").value = document.getElementById("hp1").max
    document.getElementById("mapa").style.display = "inherit"
    document.getElementById("pk1").innerHTML = `<img src="./sprite/${poke1.nombre}_1.png">`
    salut1 = document.getElementById("hp1").max
    salup1 = document.getElementById("hp1").value
    document.getElementById("salu1").innerHTML = `${salup1}/${salut1}`
    document.getElementById("n1").innerHTML = `${poke1.nombre.toUpperCase()}`
    document.getElementById("nivel1").innerHTML = `Nv ${poke1.nivel}`
    document.getElementById("at1").innerHTML = poke1.ata1.nombre.toUpperCase()
    document.getElementById("at2").innerHTML = poke1.ata2.nombre.toUpperCase()
    document.getElementById("at3").innerHTML = poke1.ata3.nombre.toUpperCase()
    document.getElementById("at4").innerHTML = poke1.ata4.nombre.toUpperCase()
}

function gim1() {
    riv1 = onix
    riv2 = golem
    riv3 = kabutops
    armarRival()
}
function gim2() {
    riv1 = starmie
    riv2 = golduck
    riv3 = lapras
    armarRival()
}
function gim3() {
    riv1 = raichu
    riv2 = electrode
    riv3 = magneton
    armarRival()
}
function gim4() {
    riv1 = victreebel
    riv2 = tangela
    riv3 = vileplume
    armarRival()
}
function gim5() {
    riv1 = weezing
    riv2 = muk
    riv3 = venomoth
    armarRival()
}
function gim6() {
    riv1 = venomoth
    riv2 = mrMime
    riv3 = alakazam
    armarRival()
}
function gim7() {
    riv1 = rapidash
    riv2 = arcanine
    riv3 = ninetales
    armarRival()
}
function gim8() {
    riv1 = nidoqueen
    riv2 = nidoking
    riv3 = rhydon
    armarRival()
}
function gim9() {
    riv1 = pidgeot
    riv2 = noctowl
    riv3 = xatu
    armarRival()
}
function gim10() {
    riv1 = butterfree
    riv2 = beedrill
    riv3 = scizor
    armarRival()
}
function gim11() {
    riv1 = clefable
    riv2 = miltank
    riv3 = tauros
    armarRival()
}
function gim12() {
    riv1 = gengar
    riv2 = misdreavus
    riv3 = granbull
    armarRival()
}
function gim13() {
    riv1 = primeape
    riv2 = poliwrath
    riv3 = hitmonchan
    armarRival()
}
function gim14() {
    riv1 = magneton
    riv2 = skarmory
    riv3 = steelix
    armarRival()
}
function gim15() {
    riv1 = dewgong
    riv2 = piloswine
    riv3 = jynx
    armarRival()
}
function gim16() {
    riv1 = gyarados
    riv2 = kingdra
    riv3 = dragonite
    armarRival()
}
function cerrar() {
    document.getElementById("g1").innerHTML = ""
    document.getElementById("g2").innerHTML = ""
    document.getElementById("g3").innerHTML = ""
    document.getElementById("g4").innerHTML = ""
    document.getElementById("g5").innerHTML = ""
    document.getElementById("g6").innerHTML = ""
    document.getElementById("g7").innerHTML = ""
    document.getElementById("g8").innerHTML = ""
    document.getElementById("g9").innerHTML = ""
    document.getElementById("g10").innerHTML = ""
    document.getElementById("g11").innerHTML = ""
    document.getElementById("g12").innerHTML = ""
    document.getElementById("g13").innerHTML = ""
    document.getElementById("g14").innerHTML = ""
    document.getElementById("g15").innerHTML = ""
    document.getElementById("g16").innerHTML = ""
    actualizar_medallas()
}
function _gs(gs_) {
    
    document.getElementById(`gim1`).style.visibility = "hidden"
    document.getElementById(`gim1_`).style.visibility = "hidden"
    document.getElementById(`gim2`).style.visibility = "hidden"
    document.getElementById(`gim2_`).style.visibility = "hidden"
    document.getElementById(`gim3`).style.visibility = "hidden"
    document.getElementById(`gim3_`).style.visibility = "hidden"
    document.getElementById(`gim4`).style.visibility = "hidden"
    document.getElementById(`gim4_`).style.visibility = "hidden"
    document.getElementById(`gim5`).style.visibility = "hidden"
    document.getElementById(`gim5_`).style.visibility = "hidden"
    document.getElementById(`gim6`).style.visibility = "hidden"
    document.getElementById(`gim6_`).style.visibility = "hidden"
    document.getElementById(`gim7`).style.visibility = "hidden"
    document.getElementById(`gim7_`).style.visibility = "hidden"
    document.getElementById(`gim8`).style.visibility = "hidden"
    document.getElementById(`gim8_`).style.visibility = "hidden"
    document.getElementById("g1").innerHTML = ""
    document.getElementById("g2").innerHTML = ""
    document.getElementById("g3").innerHTML = ""
    document.getElementById("g4").innerHTML = ""
    document.getElementById("g5").innerHTML = ""
    document.getElementById("g6").innerHTML = ""
    document.getElementById("g7").innerHTML = ""
    document.getElementById("g8").innerHTML = ""
    document.getElementById("g9").innerHTML = ""
    document.getElementById("g10").innerHTML = ""
    document.getElementById("g11").innerHTML = ""
    document.getElementById("g12").innerHTML = ""
    document.getElementById("g13").innerHTML = ""
    document.getElementById("g14").innerHTML = ""
    document.getElementById("g15").innerHTML = ""
    document.getElementById("g16").innerHTML = ""
    if (gs_ == "g1") {
        document.getElementById("g1").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Brock.png">
        <img src="./sprite/${onix.nombre}_2.png">
        <img src="./tipos/Tipo_${onix.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${onix.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${onix.ata1.tipo.nombre}.gif"> ${onix.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${onix.ata2.tipo.nombre}.gif"> ${onix.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${onix.ata3.tipo.nombre}.gif"> ${onix.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${onix.ata4.tipo.nombre}.gif"> ${onix.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${golem.nombre}_2.png">
        <img src="./tipos/Tipo_${golem.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${golem.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${golem.ata1.tipo.nombre}.gif"> ${golem.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${golem.ata2.tipo.nombre}.gif"> ${golem.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${golem.ata3.tipo.nombre}.gif"> ${golem.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${golem.ata4.tipo.nombre}.gif"> ${golem.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${kabutops.nombre}_2.png">
        <img src="./tipos/Tipo_${kabutops.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${kabutops.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${kabutops.ata1.tipo.nombre}.gif"> ${kabutops.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${kabutops.ata2.tipo.nombre}.gif"> ${kabutops.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${kabutops.ata3.tipo.nombre}.gif"> ${kabutops.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${kabutops.ata4.tipo.nombre}.gif"> ${kabutops.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim1()">Confirmar</button>`
    }
    else if (gs_ == "g2") {
        document.getElementById("g2").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Misty.png">
        <img src="./sprite/${starmie.nombre}_2.png">
        <img src="./tipos/Tipo_${starmie.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${starmie.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${starmie.ata1.tipo.nombre}.gif"> ${starmie.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${starmie.ata2.tipo.nombre}.gif"> ${starmie.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${starmie.ata3.tipo.nombre}.gif"> ${starmie.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${starmie.ata4.tipo.nombre}.gif"> ${starmie.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${golduck.nombre}_2.png">
        <img src="./tipos/Tipo_${golduck.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${golduck.ata1.tipo.nombre}.gif"> ${golduck.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${golduck.ata2.tipo.nombre}.gif"> ${golduck.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${golduck.ata3.tipo.nombre}.gif"> ${golduck.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${golduck.ata4.tipo.nombre}.gif"> ${golduck.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${lapras.nombre}_2.png">
        <img src="./tipos/Tipo_${lapras.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${lapras.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${lapras.ata1.tipo.nombre}.gif"> ${lapras.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${lapras.ata2.tipo.nombre}.gif"> ${lapras.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${lapras.ata3.tipo.nombre}.gif"> ${lapras.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${lapras.ata4.tipo.nombre}.gif"> ${lapras.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim2()">Confirmar</button>`
    }
    else if (gs_ == "g3") {
        document.getElementById("g3").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Lt. Surge.png">
        <img src="./sprite/${raichu.nombre}_2.png">
        <img src="./tipos/Tipo_${raichu.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${raichu.ata1.tipo.nombre}.gif"> ${raichu.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${raichu.ata2.tipo.nombre}.gif"> ${raichu.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${raichu.ata3.tipo.nombre}.gif"> ${raichu.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${raichu.ata4.tipo.nombre}.gif"> ${raichu.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${electrode.nombre}_2.png">
        <img src="./tipos/Tipo_${electrode.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${electrode.ata1.tipo.nombre}.gif"> ${electrode.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${electrode.ata2.tipo.nombre}.gif"> ${electrode.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${electrode.ata3.tipo.nombre}.gif"> ${electrode.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${electrode.ata4.tipo.nombre}.gif"> ${electrode.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${magneton.nombre}_2.png">
        <img src="./tipos/Tipo_${magneton.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${magneton.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${magneton.ata1.tipo.nombre}.gif"> ${magneton.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${magneton.ata2.tipo.nombre}.gif"> ${magneton.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${magneton.ata3.tipo.nombre}.gif"> ${magneton.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${magneton.ata4.tipo.nombre}.gif"> ${magneton.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim3()">Confirmar</button>`
    }
    else if (gs_ == "g4") {
        document.getElementById("g4").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Erika.png">
        <img src="./sprite/${victreebel.nombre}_2.png">
        <img src="./tipos/Tipo_${victreebel.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${victreebel.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${victreebel.ata1.tipo.nombre}.gif"> ${victreebel.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${victreebel.ata2.tipo.nombre}.gif"> ${victreebel.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${victreebel.ata3.tipo.nombre}.gif"> ${victreebel.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${victreebel.ata4.tipo.nombre}.gif"> ${victreebel.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${tangela.nombre}_2.png">
        <img src="./tipos/Tipo_${tangela.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${tangela.ata1.tipo.nombre}.gif"> ${tangela.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${tangela.ata2.tipo.nombre}.gif"> ${tangela.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${tangela.ata3.tipo.nombre}.gif"> ${tangela.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${tangela.ata4.tipo.nombre}.gif"> ${tangela.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${vileplume.nombre}_2.png">
        <img src="./tipos/Tipo_${vileplume.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${vileplume.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${vileplume.ata1.tipo.nombre}.gif"> ${vileplume.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${vileplume.ata2.tipo.nombre}.gif"> ${vileplume.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${vileplume.ata3.tipo.nombre}.gif"> ${vileplume.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${vileplume.ata4.tipo.nombre}.gif"> ${vileplume.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim4()">Confirmar</button>`
    }
    else if (gs_ == "g5") {
        document.getElementById("g5").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Koga.jpg">
        <img src="./sprite/${weezing.nombre}_2.png">
        <img src="./tipos/Tipo_${weezing.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${weezing.ata1.tipo.nombre}.gif"> ${weezing.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${weezing.ata2.tipo.nombre}.gif"> ${weezing.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${weezing.ata3.tipo.nombre}.gif"> ${weezing.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${weezing.ata4.tipo.nombre}.gif"> ${weezing.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${muk.nombre}_2.png">
        <img src="./tipos/Tipo_${muk.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${muk.ata1.tipo.nombre}.gif"> ${muk.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${muk.ata2.tipo.nombre}.gif"> ${muk.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${muk.ata3.tipo.nombre}.gif"> ${muk.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${muk.ata4.tipo.nombre}.gif"> ${muk.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${venomoth.nombre}_2.png">
        <img src="./tipos/Tipo_${venomoth.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${venomoth.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${venomoth.ata1.tipo.nombre}.gif"> ${venomoth.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${venomoth.ata2.tipo.nombre}.gif"> ${venomoth.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${venomoth.ata3.tipo.nombre}.gif"> ${venomoth.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${venomoth.ata4.tipo.nombre}.gif"> ${venomoth.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim5()">Confirmar</button>`
    }
    else if (gs_ == "g6") {
        document.getElementById("g6").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Sabrina.png">
        <img src="./sprite/${venomoth.nombre}_2.png">
        <img src="./tipos/Tipo_${venomoth.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${venomoth.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${venomoth.ata1.tipo.nombre}.gif"> ${venomoth.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${venomoth.ata2.tipo.nombre}.gif"> ${venomoth.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${venomoth.ata3.tipo.nombre}.gif"> ${venomoth.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${venomoth.ata4.tipo.nombre}.gif"> ${venomoth.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/MrMime_2.png">
        <img src="./tipos/Tipo_${mrMime.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${mrMime.ata1.tipo.nombre}.gif"> ${mrMime.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${mrMime.ata2.tipo.nombre}.gif"> ${mrMime.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${mrMime.ata3.tipo.nombre}.gif"> ${mrMime.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${mrMime.ata4.tipo.nombre}.gif"> ${mrMime.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${alakazam.nombre}_2.png">
        <img src="./tipos/Tipo_${alakazam.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${alakazam.ata1.tipo.nombre}.gif"> ${alakazam.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${alakazam.ata2.tipo.nombre}.gif"> ${alakazam.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${alakazam.ata3.tipo.nombre}.gif"> ${alakazam.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${alakazam.ata4.tipo.nombre}.gif"> ${alakazam.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim6()">Confirmar</button>`
    }
    else if (gs_ == "g7") {
        document.getElementById("g7").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Blaine.png">
        <img src="./sprite/${rapidash.nombre}_2.png">
        <img src="./tipos/Tipo_${rapidash.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${rapidash.ata1.tipo.nombre}.gif"> ${rapidash.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${rapidash.ata2.tipo.nombre}.gif"> ${rapidash.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${rapidash.ata3.tipo.nombre}.gif"> ${rapidash.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${rapidash.ata4.tipo.nombre}.gif"> ${rapidash.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${arcanine.nombre}_2.png">
        <img src="./tipos/Tipo_${arcanine.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${arcanine.ata1.tipo.nombre}.gif"> ${arcanine.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${arcanine.ata2.tipo.nombre}.gif"> ${arcanine.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${arcanine.ata3.tipo.nombre}.gif"> ${arcanine.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${arcanine.ata4.tipo.nombre}.gif"> ${arcanine.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${ninetales.nombre}_2.png">
        <img src="./tipos/Tipo_${ninetales.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${ninetales.ata1.tipo.nombre}.gif"> ${ninetales.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${ninetales.ata2.tipo.nombre}.gif"> ${ninetales.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${ninetales.ata3.tipo.nombre}.gif"> ${ninetales.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${ninetales.ata4.tipo.nombre}.gif"> ${ninetales.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim7()">Confirmar</button>`
    }
    else if (gs_ == "g8") {
        document.getElementById("g8").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Giovanni.png">
        <img src="./sprite/${nidoqueen.nombre}_2.png">
        <img src="./tipos/Tipo_${nidoqueen.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${nidoqueen.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${nidoqueen.ata1.tipo.nombre}.gif"> ${nidoqueen.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${nidoqueen.ata2.tipo.nombre}.gif"> ${nidoqueen.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${nidoqueen.ata3.tipo.nombre}.gif"> ${nidoqueen.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${nidoqueen.ata4.tipo.nombre}.gif"> ${nidoqueen.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${nidoking.nombre}_2.png">
        <img src="./tipos/Tipo_${nidoking.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${nidoking.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${nidoking.ata1.tipo.nombre}.gif"> ${nidoking.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${nidoking.ata2.tipo.nombre}.gif"> ${nidoking.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${nidoking.ata3.tipo.nombre}.gif"> ${nidoking.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${nidoking.ata4.tipo.nombre}.gif"> ${nidoking.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${rhydon.nombre}_2.png">
        <img src="./tipos/Tipo_${rhydon.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${rhydon.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${rhydon.ata1.tipo.nombre}.gif"> ${rhydon.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${rhydon.ata2.tipo.nombre}.gif"> ${rhydon.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${rhydon.ata3.tipo.nombre}.gif"> ${rhydon.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${rhydon.ata4.tipo.nombre}.gif"> ${rhydon.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim8()">Confirmar</button>`
    }
    else if (gs_ == "g9") {
        document.getElementById("g9").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Pegaso.png">
        <img src="./sprite/${pidgeot.nombre}_2.png">
        <img src="./tipos/Tipo_${pidgeot.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${pidgeot.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${pidgeot.ata1.tipo.nombre}.gif"> ${pidgeot.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${pidgeot.ata2.tipo.nombre}.gif"> ${pidgeot.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${pidgeot.ata3.tipo.nombre}.gif"> ${pidgeot.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${pidgeot.ata4.tipo.nombre}.gif"> ${pidgeot.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${noctowl.nombre}_2.png">
        <img src="./tipos/Tipo_${noctowl.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${noctowl.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${noctowl.ata1.tipo.nombre}.gif"> ${noctowl.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${noctowl.ata2.tipo.nombre}.gif"> ${noctowl.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${noctowl.ata3.tipo.nombre}.gif"> ${noctowl.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${noctowl.ata4.tipo.nombre}.gif"> ${noctowl.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${xatu.nombre}_2.png">
        <img src="./tipos/Tipo_${xatu.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${xatu.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${xatu.ata1.tipo.nombre}.gif"> ${xatu.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${xatu.ata2.tipo.nombre}.gif"> ${xatu.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${xatu.ata3.tipo.nombre}.gif"> ${xatu.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${xatu.ata4.tipo.nombre}.gif"> ${xatu.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim9()">Confirmar</button>`
    }
    else if (gs_ == "g10") {
        document.getElementById("g10").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Antón.png">
        <img src="./sprite/${butterfree.nombre}_2.png">
        <img src="./tipos/Tipo_${butterfree.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${butterfree.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${butterfree.ata1.tipo.nombre}.gif"> ${butterfree.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${butterfree.ata2.tipo.nombre}.gif"> ${butterfree.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${butterfree.ata3.tipo.nombre}.gif"> ${butterfree.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${butterfree.ata4.tipo.nombre}.gif"> ${butterfree.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${beedrill.nombre}_2.png">
        <img src="./tipos/Tipo_${beedrill.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${beedrill.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${beedrill.ata1.tipo.nombre}.gif"> ${beedrill.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${beedrill.ata2.tipo.nombre}.gif"> ${beedrill.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${beedrill.ata3.tipo.nombre}.gif"> ${beedrill.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${beedrill.ata4.tipo.nombre}.gif"> ${beedrill.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${scizor.nombre}_2.png">
        <img src="./tipos/Tipo_${scizor.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${scizor.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${scizor.ata1.tipo.nombre}.gif"> ${scizor.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${scizor.ata2.tipo.nombre}.gif"> ${scizor.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${scizor.ata3.tipo.nombre}.gif"> ${scizor.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${scizor.ata4.tipo.nombre}.gif"> ${scizor.ata4.nombre}<h4>
        <button onclick="gim10()">Confirmar</button>`
    }
    else if (gs_ == "g11") {
        document.getElementById("g11").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Blanca.png">
        <img src="./sprite/${clefable.nombre}_2.png">
        <img src="./tipos/Tipo_${clefable.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${clefable.ata1.tipo.nombre}.gif"> ${clefable.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${clefable.ata2.tipo.nombre}.gif"> ${clefable.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${clefable.ata3.tipo.nombre}.gif"> ${clefable.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${clefable.ata4.tipo.nombre}.gif"> ${clefable.ata4.nombre}<h4>
        <img src="./sprite/${miltank.nombre}_2.png">
        <img src="./tipos/Tipo_${miltank.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${miltank.ata1.tipo.nombre}.gif"> ${miltank.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${miltank.ata2.tipo.nombre}.gif"> ${miltank.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${miltank.ata3.tipo.nombre}.gif"> ${miltank.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${miltank.ata4.tipo.nombre}.gif"> ${miltank.ata4.nombre}<h4>
        <img src="./sprite/${tauros.nombre}_2.png">
        <img src="./tipos/Tipo_${tauros.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${tauros.ata1.tipo.nombre}.gif"> ${tauros.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${tauros.ata2.tipo.nombre}.gif"> ${tauros.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${tauros.ata3.tipo.nombre}.gif"> ${tauros.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${tauros.ata4.tipo.nombre}.gif"> ${tauros.ata4.nombre}<h4>
        <button onclick="gim11()">Confirmar</button>`
    }
    else if (gs_ == "g12") {
        document.getElementById("g12").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Morti.png">
        <img src="./sprite/${gengar.nombre}_2.png">
        <img src="./tipos/Tipo_${gengar.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${gengar.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${gengar.ata1.tipo.nombre}.gif"> ${gengar.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${gengar.ata2.tipo.nombre}.gif"> ${gengar.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${gengar.ata3.tipo.nombre}.gif"> ${gengar.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${gengar.ata4.tipo.nombre}.gif"> ${gengar.ata4.nombre}<h4>
        <img src="./sprite/${misdreavus.nombre}_2.png">
        <img src="./tipos/Tipo_${misdreavus.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${misdreavus.ata1.tipo.nombre}.gif"> ${misdreavus.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${misdreavus.ata2.tipo.nombre}.gif"> ${misdreavus.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${misdreavus.ata3.tipo.nombre}.gif"> ${misdreavus.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${misdreavus.ata4.tipo.nombre}.gif"> ${misdreavus.ata4.nombre}<h4>
        <img src="./sprite/${granbull.nombre}_2.png">
        <img src="./tipos/Tipo_${granbull.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${granbull.ata1.tipo.nombre}.gif"> ${granbull.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${granbull.ata2.tipo.nombre}.gif"> ${granbull.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${granbull.ata3.tipo.nombre}.gif"> ${granbull.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${granbull.ata4.tipo.nombre}.gif"> ${granbull.ata4.nombre}<h4>
        <button onclick="gim12()">Confirmar</button>`
    }
    else if (gs_ == "g13") {
        document.getElementById("g13").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Aníbal.png">
        <img src="./sprite/${primeape.nombre}_2.png">
        <img src="./tipos/Tipo_${primeape.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${primeape.ata1.tipo.nombre}.gif"> ${primeape.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${primeape.ata2.tipo.nombre}.gif"> ${primeape.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${primeape.ata3.tipo.nombre}.gif"> ${primeape.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${primeape.ata4.tipo.nombre}.gif"> ${primeape.ata4.nombre}<h4>
        <img src="./sprite/${poliwrath.nombre}_2.png">
        <img src="./tipos/Tipo_${poliwrath.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${poliwrath.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${poliwrath.ata1.tipo.nombre}.gif"> ${poliwrath.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${poliwrath.ata2.tipo.nombre}.gif"> ${poliwrath.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${poliwrath.ata3.tipo.nombre}.gif"> ${poliwrath.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${poliwrath.ata4.tipo.nombre}.gif"> ${poliwrath.ata4.nombre}<h4>
        <img src="./sprite/${hitmonchan.nombre}_2.png">
        <img src="./tipos/Tipo_${hitmonchan.tipo.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${hitmonchan.ata1.tipo.nombre}.gif"> ${hitmonchan.ata1.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${hitmonchan.ata2.tipo.nombre}.gif"> ${hitmonchan.ata2.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${hitmonchan.ata3.tipo.nombre}.gif"> ${hitmonchan.ata3.nombre}<h4>
        <h4> <img src="./tipos/Tipo_${hitmonchan.ata4.tipo.nombre}.gif"> ${hitmonchan.ata4.nombre}<h4>
        <button onclick="gim13()">Confirmar</button>`
    }
    else if (gs_ == "g14") {
        document.getElementById("g14").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Yasmina.png">
        <img src="./sprite/${magneton.nombre}_2.png">
        <img src="./tipos/Tipo_${magneton.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${magneton.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${magneton.ata1.tipo.nombre}.gif"> ${magneton.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${magneton.ata2.tipo.nombre}.gif"> ${magneton.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${magneton.ata3.tipo.nombre}.gif"> ${magneton.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${magneton.ata4.tipo.nombre}.gif"> ${magneton.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${skarmory.nombre}_2.png">
        <img src="./tipos/Tipo_${skarmory.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${skarmory.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${skarmory.ata1.tipo.nombre}.gif"> ${skarmory.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${skarmory.ata2.tipo.nombre}.gif"> ${skarmory.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${skarmory.ata3.tipo.nombre}.gif"> ${skarmory.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${skarmory.ata4.tipo.nombre}.gif"> ${skarmory.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${steelix.nombre}_2.png">
        <img src="./tipos/Tipo_${steelix.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${steelix.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${steelix.ata1.tipo.nombre}.gif"> ${steelix.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${steelix.ata2.tipo.nombre}.gif"> ${steelix.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${steelix.ata3.tipo.nombre}.gif"> ${steelix.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${steelix.ata4.tipo.nombre}.gif"> ${steelix.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim14()">Confirmar</button>`
    }
    else if (gs_ == "g15") {
        document.getElementById("g15").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Fredo.png">
        <img src="./sprite/${dewgong.nombre}_2.png">
        <img src="./tipos/Tipo_${dewgong.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${dewgong.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${dewgong.ata1.tipo.nombre}.gif"> ${dewgong.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${dewgong.ata2.tipo.nombre}.gif"> ${dewgong.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${dewgong.ata3.tipo.nombre}.gif"> ${dewgong.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${dewgong.ata4.tipo.nombre}.gif"> ${dewgong.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${piloswine.nombre}_2.png">
        <img src="./tipos/Tipo_${piloswine.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${piloswine.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${piloswine.ata1.tipo.nombre}.gif"> ${piloswine.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${piloswine.ata2.tipo.nombre}.gif"> ${piloswine.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${piloswine.ata3.tipo.nombre}.gif"> ${piloswine.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${piloswine.ata4.tipo.nombre}.gif"> ${piloswine.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${jynx.nombre}_2.png">
        <img src="./tipos/Tipo_${jynx.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${jynx.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${jynx.ata1.tipo.nombre}.gif"> ${jynx.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${jynx.ata2.tipo.nombre}.gif"> ${jynx.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${jynx.ata3.tipo.nombre}.gif"> ${jynx.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${jynx.ata4.tipo.nombre}.gif"> ${jynx.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim15()">Confirmar</button>`
    }
    else if (gs_ == "g16") {
        document.getElementById("g16").innerHTML = `<div>
        <button id="cerrar" onclick="cerrar()">X</button>
        <img src="./gimnasio/Débora.png">
        <img src="./sprite/${gyarados.nombre}_2.png">
        <img src="./tipos/Tipo_${gyarados.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${gyarados.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${gyarados.ata1.tipo.nombre}.gif"> ${gyarados.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${gyarados.ata2.tipo.nombre}.gif"> ${gyarados.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${gyarados.ata3.tipo.nombre}.gif"> ${gyarados.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${gyarados.ata4.tipo.nombre}.gif"> ${gyarados.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${kingdra.nombre}_2.png">
        <img src="./tipos/Tipo_${kingdra.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${kingdra.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${kingdra.ata1.tipo.nombre}.gif"> ${kingdra.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${kingdra.ata2.tipo.nombre}.gif"> ${kingdra.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${kingdra.ata3.tipo.nombre}.gif"> ${kingdra.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${kingdra.ata4.tipo.nombre}.gif"> ${kingdra.ata4.nombre.toUpperCase()}<h4>
        <img src="./sprite/${dragonite.nombre}_2.png">
        <img src="./tipos/Tipo_${dragonite.tipo.nombre}.gif">
        <img src="./tipos/Tipo_${dragonite.tipo2.nombre}.gif">
        <h4> <img src="./tipos/Tipo_${dragonite.ata1.tipo.nombre}.gif"> ${dragonite.ata1.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${dragonite.ata2.tipo.nombre}.gif"> ${dragonite.ata2.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${dragonite.ata3.tipo.nombre}.gif"> ${dragonite.ata3.nombre.toUpperCase()}<h4>
        <h4> <img src="./tipos/Tipo_${dragonite.ata4.tipo.nombre}.gif"> ${dragonite.ata4.nombre.toUpperCase()}<h4>
        <button onclick="gim16()">Confirmar</button>`
    }
}

function armarRival() {
    document.body.style.backgroundImage = "url(./fondo.jpg)"
    document.body.style.backgroundSize = "100vw 100vh"
    nav.style.display = "none"
    
    document.getElementById("mapa").style.display = "none"
    document.getElementById("mapa2").style.display = "none"
    psRiv = Math.round(10 + (riv1.nivel/100 * ((riv1.ps * 2) + Math.floor(Math.random() * 32) + riv1.eps)) + riv1.nivel)  
    atfRiv = Math.round(5 + (riv1.nivel/ 100 * ((riv1.atf * 2) + Math.floor(Math.random() * 32) + riv1.eaf)))
    dffRiv = Math.round(5 + (riv1.nivel/ 100 * ((riv1.dff * 2) + Math.floor(Math.random() * 32) + riv1.edf)))
    atsRiv = Math.round(5 + (riv1.nivel/ 100 * ((riv1.ats * 2) + Math.floor(Math.random() * 32) + riv1.eas)))
    dfsRiv = Math.round(5 + (riv1.nivel/ 100 * ((riv1.dfs * 2) + Math.floor(Math.random() * 32) + riv1.eds)))
    psRiv2 = Math.round(10 + (riv2.nivel/100 * ((riv2.ps * 2) + Math.floor(Math.random() * 32) + riv2.eps)) + riv2.nivel)  
    atfRiv2 = Math.round(5 + (riv2.nivel/ 100 * ((riv2.atf * 2) + Math.floor(Math.random() * 32) + riv2.eaf)))
    dffRiv2 = Math.round(5 + (riv2.nivel/ 100 * ((riv2.dff * 2) + Math.floor(Math.random() * 32) + riv2.edf)))
    atsRiv2 = Math.round(5 + (riv2.nivel/ 100 * ((riv2.ats * 2) + Math.floor(Math.random() * 32) + riv2.eas)))
    dfsRiv2 = Math.round(5 + (riv2.nivel/ 100 * ((riv2.dfs * 2) + Math.floor(Math.random() * 32) + riv2.eds)))
    psRiv3 = Math.round(10 + (riv3.nivel/100 * ((riv3.ps * 2) + Math.floor(Math.random() * 32) + riv3.eps)) + riv3.nivel)  
    atfRiv3 = Math.round(5 + (riv3.nivel/ 100 * ((riv3.atf * 2) + Math.floor(Math.random() * 32) + riv3.eaf)))
    dffRiv3 = Math.round(5 + (riv3.nivel/ 100 * ((riv3.dff * 2) + Math.floor(Math.random() * 32) + riv3.edf)))
    atsRiv3 = Math.round(5 + (riv3.nivel/ 100 * ((riv3.ats * 2) + Math.floor(Math.random() * 32) + riv3.eas)))
    dfsRiv3 = Math.round(5 + (riv3.nivel/ 100 * ((riv3.dfs * 2) + Math.floor(Math.random() * 32) + riv3.eds)))
    document.getElementById("contOculto").style.display = "inherit"
    document.getElementById("tabla").style.display = "inherit"
    //document.body.style.backgroundImage = "url(./blank-pokemon-battle-template_171714.jpg)"
    document.getElementById("pk2").innerHTML = `<img src="./sprite/${riv1.nombre}_2.png">`
    document.getElementById("hpRival").max = psRiv
    document.getElementById("hpRival").value = psRiv
    document.getElementById("n2").innerHTML = `${riv1.nombre.toUpperCase()}`
    document.getElementById("nivel2").innerHTML = `Nv ${riv1.nivel}`
}
function ataque(num) {
    turnos++
    azar = Math.floor(Math.random() * (4 - 1 + 1) ) + 1
    if (azar == 1) {
        conA = riv1.ata1
    }
    else if (azar == 2) {
        conA = riv1.ata2
    }
    else if (azar == 3) {
        conA = riv1.ata3
    }
    else if (azar == 4) {
        conA = riv1.ata4
    }
    if ((conA.nombre == "Protección" || conA.nombre == "Ataque rápido") && (num.nombre !== "Protección" || num.nombre !== "Ataque rápido")) {
        contraataque()
    }
    parAzar = Math.round(Math.random() * 100)
    if (num.pp <= 0) {
        document.getElementById("tabla").innerText = `¡No quedan PP para este movimiento!`
    }
    /*if (poke1.estado === "paralizado" && parAzar > 0) {
        num.pp = num.pp - 1
        document.getElementById("tabla").innerText = `No puede atacar`
    }*/
    pre = Math.round(Math.random() * 100)
    if (pre > num.precisión) {
        num.pp--
        document.getElementById("tabla").innerText = `¡${poke1.nombre.toUpperCase()} usó ${num.nombre.toUpperCase()}!`
        document.getElementById("movs").style.display = "none"
      setTimeout(function() {
      document.getElementById("tabla").innerText = `¡El movimiento falló!`
        setTimeout("contraataque()", 1000)
    },400)
        daño = 0
    }
    if (poke1.estado == "Congelado" || poke1.estado == "Dormido") {
        num.pp--
        document.getElementById("tabla").innerText = `¡${poke1.nombre.toUpperCase()} usó ${num.nombre.toUpperCase()}!`
        document.getElementById("movs").style.display = "none"
      setTimeout(function() {
      document.getElementById("tabla").innerText = `${poke1.nombre.toUpperCase()} se encuentra ${poke1.estado}`
        setTimeout("contraataque()", 1000)
    },400)
        daño = 0
    }
    else {
        if (num.efecto.includes(quemar() == true)) {
            var xx = num.efecto.indexOf(quemar())
            riv1.estado == num.efecto[xx]
        }
        if (num.efecto.includes(congelar() == true)) {
            var xx = num.efecto.indexOf(congelar())
            riv1.estado == num.efecto[xx]
        }
        if (num.efecto.includes(dormir() == true)) {
            var xx = num.efecto.indexOf(dormir())
            riv1.estado == num.efecto[xx]
        }
        if (num.efecto.includes(paralizar() == true)) {
            var xx = num.efecto.indexOf(paralizar())
            riv1.estado == num.efecto[xx]
        }
        if (num === transformacion) {
            num.pp--
            poke1 = riv1
            poke1.ata1.pp = 5
            poke1.ata2.pp = 5
            poke1.ata3.pp = 5
            poke1.ata4.pp = 5
            document.getElementById("pk1").innerHTML = `<img src="./sprite/${poke1.nombre.toLowerCase()}_1.png">`
            document.getElementById("at1").innerHTML = poke1.ata1.nombre
            document.getElementById("at2").innerHTML = poke1.ata2.nombre
            document.getElementById("at3").innerHTML = poke1.ata3.nombre
            document.getElementById("at4").innerHTML = poke1.ata4.nombre
            document.getElementById("at2").style.display = "inherit"
            document.getElementById("at3").style.display = "inherit"
            document.getElementById("at4").style.display = "inherit"
            contraataque()
        }
        if (num.efecto.includes("presente") == true) {
            num.pp--
            regalito = Math.floor(Math.random() * 100) + 1
            v = Math.floor(Math.random() * (100 - 85 + 1) ) + 85
            document.getElementById("movs").style.display = "none"
            if (riv1.tipo.nombre in num.tipo.eficacia0 || riv1.tipo2.nombre in num.tipo.eficacia0) {
                e = 0
            }
            else if (riv1.tipo.nombre in num.tipo.eficacia05 && riv1.tipo2.nombre in num.tipo.eficacia05) {
                e = 0.25
            }
            else if (riv1.tipo.nombre in num.tipo.eficacia05 || riv1.tipo2.nombre in num.tipo.eficacia05) {
                e = 0.5
            }
            else if ((riv1.tipo.nombre !== riv1.tipo2.nombre) && (riv1.tipo.nombre in num.tipo.eficacia2 && riv1.tipo2.nombre in num.tipo.eficacia2)) {
                e = 4
            }
            else if (riv1.tipo.nombre in num.tipo.eficacia2 || riv1.tipo2.nombre in num.tipo.eficacia2) {
                e = 2
            }
            else{e = 1}
            if (e === 0) {
                daño = 0
            }
            if (regalito <= 40) {
                num.potencia = 40
                daño = Math.round(0.01 * e * v * (((0.2*poke1.nivel+1)*atf1*num.potencia)/(25*dffRiv))+2)
            }
            else if (regalito <= 70) {
                num.potencia = 80
                daño = Math.round(0.01 * e * v * (((0.2*poke1.nivel+1)*atf1*num.potencia)/(25*dffRiv))+2)
            }
            else if (regalito <= 80) {
                num.potencia = 120
                daño = Math.round(0.01 * e * v * (((0.2*poke1.nivel+1)*atf1*num.potencia)/(25*dffRiv))+2)}
            else if (regalito > 80) {
                document.getElementById("hp1").value = document.getElementById("hp1").value + (document.getElementById("hp1").value * 0.25)
            }
            else {
                document.getElementById("tabla").innerText = `¡El movimiento falló!`
            }
            document.getElementById("hpRival").value = document.getElementById("hpRival").value - daño
            contraataque()
        }
        if (num.efecto.includes("confusion") == true) {
            num.pp--
            document.getElementById("movs").style.display = "none"
            if (riv1.estado2.includes('confundido') !== true) {
            riv1.estado2.push("confundido")}
            else {
                document.getElementById("tabla").innerText = `¡El movimiento falló!`
            }
            contraataque()
        }
    if (num.efecto.includes("igualar") == true) {
        num.pp--
        document.getElementById("movs").style.display = "none"
        if (document.getElementById("hp1").value < document.getElementById("hpRival").value) {
            document.getElementById("hpRival").value = document.getElementById("hp1").value
            document.getElementById("tabla").innerText = `¡${poke1.nombre} usó ${num.nombre}!`
        }
        else {
            document.getElementById("tabla").innerText = `¡El movimiento falló!`
        }
    } 
    else if (num.efecto.includes("curar mitad") == true) {
        num.pp--
        document.getElementById("hp1").value = document.getElementById("hp1").value + Math.round(document.getElementById("hp1").value/2)
        document.getElementById("salu1").innerHTML = `${document.getElementById("hp1").value}/${document.getElementById("hp1").max}`
        document.getElementById("movs").style.display = "none"
        document.getElementById("tabla").innerText = `¡${poke1.nombre} usó ${num.nombre}!`
    }
    else if (num.efecto.includes("mitad") == true) {
        num.pp--
        document.getElementById("hp2").value = Math.round(document.getElementById("hp2").value/2)
        document.getElementById("movs").style.display = "none"
        document.getElementById("tabla").innerText = `¡${poke1.nombre} usó ${num.nombre}!`
    }
    else {
    num.pp--
    v = Math.floor(Math.random() * (100 - 85 + 1) ) + 85
    if (poke1.tipo === num.tipo || poke1.tipo2 === num.tipo) {
        stab = 1.5
    }
    else {stab = 1}
    if (num.categoría === "físico") {
        a = atf1
        d = dffRiv
    }
    if (num.categoría === "especial") {
        a = ats1
        d = dfsRiv
    }
    if (riv1.tipo.nombre in num.tipo.eficacia0 || riv1.tipo2.nombre in num.tipo.eficacia0) {
        e = 0
    }
    else if (riv1.tipo.nombre in num.tipo.eficacia05 && riv1.tipo2.nombre in num.tipo.eficacia05) {
        e = 0.25
    }
    else if (riv1.tipo.nombre in num.tipo.eficacia05 || riv1.tipo2.nombre in num.tipo.eficacia05) {
        e = 0.5
    }
    else if ((riv1.tipo.nombre !== riv1.tipo2.nombre) && (riv1.tipo.nombre in num.tipo.eficacia2 && riv1.tipo2.nombre in num.tipo.eficacia2)) {
        e = 4
    }
    else if (riv1.tipo.nombre in num.tipo.eficacia2 || riv1.tipo2.nombre in num.tipo.eficacia2) {
        e = 2
    }
    else{e = 1}
    if (e === 0) {
        daño = 0
    }
    else {daño = Math.round(0.01 * stab * e * v * (((0.2*poke1.nivel+1)*a*num.potencia)/(25*d))+2)}
    document.getElementById("hpRival").value = document.getElementById("hpRival").value - daño
    document.getElementById("movs").style.display = "none"
    document.getElementById("tabla").innerText = `¡${poke1.nombre.toUpperCase()} usó ${num.nombre.toUpperCase()}!`
    if (num.efecto.includes("explosion") == true) {
        document.getElementById("hp1").value = 0
    }
    setTimeout(function() {
        if (e === 0) {
        document.getElementById("tabla").innerText = `No afecta a ${riv1.nombre.toUpperCase()}...`}
        else if (e >= 2){
            document.getElementById("tabla").innerText = `¡Es muy eficaz!`}
        else if (e < 1){
            document.getElementById("tabla").innerText = `No es muy eficaz...`}
    },400)
    if (document.getElementById("hpRival").value <=0) {
        rivas--
        document.getElementById("tabla").innerText = `¡${riv1.nombre.toUpperCase()} se debilitó!`
        if (rivas === 2) {
            riv1 = riv2
            document.getElementById("pk2").innerHTML = `<img src="./sprite/${riv2.nombre}_2.png">`
            psRiv = psRiv2
            atfRiv = atfRiv2
            dffRiv = dffRiv2
            atsRiv = atsRiv2
            dfsRiv = dfsRiv2
        }
        else if (rivas === 1) {
            riv1 = riv3
            document.getElementById("pk2").innerHTML = `<img src="./sprite/${riv3.nombre}_2.png">`
            psRiv = psRiv3
            atfRiv = atfRiv3
            dffRiv = dffRiv3
            atsRiv = atsRiv3
            dfsRiv = dfsRiv3
        }
        else if (rivas === 0 ) {
            medallas++
            enviarM()
            alert("¡Ganaste!")
            window.location.href = "./auth.html"
        }
        document.getElementById("hpRival").max = psRiv
        document.getElementById("hpRival").value = psRiv
        document.getElementById("n2").innerHTML = `${riv1.nombre.toUpperCase()}`
    }
    if (pokes === 0 ) {
        alert("Perdiste :(")
        window.location.href = "./auth.html"
    }}
    setTimeout("contraataque()", 1000)
}}
function contraataque(){
    pre = Math.round(Math.random() * 100)
    if (conA.pp <= 0) {
    }
    if (pre > conA.precisión) {
        conA.pp--
        document.getElementById("tabla").innerText = `¡${riv1.nombre} usó ${conA.nombre}!`
        setTimeout(function() {
            document.getElementById("tabla").innerText = `¡El movimiento falló!`
            document.getElementById("movs").style.display = "inherit"
        },400)
        daño = 0
    }
    else {
        if (conA.efecto.includes("confusion") == true) {
            conA.pp--
            
            if (poke1.estado2.includes('confundido') !== true) {
            poke1.estado2.push("confundido")}
            else {
                document.getElementById("tabla").innerText = `¡El movimiento falló!`
            }
            document.getElementById("movs").style.display = "inherit"
        }
        if (conA.efecto.includes("igualar") == true) {
            conA.pp--
        if (document.getElementById("hpRival").value < document.getElementById("hp1").value) {
            document.getElementById("hp1").value = document.getElementById("hpRival").value
            document.getElementById("salu1").innerHTML = `${document.getElementById("hp1").value}/${document.getElementById("hp1").max}`
            document.getElementById("tabla").innerText = `¡${riv1.nombre.toUpperCase()} usó ${conA.nombre}!`
        }
        else {
            document.getElementById("tabla").innerText = `¡El movimiento falló!`
        }
    }
    else if (conA.efecto.includes("curar mitad") == true) {
        conA.pp--
        document.getElementById("hpRival").value = document.getElementById("hpRival").value + Math.round(document.getElementById("hp2").value/2)
        document.getElementById("movs").style.display = "none"
        document.getElementById("tabla").innerText = `¡${riv1.nombre.toUpperCase()} usó ${num.nombre}!`
    }
    else if (conA.efecto.includes("mitad") == true) {
        conA.pp--
        document.getElementById("hpRival").value = Math.round(document.getElementById("hpRival").value/2)
        document.getElementById("movs").style.display = "none"
        document.getElementById("tabla").innerText = `¡${riv1.nombre.toUpperCase()} usó ${conA.nombre}!`
    }
        
    else {
    conA.pp--
    v = Math.floor(Math.random() * (100 - 85 + 1) ) + 85
    if (riv1.tipo === conA.tipo || riv1.tipo2 === conA.tipo) {
        stab = 1.5
    }
    else {stab = 1}
    if (conA.categoría === "físico") {
        a = atfRiv
        d = dff1
    }
    if (conA.categoría === "especial") {
        a = atsRiv
        d = dfs1
    }
    if (poke1.tipo.nombre in conA.tipo.eficacia0 || poke1.tipo2.nombre in conA.tipo.eficacia0) {
        e = 0
    }
    else if (poke1.tipo.nombre in conA.tipo.eficacia05 && poke1.tipo2.nombre in conA.tipo.eficacia05) {
        e = 0.25
    }
    else if (poke1.tipo.nombre in conA.tipo.eficacia05 || poke1.tipo2.nombre in conA.tipo.eficacia05) {
        e = 0.5
    }
    else if ((poke1.tipo.nombre !== poke1.tipo2.nombre) && (poke1.tipo.nombre in conA.tipo.eficacia2 && poke1.tipo2.nombre in conA.tipo.eficacia2)) {
        e = 4
    }
    else if (poke1.tipo.nombre in conA.tipo.eficacia2 || poke1.tipo2.nombre in conA.tipo.eficacia2) {
        e = 2
    }
    else{e = 1}
    if (e === 0) {
        daño = 0
        document.getElementById("tabla").innerText = `¡El ataque no afecta a ${poke1.nombre}!`
        document.getElementById("movs").style.display = "inherit"
    }
    else {daño = Math.round(0.01 * stab * e * v * (((0.2*riv1.nivel+1)*a*conA.potencia)/(25*d))+2)}
    document.getElementById("hp1").value = document.getElementById("hp1").value - daño
    document.getElementById("salu1").innerHTML = `${document.getElementById("hp1").value}/${document.getElementById("hp1").max}`
    document.getElementById("tabla").innerText = `¡${riv1.nombre.toUpperCase()} enemigo usó ${conA.nombre.toUpperCase()}!`
    if (conA.efecto === "explosion") {
        document.getElementById("hpRival").value = 0
    }
    setTimeout(function() {
        if (e === 0) {
        document.getElementById("tabla").innerText = `No afecta a ${poke1.nombre.toUpperCase()}...`}
        else if (e >= 2){
            document.getElementById("tabla").innerText = `¡Es muy eficaz!`}
        else if (e < 1){
            document.getElementById("tabla").innerText = `No es muy eficaz...`}
    },400)
    if (document.getElementById("hp1").value <=0) {
        //Cambiar pokemon
        pokes--
        document.getElementById("tabla").innerText = `¡${poke1.nombre.toUpperCase()} se debilitó!`
        if (pokes === 2) {
            poke1 = poke2
            document.getElementById("pk1").innerHTML = `<img src="./sprite/${poke2.nombre}_1.png">`
            psmax1 = psmax2
            atf1 = atf2
            dff1 = dff2
            ats1 = ats2
            dfs1 = dfs2
        }
        else if (pokes === 1) {
            poke1 = poke3
            document.getElementById("pk1").innerHTML = `<img src="./sprite/${poke3.nombre}_1.png">`
            psmax1 = psmax3
            atf1 = atf3
            dff1 = dff3
            ats1 = ats3
            dfs1 = dfs3
        }
        else if (pokes === 0 ) {
            alert("Perdiste :(")
            window.location.href = "./auth.html"
        }
        document.getElementById("hp1").max = psmax1
        document.getElementById("hp1").value = psmax1
        document.getElementById("salu1").innerHTML = `${document.getElementById("hp1").value}/${document.getElementById("hp1").max}`
        document.getElementById("n1").innerHTML = `${poke1.nombre.toUpperCase()}`
        document.getElementById("nivel1").innerHTML = `Nv ${poke1.nivel}`
        document.getElementById("at1").innerHTML = poke1.ata1.nombre.toUpperCase()
        document.getElementById("at2").innerHTML = poke1.ata2.nombre.toUpperCase()
        document.getElementById("at3").innerHTML = poke1.ata3.nombre.toUpperCase()
        document.getElementById("at4").innerHTML = poke1.ata4.nombre.toUpperCase()
    }
    document.getElementById("movs").style.display = "inherit"
}}}
