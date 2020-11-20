import React, { Component } from "react";
import ImageGallery from "./Componets/ImageGallery/ImageGallery";
import Searchbar from "./Componets/Searchbar/Searchbar";
import Button from "./Componets/Button/Button";
import Modal from "./Componets/Modal/Modal";
import { createApi, request } from "./helpers/request";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

class App extends Component {
  state = {
    listimg: [],
    modalimg: "",
    ismodalopen: false,
    currentpage: 1,
    perPage: 12,
    loader: false,
    error: false,
    search: "",
  };

  // loderToogle = () => {
  //   this.setState((prev) => ({
  //     loader: !prev.loder
  //   }));
  // }

  // errorToogle = (status) => {
  //   this.setState({
  //     error: status
  //   });
  // }

  currrentModal = (e) => {
    this.setState({
      modalimg: e.target.dataset.large,
      ismodalopen: true,
    });
  };

  closeModal = (e) => {
    this.setState({
      ismodalopen: false
    })
  }

  searchValue = (value) => {
    this.setState({
      search: value,
    });
  };

  loadMore = async () => {
    const data = await this.getImages(this.state.search, this.state.currentpage);

    this.setState((prev) => ({
      listimg: [...prev.listimg, ...data],
      currentpage: prev.currentpage + 1,
    }));
  };

  getnewImages = async (searchValue) => {
    const data = await this.getImages(searchValue);
    this.setState({
      currentpage: 2,
      listimg: [...data],
    });
  };

  getImages = async (search = "sport", currentpage = 1, perPage = 12) => {
    let images = [];
    this.setState({
      loader: true,
    });
    const url = createApi(
      `https://pixabay.com/api/?q=${search}&page=${currentpage}&per_page=${perPage}&image_type=photo&`
    );

    try {
      images = [...(await request("get", url))];
    } catch (error) {
      this.setState({
        error: true,
      });
    } finally {
      this.setState({
        loader: false,
      });
    }

    return images;
  };

  async componentDidMount() {
    const data = await this.getImages();
    this.setState({
      currentpage: 2,
      search: "sport",
      listimg: [...data],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  }

  render() {
    const { listimg, loader, error, ismodalopen, modalimg } = this.state;
    return (
      <div>
        <Searchbar searchValue={this.searchValue} getnewImages={this.getnewImages} />
        {error && <h1 className="Error">Some error, try later</h1>}
        <ImageGallery listimg={listimg} currrentModal={this.currrentModal} />
        {ismodalopen && <Modal listimg={modalimg} closeModal={this.closeModal} />}
        {loader && <Loader type="Audio" color="#00BFFF" height={200} width={200} timeout={3000} />}
        {listimg.length && !loader && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}

export default App;
