class Property {
  constructor(id, title, images, address, coords, status, price, area) {
    this.id = id.toString();
    this.title = title;
    this.images = images;
    this.address = address;
    this.coords = coords;
    this.status = status;
    this.price = price.toString();
    this.area = area.toString();
  }
}

export default Property;
