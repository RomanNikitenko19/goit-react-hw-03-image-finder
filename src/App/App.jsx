import React, { Component } from "react";
import { fetchData } from "../services/Api/api";
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Button from "../components/Button/Button";
import "./App.module.css";

// await fetchData("cat", "1").then((res) => console.log(res));//data.hits
class App extends Component {
  state = {
    images: [],
    request: "",
    // isLoading: false,
    // error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    const { request, page } = this.state;

    if (prevState.page !== page || prevState.request !== request) {
      // fetchData(request).then(data => console.log(data.hits));//totalHits, hits//webformatURL,largeImageURL,id

      try {
        const data = await fetchData(request, page);
        // console.log(data);
        this.setState((prevState) => ({ images: [...prevState.images, ...data.hits] }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  addDataForRequest = (value) => {
    return this.setState({ request: value });
  };

  increasePageRequest = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render() {
    return (
      <>
        <Searchbar addDataForRequest={this.addDataForRequest} />
        <ImageGallery images={this.state.images} />
        <Button increasePageRequest={this.increasePageRequest} />
      </>
    );
  }
}

export default App;
