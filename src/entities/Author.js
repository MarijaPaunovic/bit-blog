
class Author {
    constructor(userId, name, username, email, phone, street, city, zipcode, companyName, companyBs, addressGeoLat, addressGeoLng) {
        this.userId = userId;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.zipCode = zipcode;
        this.companyName = companyName;
        this.companyBs = companyBs;
        this.geoLat = addressGeoLat;
        this.geoLng = addressGeoLng
    }
}
export default Author;