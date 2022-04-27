function global() {
  let num1 = 89;
  let num2 = 49;
  function multi() {
    return num1 * num2;
  }
  multi(); //IT WILL GIVE US 89*49
  function add() {
    let num1 = 69;
    let num2 = 87;
    function addition() {
      return num1 + num2;
    }
    console.log(addition());
  }
  add();
}
