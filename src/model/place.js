class Place {
  constructor(id, title, image, address, coords, status, price, area) {
    this.id = id.toString();
    this.title = title;
    this.image = image;
    this.address = address;
    this.coords = coords;
    this.status = status;
    this.price = price;
    this.area = area;
  }
}

export default Place;
