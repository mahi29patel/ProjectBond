DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
id INT NOT NULL,
name VARCHAR(250) NOT NULL,
age INT NOT NULL
);

DROP TABLE IF EXISTS trade;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS security;

CREATE TABLE book (
                      Id INT PRIMARY KEY ,
                      BookName VARCHAR(250) NOT NULL
);


CREATE TABLE users (
                      Id INT PRIMARY KEY ,
                      Name VARCHAR(250) NOT NULL,
                      Email Varchar(250) NOT NULL,
                      Password VARCHAR(50) NOT NULL,
                      Role Varchar(50) NOT NULL
);


CREATE TABLE security (
                       Id INT PRIMARY KEY ,
                       ISIN INT NOT NULL ,
                       CUSIP INT NOT NULL,
                       Issuer Varchar(250) NOT NULL,
                       MaturityDate DATE NOT NULL ,
                       Coupon INT NOT NULL,
                       Type Varchar(30) NOT NULL,
                       FaceValue DECIMAL(7,2)  NOT NULL,
                       Status Varchar(20) NOT NULL
);


CREATE TABLE trade (
                       Id INT PRIMARY KEY ,
                       BookId INT NOT NULL,
                       SecurityId INT NOT NULL,
                       Quantity INT NOT NULL,
                       Status Varchar(20) NOT NULL,
                       Price DECIMAL(7,2)  NOT NULL,
                       Buy_Sell SMALLINT NOT NULL,
                       TradeDate DATE NOT NULL ,
                       SettlementDate DATE NOT NULL,

                    foreign key (BookId) references book(Id),
                    foreign key (SecurityId) references security(Id)
);

DROP TABLE IF EXISTS BookUser;

CREATE TABLE BookUser (
                       BookId  INT,
                       UserId INT,
                       PRIMARY KEY(BookId, UserId),
                       foreign key (BookId) references book(Id),
                       foreign key (UserId) references users(Id)
);


