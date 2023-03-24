const data = [
  {
    user: "marc_valero",
    passwd: "1234",
  },
  {
    user: "marc",
    passwd: "1234",
  },
];

export default function ValidateLogin(user, passwd) {
  let find = false;
  data.map((usuario) => {
    if (usuario.user === user && usuario.passwd === passwd) {
      console.log("Validado", { user, passwd });
      find = true;
      return "encontrado";
    } else {
      return "no corresponde";
    }
  });

  return find;
}
