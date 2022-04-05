<>
  //////////////////////////////////////////////test radio para opcion de admin
  o no en el editUser
  <div className="form-check mt-3">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="admin"
      onClick={() => setUser(...user, (user.isAdmin = true))}
    />
    <label className="form-check-label" for="admin">
      Administrador
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="client"
      onClick={() => setUser(...user, (user.isAdmin = true))}
    />
    <label className="form-check-label" for="client">
      Cliente
    </label>
  </div>
  /////////////////////////////////////////////////test select para opcion de
  admin o no en el editUser
  <label className="mt-3 w-75 form-label" htmlFor="isAdmin">
    Tipo de usuario
  </label>
  <select
    id="isAdmin"
    className="form-select w-25"
    aria-label="Default select example"
    onChange={(e) => setUser(...user, (user.isAdmin = e.target.value))} // check si el value de las option es boolean o es string, si es tring poner otro valor (0 y 1) y poner un if
  >
    {user.isAdmin ? (
      <>
        <option selected value={true}>
          Administrador
        </option>
        <option value={false}>Cliente</option>
      </>
    ) : (
      <>
        <option value={true}>Administrador</option>
        <option selected value={false}>
          Cliente
        </option>
      </>
    )}
  </select>
  //////////////////////////////////////////////////////////////////////////////////////////////
</>;
