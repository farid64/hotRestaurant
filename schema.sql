CREATE database hot_restaurantDB;

CREATE TABLE hot_restaurants (
  uniqueID INT NOT NULL AUTO_INCREMENT,
  OwnerName VARCHAR(100) NULL,
  Phonenumber VARCHAR(100) NULL,
  EmailID VARCHAR(100) NULL,
  PRIMARY KEY (uniqueID)
);

select * from hot_restaurants;