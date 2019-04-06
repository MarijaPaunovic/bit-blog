
class Author {
    constructor(userId, name, username, email, phone, address, company) {
        this.userId = userId;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.street = address.street;
        this.city = address.city;
        this.zipCode = address.zipcode;
        this.companyName = company.name;
        this.companyBs = company.bs;
        this.geoLat = address.geo.lat;
        this.geoLng = address.geo.lng
    }
}
export default Author;