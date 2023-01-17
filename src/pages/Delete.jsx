import Spiner from "../reusables/spiner/Spinner";
import { useGetBikesQuery } from "../components/api/apiSlice";
import { useDeleteBikeMutation } from "../components/api/apiSlice";
import { useState } from "react";
import Modal from "../reusables/notifications/modal/Modal";
const Delete = () => {
  const [modal, setModal] = useState({ alert: false, message: "", type: "" });
  const [deleteBike] = useDeleteBikeMutation();
  const handelBikeDelete = (id, name, brand) => {
    deleteBike(id)
      .unwrap()
      .then(() =>
        setModal({
          alert: true,
          message: `Yayyyy! Bike: ${name} ${brand}  Deleted successfully`,
          type: "success",
        })
      )
      .catch(() =>
        setModal({
          alert: true,
          message: `Oops! Bike: ${name} ${brand} not deleted `,
          type: "error",
        })
      );
  };
  const {
    data: Bikes,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetBikesQuery();

  return (
    <>
      <div>
        <h1>All Bikes</h1>
        {isLoading && <Spiner />}
        {isError && error}
        {isSuccess &&
          Bikes.map((bike) => (
            <div key={bike.id}>
              <h2>
                {bike.name}
                {bike.brand}
              </h2>
              <button
                onClick={() => handelBikeDelete(bike.id, bike.name, bike.brand)}
              >
                Detele
              </button>
            </div>
          ))}
        {isFetching && <Spiner />}
      </div>
      {modal.alert && (
        <Modal
          type={modal.type}
          message={modal.message}
          onClose={() => setModal({ alert: false, message: "", type: "" })}
        />
      )}
    </>
  );
};

export default Delete;
