document.addEventListener("DOMContentLoaded", () => {
  const materias = [
    // Cuatrimestre 1
    { id: "calculo1", nombre: "Cálculo I", correlativas: [], cuatrimestre: "c1q1" },
    { id: "quimica_general", nombre: "Química General", correlativas: [], cuatrimestre: "c1q1" },
    { id: "intro_ingenieria", nombre: "Intro a la Ingeniería Química", correlativas: [], cuatrimestre: "c1q1" },
    { id: "intro_fisica", nombre: "Intro a la Física", correlativas: [], cuatrimestre: "c1q1" },

    // Cuatrimestre 2
    { id: "algebra", nombre: "Álgebra Lineal", correlativas: [], cuatrimestre: "c1q2" },
    { id: "fisica", nombre: "Física", correlativas: ["intro_fisica"], cuatrimestre: "c1q2" },
    { id: "quimica_inorganica", nombre: "Química Inorgánica", correlativas: ["quimica_general"], cuatrimestre: "c1q2" },

    // Cuatrimestre 3
    { id: "calculo2", nombre: "Cálculo II", correlativas: ["algebra"], cuatrimestre: "c2q1" },
    { id: "electromagnetismo", nombre: "Electromagnetismo", correlativas: ["fisica"], cuatrimestre: "c2q1" },
    { id: "informatica", nombre: "Informática", correlativas: ["algebra"], cuatrimestre: "c2q1" },
    { id: "dibujo", nombre: "Dibujo", correlativas: ["calculo1", "quimica_general", "intro_ingenieria"], cuatrimestre: "c2q1" },

    // Cuatrimestre 4
    { id: "ec_diferenciales", nombre: "Ecuaciones Diferenciales", correlativas: ["calculo2"], cuatrimestre: "c2q2" },
    { id: "metodos_numericos", nombre: "Métodos Numéricos", correlativas: ["calculo2", "informatica"], cuatrimestre: "c2q2" },
    { id: "termodinamica", nombre: "Termodinámica", correlativas: ["calculo2"], cuatrimestre: "c2q2" },
    { id: "quimica_organica", nombre: "Química Orgánica", correlativas: ["quimica_inorganica"], cuatrimestre: "c2q2" },

    // Cuatrimestre 5
    { id: "probabilidad", nombre: "Probabilidad y Estadística", correlativas: ["algebra"], cuatrimestre: "c3q1" },
    { id: "ingles1", nombre: "Inglés Técnico I", correlativas: ["calculo1", "quimica_general", "intro_ingenieria"], cuatrimestre: "c3q1" },
    { id: "estabilidad", nombre: "Elementos de Estabilidad", correlativas: ["algebra", "fisica"], cuatrimestre: "c3q1" },
    { id: "balance", nombre: "Balance de Masa y Energía", correlativas: ["termodinamica", "informatica"], cuatrimestre: "c3q1" },
    { id: "fisicoquimica", nombre: "Fisicoquímica", correlativas: ["ec_diferenciales", "metodos_numericos", "termodinamica"], cuatrimestre: "c3q1" },

    // Cuatrimestre 6
    { id: "ingles2", nombre: "Inglés Técnico II", correlativas: ["ingles1"], cuatrimestre: "c3q2" },
    { id: "mecanica", nombre: "Mecánica y Tec de los Materiales", correlativas: ["est
