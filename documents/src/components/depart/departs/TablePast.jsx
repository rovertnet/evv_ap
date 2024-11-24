

export default function TablePast() {
  return (
    <>
      <div className="cards my-4 border-0">
        <div className="table-responsive">
          <table className="table w-[100%] table-striped">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Nom</th>
                <th>Post-nom</th>
                <th>Pré-nom</th>
                <th>Sexe</th>
                <th>Téléphone</th>
                <th>Statut</th>
                <th>Options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>01</td>
                <td>Image</td>
                <td>Matundu</td>
                <td>Kabamba</td>
                <td>Robert</td>
                <td>M</td>
                <td>+243 823444705</td>
                <td>Serviteur</td>
                <td>Tout</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
