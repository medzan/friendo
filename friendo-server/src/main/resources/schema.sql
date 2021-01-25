DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id  INT AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  mobile_phone VARCHAR(50) NOT NULL,
  role VARCHAR(50) NOT NULL,
  birth_date VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  status TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
);
--
--CREATE TABLE users (
--  first_name VARCHAR(50) NOT NULL,
--  last_name VARCHAR(50) NOT NULL,
--  email VARCHAR(50) NOT NULL,
--    last_name VARCHAR(50) NOT NULL,
--
--  last_name VARCHAR(50) NOT NULL,
--  last_name VARCHAR(50) NOT NULL,
--  last_name VARCHAR(50) NOT NULL,
--  last_name VARCHAR(50) NOT NULL,
--
--  password VARCHAR(100) NOT NULL,
--  status TINYINT NOT NULL DEFAULT 1,
--  PRIMARY KEY (email)
--);
--   private long id;
--    @Column(name = "first_name")
--    private String firstName;
--    @Column(name ="last_name")
--    private String lastName;
--    private String email;
--    @Column(name="mobile_phone")
--    private String mobilePhone;
--    @Column(name="birth_date")
--    private String birthDate;
--    private String city;
--    private String role;
--    private String status;
--    private String password;
--
--DROP TABLE IF EXISTS authorities;
--
--CREATE TABLE authorities (
--  email VARCHAR(50) NOT NULL,
--  authority VARCHAR(50) NOT NULL,
--  FOREIGN KEY (email) REFERENCES users(email)
--);
--
--CREATE UNIQUE INDEX ix_auth_email on authorities (email,authority);