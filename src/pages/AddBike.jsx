import Container from '../reusables/container/Container';
import UseChange from '../hooks/UseChange';
import Input from '../reusables/inputFields/Inputs';
import FileUpload from '../reusables/inputFields/FileUpload';
import UseFileUpload from '../hooks/useFileUpload';
import { useAddBikeMutation } from '../components/api/apiSlice';
import { useNavigate } from 'react-router-dom';

const AddBike = () => {
  const [name, handleNameChange] = UseChange('');
  const [model, handleModelChange] = UseChange('');
  const [description, handleDescriptionChange] = UseChange('');
  const [price, handlePriceChange] = UseChange('');
  const [sgingleColor, handleColorChange] = UseChange('');
  const { file, preview, handleFileChange } = UseFileUpload();

  const [addBike, { isLoading }] = useAddBikeMutation();
  const navigate = useNavigate();
  const canSave =
    [file, name, model, price, description].every(Boolean) && !isLoading;
  const data = {
    images: {
      [sgingleColor]: preview,
    },
    color: [sgingleColor],
    name: name,
    brand: model,
    bike_type: 'Mountain',
    description,
    daily_rate: price,
    user_id: 1,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    if (canSave) {
      try {
        await addBike(data).unwrap();
        navigate('/bikes');
      } catch (err) {
        console.log('Failed to save the bike:', err);
      }
    }
  };

  return (
    <Container>
      <div className="form-container flex flex-column">
        <span className="flex flex-column center greeting">
          <h2>Add a Bike</h2>
        </span>
        <form onSubmit={handleSubmit} className="flex flex-column">
          <Input
            label="Bike Name"
            type="text"
            value={name}
            onChange={(input) => handleNameChange(input)}
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
            label="Bike Color"
            type="text"
            value={sgingleColor}
            onChange={(input) => handleColorChange(input)}
          />
          <Input
            label="Bike Price"
            type="decimal"
            value={price}
            onChange={(input) => handlePriceChange(input)}
          />
          <FileUpload
          type='upload'
            file={file}
            preview={preview}
            handleFileChange={(input) => handleFileChange(input)}
          />
          <button type="submit">Add Bike</button>
        </form>
      </div>
    </Container>
  );
};

export default AddBike;
