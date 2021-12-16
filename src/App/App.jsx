import React, { Component } from "react";
import { fetchData } from "../services/Api/api";
import LoaderSpinner from "../components/Loader/LoaderSpinner";
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Button from "../components/Button/Button";
import Modal from "../components/Modal"
import "./App.module.css";

class App extends Component {
  state = {
    images: [],
    request: "",
    isOpen: false,
    page: 1,
    largeImageURL: "",
  };
  //1
  // async componentDidUpdate(prevProps, prevState, snapshot) {
  //   const { request, page } = this.state;

  //   if (prevState.page !== page || prevState.request !== request) {

  //     try {
  //       const data = await fetchData(request, page);
  //       this.setState((prevState) => ({ images: [...prevState.images, ...data.hits] }));//prevState.request !== request ?data.hits:[...prevState.images, ...data.hits]
  //     } catch (error) {
  //       this.setState({ error: error.message });
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   }
  // }
  //2
  // async componentDidUpdate(prevProps, prevState, snapshot) {
  //   const { request, page } = this.state;

  //   if (prevState.page !== page || prevState.request !== request) {
  //     try {
  //       const data = await fetchData(request, page);
  //       prevState.request !== request
  //         ? this.setState({ images: data.hits, page: 1 })
  //         : this.setState((prevState) => ({ images: [...prevState.images, ...data.hits] }));
  //     } catch (error) {
  //       this.setState({ error: error.message });
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   }
  // }

  // 3 ???
  async componentDidUpdate(prevProps, prevState, snapshot) {
    const { request, page } = this.state;

    if (prevState.page !== page || prevState.request !== request) {
      try {
        const data = await fetchData(request, page);
        this.setState((prevState) => ({ images: page === 1 ? data.hits : [...prevState.images, ...data.hits] })); 
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  addDataForRequest = (value) => {
    return this.setState({ request: value , page: 1});
  };

  increasePageRequest = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  toggleModal = (event) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  getAPicture = (value) => {
    this.setState({ largeImageURL: value });
  };

  render() {
    const { isOpen, images, largeImageURL } = this.state;
    return (
      <>
        <Searchbar addDataForRequest={this.addDataForRequest} />
        <ImageGallery images={images} getAPicture={this.getAPicture} toggleModal={this.toggleModal} />
        <LoaderSpinner />
        {images.length > 0 && <Button increasePageRequest={this.increasePageRequest} />}
        {isOpen && <Modal largeImageURL={largeImageURL} toggleModal={this.toggleModal} />}
      </>
    );
  }
}

export default App;
