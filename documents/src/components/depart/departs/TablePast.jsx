

export default function TablePast() {
  return (
    <>
      <div className="bg-white w-full px-5 py-3 table-responsive">
        <table className="table w-[100%] table-striped">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Nom</th>
              <th>Post-nom</th>
              <th>Pré-nom</th>
              <th>Téléphone</th>
              <th>Statut</th>
              <th>Options</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
