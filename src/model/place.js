class Place {
  constructor(id, title, image, address, coords, status, price, area) {
    this.id = id.toString();
    this.title = title;
    this.image = image;
    this.address = address;
    this.coords = coords;
    this.status = status;
    this.price = price.toString();
    this.area = area.toString();
  }
}

export default Place;
