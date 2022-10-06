* {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
}

.nav {
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
}
.nav * {
  box-sizing: border-box;
  transition: all 0.35s ease;
}
.nav li {
  display: inline-block;
  list-style: outside none none;
  margin-left: 20px;
}
.nav a {
  padding: 5px 5px;
  color: white;
  position: relative;
  text-decoration: none;
  font-size: 15px;
}
.nav a::before,
.nav a::after {
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all 0.35s ease;
  opacity: 0;
}
.nav a::before {
  content: "";
  right: 0;
  top: 0;
  border-top: 3px solid #C8102E;
  border-right: 3px solid #C8102E;
  transform: translate(-100%, 50%);
}
.nav a:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #C8102E;
  border-left: 3px solid #C8102E;
  transform: translate(100%, -50%);
}
.nav a:hover:before,
.nav a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
.nav a:hover {
  color: #C8102E;
}

html {
  scroll-behavior: smooth;
}

.iconosHeader a {
  color: white;
}

.navbar-brand .logo1 {
  height: 70px;
}

header {
  background-color: #212529;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.header {
  margin-left: 200px;
  margin-right: 200px;
}

#identifier {
  color: white;
  font-weight: 500;
}

.inicio {
  background-image: url(./multimedia/banner-tienda.webp);
  width: 100%;
  height: 820px;
  background-size: cover;
  padding-top: 50px;
  padding-top: 200px;
}
.inicio h1 {
  color: white;
  padding-bottom: 20px;
}
.inicio p {
  color: white;
  padding-bottom: 20px;
  font-size: 20px;
}

.infoInicio {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 40%;
  color: white;
  background-color: rgba(0, 0, 0, 0.353);
  padding: 30px;
  margin: 0px 200px 0px 200px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 20px;
}

.quienessomos {
  height: 700px;
  width: 100%;
  background-image: url(./multimedia/banner-aboutme.webp);
  padding-top: 200px;
  background-size: cover;
}

.seccion1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.353);
  padding: 30px;
  margin: 0px 200px 0px 200px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 20px;
}
.seccion1 h1 {
  padding-bottom: 20px;
}
.seccion1 p {
  font-size: 20px;
}

.seccion2 {
  margin: 0px 200px 0px 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.productosTienda {
  text-align: center;
  margin: auto;
}
.productosTienda .balonfutbol {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.productosTienda .balonnfl {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.productosTienda .gorraf1 {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.productosTienda .guantebaseball {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.productosTienda .jerseynba {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.productosTienda img {
  width: 250px;
  height: 200px;
}
.productosTienda p {
  text-align: left;
}

.productImage {
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  width: 200px;
  margin: auto;
}

.titulo3 {
  margin: auto;
}

.seccion3 {
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  padding: 20px;
}
.seccion3 h1 {
  text-align: center;
}
.seccion3 button {
  margin-top: 20px;
}

.contacto {
  background-color: #C8102E;
}

.tienda {
  margin-bottom: 50px;
}
.tienda h1 {
  text-align: center;
  padding: 30px;
}
.tienda .buscar {
  margin-top: 200px;
}

footer {
  height: auto;
  width: 100%;
  background-color: black;
  text-align: center;
  padding-bottom: 30px;
}
footer i {
  font-size: 20px;
  letter-spacing: 15px;
  color: white;
}

#seccionpie {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.pie1 {
  padding-top: 30px;
  text-align: left;
  text-transform: uppercase;
}
.pie1 h2 {
  color: white;
  font-size: 15px;
}
.pie1 a {
  color: white;
  text-decoration: none;
  font-size: 15px;
}
.pie1 a:hover {
  text-decoration: underline;
}

.logo2 {
  height: 150px;
  margin-left: -50%;
  padding-top: 30px;
}

.rrsspie {
  padding-top: 10px;
  line-height: 40px;
}
.rrsspie i {
  color: white;
}
.rrsspie i:hover {
  color: #C8102E;
}
.rrsspie h2 {
  color: white;
  font-size: 15px;
  text-transform: uppercase;
}

/*# sourceMappingURL=s.map */
