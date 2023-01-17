import Container from "../reusables/container/Container";
import UseChange from "../hooks/UseChange";
import Input from "../reusables/inputFields/Inputs";
import FileUpload from "../reusables/inputFields/FileUpload";
import UseFileUpload from "../hooks/useFileUpload";
import { useAddBikeMutation } from "../components/api/apiSlice";

const AddBike = () => {
  const [type, handleTypeChange] = UseChange("");
  const [model, handleModelChange] = UseChange("");
  const [description, handleDescriptionChange] = UseChange("");
  const [price, handlePriceChange] = UseChange("");
  const { file, preview, handleFileChange } = UseFileUpload();
  const [addBike, { isLoading }] = useAddBikeMutation();

  const canSave =
    [file, type, model, price, description].every(Boolean) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        await addBike({
          images: {
            file,
          },
          color: ["red", "yellow"],
          name: model,
          bike_type: type,
          description,
          brand: "gjgf",
          daily_rate: price,
        }).unwrap();

        handleTypeChange("");
        handleModelChange("");
        handleDescriptionChange("");
        handlePriceChange("");
        handleFileChange("");
      } catch (err) {
        console.log("Failed to save the bike:", err);
      }
    }
  };

  return (
    <Container>
      <h1>Add a Bike</h1>
      <form onSubmit={handleSubmit} className="flex flex-column">
        <FileUpload
          file={file}
          preview={preview}
          handleFileChange={(input) => handleFileChange(input)}
        />
        <Input
          label="Bike Type"
          type="text"
          value={type}
          onChange={(input) => handleTypeChange(input)}
        />
        <Input
          label="Bike Model"
          type="text"
          value={model}
          onChange={(input) => handleModelChange(input)}
        />
        <Input
          label="Bike Description"
          type="text"
          value={description}
          onChange={(input) => handleDescriptionChange(input)}
        />
        <Input
          label="Bike Price"
          type="decimal"
          value={price}
          onChange={(input) => handlePriceChange(input)}
        />
        <button type="submit">Add Bike</button>
      </form>
    </Container>
  );
};

export default AddBike;
