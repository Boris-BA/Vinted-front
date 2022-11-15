import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [etat, setEtat] = useState("");
  const [lieu, setLieu] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState();
  const [data, setData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(image);
      // console.log(prix);
      const formData = new FormData();
      formData.append("title", titre);
      formData.append("description", description);
      formData.append("price", prix);
      formData.append("condition", etat);
      formData.append("city", lieu);
      formData.append("brand", marque);
      formData.append("size", taille);
      formData.append("color", couleur);
      formData.append("picture", image);
      // console.log(formData);
      // const response = await axios.post(
      //   "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      //   formData,
      //   {
      //     headers: {
      //       authorization: `Bearer ${token}`,
      //       // Je rpécise que j'envoie un formdata
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      const response = await axios.post(
        "https://site--backend-vinted--2qgmjpqnw8yp.code.run/offer/publish/upload",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            // Je rpécise que j'envoie un formdata
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data);
    }
  };

  return token ? (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setTitre(event.target.value);
          }}
          type="text"
          placeholder="titre"
          value={titre}
        />
        <textarea
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
          name="description"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input
          onChange={(event) => {
            setMarque(event.target.value);
          }}
          type="text"
          placeholder="Marque"
          value={marque}
        />
        <input
          onChange={(event) => {
            setTaille(event.target.value);
          }}
          type="text"
          placeholder="Taille"
          value={taille}
        />
        <input
          onChange={(event) => {
            setCouleur(event.target.value);
          }}
          type="text"
          placeholder="Couleur"
          value={couleur}
        />
        <input
          onChange={(event) => {
            setEtat(event.target.value);
          }}
          type="text"
          placeholder="Etat"
          value={etat}
        />
        <input
          onChange={(event) => {
            setLieu(event.target.value);
          }}
          type="text"
          placeholder="Lieu"
          value={lieu}
        />
        <input
          onChange={(event) => {
            setPrix(event.target.value);
          }}
          type="text"
          placeholder="Prix"
          value={prix}
        />
        <input
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        <input type="submit" value="Ajouter" />
      </form>
      {data && <img src={data.secure_url} alt="" />}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
